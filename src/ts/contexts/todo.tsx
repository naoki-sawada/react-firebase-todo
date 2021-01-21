import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../utils/firebase";
import { AuthContext } from "./auth";
import firebase from "firebase";

type Todo = {
  text: string;
  isComplete: boolean;
  createAt: string;
  updateAt: string;
};

type TodoProps = {
  todos: { [id: string]: Todo };
  error: Error;
  add: (text: string) => Promise<void>;
  update: (id: string, todo: Todo) => Promise<void>;
  remove: (id: string) => Promise<void>;
};

const TodoContext = createContext<TodoProps>(null);

const TodoProvider: React.FC<any> = ({ children }) => {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) return;

    const cb = (snapshot: firebase.database.DataSnapshot) => {
      setTodos(snapshot.val());
    };

    const ref = db.ref(`todos/${currentUser.uid}`);
    ref.on("value", cb, (e: Error) => {
      setError(e);
    });

    return () => ref.off("value", cb);
  }, [currentUser]);

  const add = useCallback(async (text: string) => {
    try {
      await db.ref(`todos/${currentUser.uid}`).push().set({
        text,
        isComplete: false,
        createAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
      });
    } catch (e) {
      setError(e);
    }
  }, []);

  const update = useCallback(async (id: string, todo: Todo) => {
    try {
      await db
        .ref(`todos/${currentUser.uid}/${id}`)
        .set(
          todo.isComplete === false
            ? {
                ...todo,
                updateAt: new Date().toISOString(),
                createAt: new Date().toISOString(),
              }
            : { ...todo, updateAt: new Date().toISOString() },
        );
    } catch (e) {
      setError(e);
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    try {
      await db.ref(`todos/${currentUser.uid}/${id}`).set(null);
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, error, add, update, remove }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };

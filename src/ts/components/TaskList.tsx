import React, { useContext, useMemo } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { TodoContext } from "../contexts/todo";
import { Loading } from "./Loading";

export const TaskList: React.FC<any> = () => {
  const { todos, update, remove } = useContext(TodoContext);

  const sortedTodos = useMemo(() => {
    if (!todos) return [];

    const arrayTodos = Object.keys(todos).map((id) => ({
      id,
      ...todos[id],
    }));

    const unCompletedTodos = arrayTodos
      .filter(({ isComplete }) => !isComplete)
      .sort((a, b) => (new Date(a.createAt) < new Date(b.createAt) ? 1 : -1));
    const completedTodos = arrayTodos
      .filter(({ isComplete }) => isComplete)
      .sort((a, b) => (new Date(a.updateAt) < new Date(b.updateAt) ? 1 : -1));

    return [...unCompletedTodos, ...completedTodos];
  }, [todos]);

  const handleCheck = (id: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    update(id, { ...todos[id], isComplete: event.target.checked });
  };

  const handleText = (id: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    update(id, { ...todos[id], text: event.target.value });
  };

  const handleDelete = (id: string) => (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    remove(id);
  };

  return (
    <>
      {todos ? (
        sortedTodos.map(({ id, isComplete, text }) => (
          <InputGroup key={id} className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                checked={isComplete}
                onChange={handleCheck(id)}
              />
            </InputGroup.Prepend>
            <FormControl disabled={isComplete} value={text} onChange={handleText(id)} />
            <InputGroup.Append>
              <Button variant="danger" onClick={handleDelete(id)}>
                Delete
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
};

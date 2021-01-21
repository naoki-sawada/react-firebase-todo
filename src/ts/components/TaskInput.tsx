import React, { useContext, useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { TodoContext } from "../contexts/todo";

export const TaskInput: React.FC<any> = () => {
  const [todo, setTodo] = useState("");
  const { add, error } = useContext(TodoContext);

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    add(todo);
    setTodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Add a task, press Enter to save."
        value={todo}
        onChange={handleText}
      />
    </Form>
  );
};

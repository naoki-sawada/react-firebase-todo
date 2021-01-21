import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TodoProvider } from "../contexts/todo";
import { Header } from "./Header";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";

export const Todos: React.FC<any> = () => {
  return (
    <TodoProvider>
      <Header />
      <Container className="my-3">
        <Row>
          <Col>
            <TaskInput />
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <TaskList />
          </Col>
        </Row>
      </Container>
    </TodoProvider>
  );
};

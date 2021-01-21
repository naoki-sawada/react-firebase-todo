import React, { useContext, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../contexts/auth";

export const Login: React.FC<any> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signIn } = useContext(AuthContext);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          {error && (
            <Alert key="error" variant="danger">
              {error.message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button disabled={loading} variant="primary" type="submit" block={true}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

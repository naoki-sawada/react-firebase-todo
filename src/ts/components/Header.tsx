import React, { useContext } from "react";
import { Navbar, Button } from "react-bootstrap";
import { AuthContext } from "../contexts/auth";

export const Header: React.FC<any> = () => {
  const { loading, signOut } = useContext(AuthContext);
  return (
    <Navbar className="justify-content-end" bg="light" expand="lg">
      <Button variant="outline-primary" disabled={loading} onClick={signOut}>
        Logout
      </Button>
    </Navbar>
  );
};

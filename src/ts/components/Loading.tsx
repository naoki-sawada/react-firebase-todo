import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading: React.FC<any> = () => {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <Spinner animation="border" variant="primary" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

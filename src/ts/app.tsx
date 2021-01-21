import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./contexts/auth";
import { Router } from "./components/Router";
import { Login } from "./components/Login";
import { Loading } from "./components/Loading";
import { Todos } from "./components/Todos";

ReactDOM.render(
  <AuthProvider>
    <Router
      lenderLoading={<Loading />}
      lenderLogin={<Login />}
      lenderTodos={<Todos />}
    />
  </AuthProvider>,
  document.getElementById("main"),
);

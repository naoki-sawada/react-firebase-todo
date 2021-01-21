import React, { ReactElement, useContext } from "react";
import { AuthContext } from "../contexts/auth";

type RouterProps = {
  lenderLoading: ReactElement<any, any>;
  lenderLogin: ReactElement<any, any>;
  lenderTodos: ReactElement<any, any>;
};

export const Router: React.FC<RouterProps> = ({
  lenderLoading,
  lenderLogin,
  lenderTodos,
}) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser === undefined) return lenderLoading;
  if (currentUser) return lenderTodos;

  return lenderLogin;
};

import firebase from "firebase";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

type AuthProps = {
  currentUser: firebase.User;
  loading: boolean;
  error: Error;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthProps>(null);

const AuthProvider: React.FC<any> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(undefined);

  const signIn = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    try {
      await auth.signOut();
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, loading, error, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

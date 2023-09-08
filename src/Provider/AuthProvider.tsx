import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { app } from "../features/Firebase/firebase.config";

export const AuthContext = createContext<any | null>(null); // Update the createContext type to match your authInfo object.

const auth = getAuth(app);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Specify React.ReactNode for children prop.

  const [user, setUser] = React.useState<any | null>(null); // Update the type for user state.
  const [loading, setLoading] = React.useState<boolean>(true);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe(); // Remove the unnecessary return statement.
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

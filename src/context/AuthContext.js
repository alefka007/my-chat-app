import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/index";

export const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })

    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  )
}


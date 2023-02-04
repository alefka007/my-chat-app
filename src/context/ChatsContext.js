import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/index";

export const ChatContext = React.createContext();

export const ChatContextProvider = ({ children }) => {
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
    <ChatContext.Provider value={currentUser}>
      {children}
    </ChatContext.Provider>
  )
}

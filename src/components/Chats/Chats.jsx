import React, { useEffect, useState, useContext } from 'react'
import classes from './Chats.module.css';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';


const Chats = () => {
  const [chats, setChats] = useState([]);
  const currenUser = useContext(AuthContext);


  useEffect(() => {
    const getChats = () => {
      const unSubscribe = onSnapshot(
        doc(db, "userChats", currenUser.uid), (doc) => {
          setChats(doc.data());
        }
      );
      return () => {
        unSubscribe()
      }
    }
    currenUser.uid && getChats()
  }, [currenUser.uid])

  return (
    <div className={classes.chats}>
      {Object.entries(chats)?.map((chat) => (
        <div key={chat[0]}
          className={classes.userChat}>
          <img src={chat[1].userInfo.photoURL} alt='' />
          <div className={classes.userChatInfo}>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats
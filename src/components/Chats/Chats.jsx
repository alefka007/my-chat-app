import React, { useEffect, useState, useContext } from 'react'
import classes from './Chats.module.css';
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { db } from '../../firebase';


const Chats = () => {
  const [chats, setChats] = useState([]);
  const currenUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);


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

  const handleSelect = (user) => {
    dispatch({type: 'CHANGE_USER', payload: user})
  }

  return (
    <div className={classes.chats}>
      {Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
        <div
          key={chat[0]}
          className={classes.userChat}
          onClick={()=> handleSelect(chat[1].userInfo)}
          >
          <img src={chat[1].userInfo?.photoURL} alt='фото' />
          <div className={classes.userChatInfo}>
            <span>{chat[1].userInfo?.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats
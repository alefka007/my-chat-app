import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { db } from '../../firebase';
import Message from '../Message/Message';
import classes from './Messages.module.css';


const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { state } = useContext(ChatContext);

  useEffect(() => {
    const getMessages = () => {
      const unSubscribe = onSnapshot(doc(db, 'chats', state.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages)
      })
      return () => {
        unSubscribe()
      }
    }
    state.chatId && getMessages();
  }, [state.chatId])

  return (
    <div className={classes.messages}>
      {messages.map(mes => (
        <Message message={mes} key={mes.id} />
      ))}
    </div>
  )
}

export default Messages
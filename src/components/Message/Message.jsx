import React, { useContext, useRef, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import classes from './Message.module.css';

const Message = ({message}) => {
  const currenUser = useContext(AuthContext);
  const { state } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView(false)
  }, [message])
  
  
  return (
    <div ref={ref} className={message.senderId === currenUser.uid ? classes.message : 
      (classes.message + ' ' + classes.opposite)}>
      <div className={classes.messageInfo}>
        <img src={message.senderId === currenUser.uid ? currenUser.photoURL :
          state.user.photoURL} alt='photo' />
        <span>Hello</span>
      </div>
      <div className={classes.messageContent}>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt='photo' />}
      </div>
    </div>
  )
}

export default Message
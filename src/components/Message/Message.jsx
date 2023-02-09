import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import classes from './Message.module.css';

const Message = ({message}) => {
  const currenUser = useContext(AuthContext);
  const { state } = useContext(ChatContext);

  return (
    <div className={message.senderId === currenUser.uid ? classes.message : 
      (classes.message + ' ' + classes.opposite)}>
      <div className={classes.messageInfo}>
        <img src={message.senderId === currenUser.uid ? currenUser.photoURL :
          state.user.photoURL} alt='photo' />
        <span>{message}</span>
      </div>
      <div className={classes.messageContent}>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt='photo' />}
      </div>
    </div>
  )
}

export default Message
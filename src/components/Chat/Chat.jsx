import React, { useContext } from 'react';
import classes from './Chat.module.css';
import Camera from '../../img/camera.png';
import AddUser from '../../img/add_user.png';
import More from '../../img/more.png';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import { ChatContext } from '../../context/ChatContext';

const Chat = () => {
  const { state } = useContext(ChatContext);
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <span>{state.user?.displayName}</span>
        <div className={classes.chatIcons}>
          <img src={Camera} alt='camera' />
          <img src={AddUser} alt='addUser' />
          <img src={More} alt='more' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat

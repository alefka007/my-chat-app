import React, { useState, useContext } from 'react';
import Button from '../Button/Button';
import classes from './Input.module.css';
import addImg from '../../img/add.png';
import attach from '../../img/attach.png';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const currentUser = useContext(AuthContext);
  const { state } = useContext(ChatContext);

  const handleSend = () => {

  }

  return (
    <div className={classes.inputContainer}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={classes.input}
        type='text'
        placeholder='Введите сообщение...'
      />
      <div className={classes.send}>
        <img src={attach} alt='attach' />
        <label>
          <input type='file'
            style={{ display: 'none' }}
            onChange={(e) => setImg(e.target.file[0])}
          />
          <img src={addImg} alt='addImg' />
        </label>
        <Button onClick={handleSend}>Отправить</Button>
      </div>
    </div>
  )
}

export default Input
import React from 'react';
import Button from '../Button/Button';
import classes from './Input.module.css';
import addImg from '../../img/add.png';
import attach from '../../img/attach.png';

const Input = () => {
  return (
    <div className={classes.inputContainer}>
      <input
        className={classes.input}
        type='text'
        placeholder='Введите сообщение...' 
        />
      <div className={classes.send}>
        <img src={attach} alt='attach' />
        <label>
          <input type='file' style={{ display: 'none' }} />
          <img src={addImg} alt='addImg' />
        </label>
        <Button>Отправить</Button>
      </div>
    </div>
  )
}

export default Input
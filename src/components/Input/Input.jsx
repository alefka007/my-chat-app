import React, { useState, useContext } from 'react';
import Button from '../Button/Button';
import classes from './Input.module.css';
import addImg from '../../img/add.png';
import attach from '../../img/attach.png';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import { updateDoc, arrayUnion, doc, Timestamp, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import uuid from 'react-uuid';

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const currentUser = useContext(AuthContext);
  const { state } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      
      uploadTask.on(
        (err) => {

        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', state.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })
          })
        },
      )

    } else {
      await updateDoc(doc(db, 'chats', state.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [state.chatId + '.lastMessage']: {
        text
      },
      [state.chatId + '.date']: serverTimestamp()
    })

    await updateDoc(doc(db, 'userChats', state.user.uid), {
      [state.chatId + '.lastMessage']: {
        text
      },
      [state.chatId + '.date']: serverTimestamp()
    })

    setText('');
    setImg(null);
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
            onChange={(e) => setImg(e.target.files[0])}
          />
          <img src={addImg} alt='addImg' />
        </label>
        <Button onClick={handleSend}>Отправить</Button>
      </div>
    </div>
  )
}

export default Input
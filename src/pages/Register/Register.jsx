import React, { useState } from 'react';
import classes from './Register.module.css';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../../firebase/index';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import addIcon from '../../img/add.png';

const Register = () => {
  const [error, setError] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0])
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.then(
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })

            await setDoc(doc(db, 'userChats', res.user.uid), {});

            navigate('/');
          })
        },
        (err) => {
          setError(true);
        }
      )

    } catch (e) {
      setError(true);
    }

  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classes.logo}>Мой чат</span>
        <span className={classes.title}>Регистрация</span>
        <form onSubmit={submitHandler} className={classes.form}>
          {error && <span className={classes.errorMessage}>Что то пошло не так!</span>}
          <input placeholder='Введите имя' type='text' />
          <input placeholder="Введите почту" type='email' />
          <input placeholder='Введите пароль' type='password' />
          <label>
            <input onChange={fileChangeHandler}
              style={{ display: 'none' }}
              type='file'
            />
            <img src={addIcon} alt="загрузить" />
            {file ?
              <div className={classes.inputFile}>
                <img src={URL.createObjectURL(file)} />
                {file.name}
              </div> : 'Загрузить фото'}
          </label>
          <Button type='submit'>Зарегистрироваться</Button>
        </form>
        <span className={classes.link}>У вас уже есть аккаунт? <Link to='/login'>Авторизоваться</Link></span>
      </div>
    </div>
  )
}

export default Register

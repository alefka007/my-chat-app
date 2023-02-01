import React, { useState } from 'react';
import classes from './Register.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../routes/routes';
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from '../../firebase/index';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import addIcon from '../../img/add.png';

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);


      uploadTask.on(
        (err) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              name,
              email,
              photoURL: downloadURL
            });

            await setDoc(doc(db, 'userChat', res.user.uid), {});

            navigate('/home');

          })
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
          {error && <span style={{ color: 'red', textAlign: 'center' }}>Что то пошло не так!</span>}
          <input placeholder='Введите имя' type='text' />
          <input placeholder="Введите почту" type='email' />
          <input placeholder='Введите пароль' type='password' />
          <label>
            <input style={{ display: 'none' }} type='file' />
            <img src={addIcon} alt="загрузить" />
            Загрузить фото
          </label>
          <Button type='submit'>Зарегистрироваться</Button>
        </form>
        <span className={classes.link}>У вас уже есть аккаунт? <Link to={LOGIN_ROUTE}>Авторизоваться</Link></span>
      </div>
    </div>
  )
}

export default Register

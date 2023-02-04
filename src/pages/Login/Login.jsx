import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";
import classes from './Login.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/index';

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');

    } catch (e) {
      setError(true);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <span className={classes.logo}>Мой чат</span>
        <span className={classes.title}>Вход</span>
        <form onSubmit={submitHandler} className={classes.form}>
        {error && <span className={classes.errorMessage}>Что то пошло не так!</span>}
          <input placeholder="Введите почту" type='email' />
          <input placeholder='Введите пароль' type='password' />
          <Button type='submit'>Войти</Button>
        </form>
        <span className={classes.link}>У вас уже есть аккаунт? <Link to='/register'>Зарегистрироваться</Link></span>
      </div>
    </div>
  )
}

export default Login

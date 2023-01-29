import React from "react";
import classes from './Login.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from "../../routes/routes";

const Login = () => {

    const submitHandler = (e: any) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <span className={classes.logo}>Мой чат</span>
                <span className={classes.title}>Вход</span>
                <form onSubmit={submitHandler} className={classes.form}>
                    <input name='email' placeholder="Введите почту" type='email' />
                    <input name='password' placeholder='Введите пароль' type='password' />
                    <Button type='submit'>Войти</Button>
                </form>
                <span className={classes.link}>У вас уже есть аккаунт? <Link to={REGISTER_ROUTE}>Зарегистрироваться</Link></span>
            </div>
        </div>
    )
}

export default Login

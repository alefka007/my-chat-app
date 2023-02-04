import React from 'react'
import classes from './Error.module.css'


const Error = () => {

    return (
        <div className={classes.container}>
            <h1>Ошибка: 404</h1>
            <p>Такой страницы не существует...</p>
        </div>
    )
}

export default Error

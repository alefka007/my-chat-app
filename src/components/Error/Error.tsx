import React from 'react'
import { useRouteError } from "react-router-dom"
import classes from './Error.module.css'


const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={classes.container}>
            <h1>Упс!</h1>
            <p>Кажется случилась непредвиденная ошибка...</p>
            <p>
                <i>{(error as Response).statusText || (error as Error).message}</i>
            </p>
        </div>
    )
}

export default Error

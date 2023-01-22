import React from 'react'
import Button from '../Button/Button'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <span className={classes.logo}>Мой чат</span>
            <div className={classes.userInfo}>
                <img src='https://get.pxhere.com/photo/person-people-portrait-facial-expression-hairstyle-smile-emotion-portrait-photography-134689.jpg' alt='' />
                <span>Vasya</span>
                <Button>Выйти</Button>
            </div>
        </div>
    )
}

export default Navbar
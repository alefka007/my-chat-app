import React,{ useContext } from 'react';
import Button from '../Button/Button';
import classes from './Navbar.module.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const {displayName, photoURL} = useContext(AuthContext);
    return (
        <div className={classes.navbar}>
            <span className={classes.logo}>Мой чат</span>
            <div className={classes.userInfo}>
                {displayName &&  photoURL &&
                    <>
                        <img src={photoURL} alt='фото' />
                        <span>{displayName}</span>
                    </>
                }
                <Button variant='secondary' onClick={() => signOut(auth)}>Выйти</Button>
            </div>
        </div>
    )
}

export default Navbar
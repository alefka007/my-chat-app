import React from 'react';
import Chat from '../../components/Chat/Chat';
import Sidebar from '../../components/Sidebar/Sidebar';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home
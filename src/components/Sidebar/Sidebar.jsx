import React from 'react';
import Chats from '../Chats/Chats';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar
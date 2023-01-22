import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from '../Chat/Chat';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import {
    LOGIN_ROUTE,
    CHAT_ROUTE,
    REGISTRATION_ROUTE,
    HOME_ROUTE,
} from '../../routes/routes';
import Home from '../../pages/Home/Home';

const Router = () => {

    const user = false

    return (
        <Routes>
            <Route path='/'>
                <Route path={HOME_ROUTE} element={<Home />} />
                <Route path={LOGIN_ROUTE} element={<Login />} />
                <Route path={REGISTRATION_ROUTE} element={<Register />} />
            </Route>
        </Routes>
    )

}

export default Router

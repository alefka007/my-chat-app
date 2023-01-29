import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Home from '../../pages/Home/Home';
import { AuthContext } from '../../context/AuthContext';
import {
    LOGIN_ROUTE,
    REGISTER_ROUTE,
} from '../../routes/routes';

const Router = () => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser)

    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to='/login' />
        }
        return children
    }

    return (
        <Routes>
            <Route path='/'>
                <Route index element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                } />
                <Route path={LOGIN_ROUTE} element={<Login />} />
                <Route path={REGISTER_ROUTE} element={<Register />} />
            </Route>
        </Routes>
    )

}

export default Router

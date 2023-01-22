import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </div>
    )
}

export default App

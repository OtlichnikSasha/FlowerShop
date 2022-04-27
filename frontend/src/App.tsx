import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from "./components/block/header";
import {Footer} from "./components/block/footer";
import {useAuth} from "./hooks/auth_hook"
import Routes from './routing/index'
import {AuthContext} from './context/AuthContext'


function App() {
    const {token, login, logout, id} = useAuth()
    const isAuthenticated = !!token
    return (
        <AuthContext.Provider value={{
            token, login, logout, id, isAuthenticated
        }}>
        <Router>
            <Header/>
            <div className="content">
                <Routes/>
            </div>
            <Footer/>
        </Router>
        </AuthContext.Provider>
    );
}

export default App;

import React from 'react';
import {
    Route,
    Routes
} from 'react-router-dom';
import {authRoutes} from "./auth_routes";
import {publicRoutes} from "./public_routes";
import {useAuth} from "../hooks/auth_hook";

const Router = () => {
    const {token} = useAuth()
    const isAuthenticated = !!token
    return (
        <Routes>
            {isAuthenticated && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element} />
            )}
        </Routes>
    );
};

export default Router;
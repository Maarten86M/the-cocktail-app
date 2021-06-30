import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import {useAuth} from "../Context/AuthContext";

function PublicRoute({exact, path, component}) {
    const {user} = useAuth();

    return (
        <Route exact={exact} path={path}>
            {!user ? component : <Redirect to="/welcome"/>}
        </Route>
    )
}

export default PublicRoute;
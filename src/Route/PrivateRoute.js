import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import {useAuth} from "../Context/AuthContext";

function PrivateRoute(props) {
    const {user} = useAuth()

    return(
        <Route path={props.path}>
            {user ? props.component : <Redirect to="/login"/>}
        </Route>
    )
}
export default PrivateRoute;
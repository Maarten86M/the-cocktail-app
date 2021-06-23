import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import {useAuth} from "../Context/AuthContext";

function PublicRoute(props) {
    const{user} = useAuth();

    return(
        <Route exact={props.exact} path={props.path}>
            {!user ? props.component : <Redirect to="/welcome"/>}
        </Route>
    )
}
export default PublicRoute;
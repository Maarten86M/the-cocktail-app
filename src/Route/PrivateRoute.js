import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';

function PrivateRoute(props) {
    return(
        <Route path={props.path}>
            {props.authenticated ? props.component : <Redirect to="/login"/>}
        </Route>
    )
}
export default PrivateRoute;
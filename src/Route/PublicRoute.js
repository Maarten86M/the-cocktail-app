import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';

function PublicRoute(props) {
    return(
        <Route exact={props.exact} path={props.path}>
            {!props.authenticated ? props.component : <Redirect to="/welcome"/>}
        </Route>
    )
}
export default PublicRoute;
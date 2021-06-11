import React from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import IntroPage from "../Pages/IntroPage/IntroPage";

function IntroRoute(props) {
    return(
        <Route exact={props.exact} path={props.path}>
            <IntroPage /> : <Redirect to="/"/>
        </Route>
    )
}
export default IntroRoute;
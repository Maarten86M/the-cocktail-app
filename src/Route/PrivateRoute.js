import {Route, Redirect} from 'react-router-dom';
import {useAuth} from "../Context/AuthContext";

function PrivateRoute({component, path}) {
    const {user} = useAuth()

    return (
        <Route path={path}>
            {user ? component : <Redirect to="/login"/>}
        </Route>
    )
}

export default PrivateRoute;
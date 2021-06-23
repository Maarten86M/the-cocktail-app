import React, {useState} from "react";
import './Login.css';
import { useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";
import app from "../../Modules/Firebase";

function Login() {

    const history = useHistory();
    const { setUser, email, setEmail, password, setPassword,formError, setFormError, logIn } = useAuth();
    // const {succes, setSucces} = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const userCredential = await logIn(email,password);
            console.log("Logged in:", userCredential);
            setUser(userCredential.user);
            history.push('./welcome')
        }catch (event){
            console.error("FireBase Fail:", event);
            setFormError(event.message);
        }

    }

    return (
        <div className="pagina">
            <h1>Login</h1>
            <h3>{formError}</h3>
            <form onSubmit={ onSubmit }>
                <input
                    type="email"
                    name="email"
                    placeholder="Email adress"
                    value={ email }
                    onChange={event => setEmail(event.target.value)}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={event => setPassword(event.target.value)}
                />

                <input type="submit" value="login"/>
            </form>

        </div>
    )
}

export default Login;
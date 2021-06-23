import React from "react";
import {useHistory} from "react-router-dom";
import {useAuth} from "../../Context/AuthContext";


function Register() {

    const history = useHistory();
    const {user, setUser, email, setEmail, password, setPassword,formError, setFormError , signUp} = useAuth();

    async function onSubmit(event) {
        event.preventDefault();

        try{
            const userCredential = await signUp(email, password);
            console.log("registered", userCredential);
            setUser( userCredential.user );
            history.push('./welcome')
        } catch (event){
            console.error('Firebase Fail', event);
            setFormError(event.message);
        }
    }

    console.log("Wat is de formError uit Register", formError)
    console.log(user,"iemand is ingelogd")

    return (
        <div className="pagina">
            <h1>Register</h1>
            {/*{succesMessage && (<h1> Thank you for your account.</h1>)}*/}
            {/*{loading && (<h1>Moment geduld</h1>)}*/}
            <h2>{formError}</h2>
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

    );
}

export default Register;
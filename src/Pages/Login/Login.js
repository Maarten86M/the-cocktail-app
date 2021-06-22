import React, {useState} from "react";
import MainButton from "../../Components/Buttons/MainButton/MainButton";
import {useForm} from "react-hook-form";
import registerIcon from "../../Assets/Icons/NavIcons/register.png";
import FormButton from "../../Components/Buttons/FormButton/FormButton";
import './Login.css';
import {Link, useHistory} from "react-router-dom";


function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const history = useHistory();
    // const {succes, setSucces} = useState(false);

    function logIn(data) {
        console.log(data);
        // setSucces(true);
    }

    console.log("What are the errors?", errors);

    return (
        <div className="pagina">
            <h1>Login</h1>

            <form className="Form-container" onSubmit={handleSubmit(logIn)}>

                <label htmlFor="email">
                    <input
                        id="email"
                        type="email"
                        placeholder="&#x2709; Email Adress"
                        {...register('email', {required: {value: true, message: "This field is required."}})}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>


                <label htmlFor="password" className="forminput">
                    <input
                        id="password"
                        type="password"
                        placeholder="&#128274; Password"
                        {...register('password', {required: {value: true, message: "Please fill in your password."}})}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </label>

                <FormButton disabled={errors.email || errors.password}/>

                <Link to="/forgotpassword"><p>Forgot your password?</p></Link>

                <MainButton
                    name="Register Now"
                    icon={registerIcon}
                    link={"/register"}/>
            </form>
        </div>
    )
}

export default Login;
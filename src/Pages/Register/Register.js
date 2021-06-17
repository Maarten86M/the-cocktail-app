import React, {useState} from "react";
import {useForm} from "react-hook-form";
import FormButton from "../../Components/Buttons/FormButton/FormButton";
import {useHistory} from "react-router-dom";

function Register() {

    const {register, getValues, handleSubmit, formState: {errors}} = useForm();
    const [formError, setFormError] = useState();
    const [loading, setLoading] = useState();
    const history = useHistory();

    function Register(data){
        // if(getValues('password') !== getValues('passwordconfirm')){
        //     return setFormError('Passwords do Not Match')
        // }
        console.log(data)

    }
    return(
        <div className="pagina">
            <h1>Register</h1>
            <form className="Form-container" onSubmit={handleSubmit(Register)}>

                <label htmlFor="email">
                    <input
                        id="email"
                        type="email"
                        placeholder="&#x2709; Email Adress"
                        {...register('email', {required: {value: true, message: "This field is required."}})}
                    />
                    {errors.email && <p>{errors.email.message}{formError} </p>}

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

                <label htmlFor="passwordconfirm" className="forminput">
                    <input
                        id="passwordconfirm"
                        type="password"
                        placeholder="&#128274; Password Confirm"
                        {...register('passwordconfirm', {required: {value: true, message: "Please fill in your password."}})}
                    />
                    {errors.passwordconfirm && <p>{errors.password.message}</p>}
                </label>

                <FormButton disabled={errors.email || errors.password}/>

            </form>
        </div>

    );
}
export default Register;
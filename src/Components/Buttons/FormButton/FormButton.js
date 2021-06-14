import React from "react";
import './FormButton.css';

function FormButton(props) {
    return (
        <>
            <input className="formbutton" type="submit" disabled={props.disabled}/>
        </>
    )
}

export default FormButton;
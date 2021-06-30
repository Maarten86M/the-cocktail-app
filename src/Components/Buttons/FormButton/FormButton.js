import React from "react";
import './FormButton.css';

function FormButton({disabled}) {
    return (
        <>
            <input className="formbutton" type="submit" disabled={disabled}/>
        </>
    )
}

export default FormButton;
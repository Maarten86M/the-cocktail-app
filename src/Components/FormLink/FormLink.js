import './FormLink.css';
import {Link} from "react-router-dom";
import React from "react";

function FormLink({to,linktext}) {
    return(
        <div className="form-link">
            <Link style={{textDecoration: 'none'}} to={to}><p>{linktext}</p></Link>
        </div>
    )
}

export default FormLink;
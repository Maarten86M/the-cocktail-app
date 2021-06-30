import React from "react";
import {Link} from "react-router-dom";
import './MainButton.css';

function MainButton({link, onclick, icon, name, type, disable}) {
    return (
            <Link to={link}>
                <button className="mainbutton" disabled={disable} onClick={onclick} type={type}>
                    <img src={icon} alt={name}/>
                    {name}
                </button>
            </Link>
    )
}

export default MainButton;
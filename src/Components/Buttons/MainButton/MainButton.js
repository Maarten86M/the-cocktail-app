import React from "react";
import {Link} from "react-router-dom";
import './MainButton.css';

function MainButton(props) {
    return (
            <Link to={props.link}>
                <button className="mainbutton" disabled={props.disable}>
                    <img src={props.img} alt={props.name}/>
                    {props.name}
                </button>
            </Link>
    )
}

export default MainButton;
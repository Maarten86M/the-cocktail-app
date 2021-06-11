import React from "react";
import './NextBackButton.css';

function NextBackButton(props) {
    return(
        <div>
        <button className="nextbackbutton">
            <img className="nextbackicon" src={props.icon} alt={props.name}/>
        </button>
        </div>
    )
}
export default NextBackButton;
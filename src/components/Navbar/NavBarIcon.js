import React from "react";

function NavBarIcon(props) {
    return (
        <div onClick={props.onClick} className="Menu-icon-click">
            <div className={props.className}></div>
        </div>
    )
}

export default NavBarIcon;
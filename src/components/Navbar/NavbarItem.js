import './Navbar.css';
import {NavLink} from "react-router-dom";
import React from "react";

function NavBarItem(props) {
    return (
        <li className="navitems">
            <NavLink to={props.to} onClick={props.onClick} className="inactive"
                     activeClassName="active-link">
                {props.tittle}
            </NavLink>
        </li>
    )
}

export default NavBarItem;
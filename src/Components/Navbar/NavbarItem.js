import {NavLink} from "react-router-dom";
import './Navbar.css';

function NavBarItem({to, onClick, icon, tittle}) {
    return (
        <li className="navitems">
            <NavLink to={to} onClick={onClick} className="inactive"
                     activeClassName="active-link">
                <img src={icon} alt={icon}/>{tittle}
            </NavLink>
        </li>
    )
}

export default NavBarItem;
import {Link} from "react-router-dom";
import './MainButton.css';

function MainButton(props) {
    return (
        <div>
            <Link to={props.link}>
                <button className="mainbutton" disabled={props.disable}>
                    <img src={props.img} alt={props.name}/>
                    {props.name}
                </button>
            </Link>
        </div>
    )
}

export default MainButton;
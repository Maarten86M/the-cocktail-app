import {Link} from "react-router-dom";
import './FormLink.css';

function FormLink({to, linktext}) {
    return (
        <div className="form-link">
            <Link style={{textDecoration: 'none'}} to={to}><p>{linktext}</p></Link>
        </div>
    )
}

export default FormLink;
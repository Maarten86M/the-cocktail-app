import {useAuth} from "../../Context/AuthContext";
import './FormSuccesMessage.css';

function FormSuccesMessage() {

    const {succes} = useAuth();

    return (
        <div className="form-succes-container">
            <p className="form-succes-message">{succes}</p>
        </div>
    )
}

export default FormSuccesMessage;
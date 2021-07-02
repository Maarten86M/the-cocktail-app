import {useAuth} from "../../Context/AuthContext";
import './FormErrorMessage.css';

function FormErrorMessage() {

    const {formError} = useAuth();

    return (
        <div className="form-error-container">
            <p className="form-error-message">{formError}</p>
        </div>
    )
}

export default FormErrorMessage;
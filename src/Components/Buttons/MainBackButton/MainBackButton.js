import {useHistory} from "react-router-dom";
import './MainBackButton.css';

function MainBackButton() {
    const history = useHistory();

    return (
        <button
            className="backbutton"
            onClick={() => history.goBack()}
        >
         Back
        </button>
    )
}

export default MainBackButton;
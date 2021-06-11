import React,{useState} from "react";
import './IntroPage.css';
import {Redirect} from 'react-router-dom';

function IntroPage() {

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [seconds, setSeconds] = useState(7);

    const sevenSecondRedirect = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds == 0) {
            setShouldRedirect(true);
            clearInterval(sevenSecondRedirect);
        }
    }, 1000);
    if (shouldRedirect) return <Redirect to="/login" />;

    return (
        <div className="pagina">
            <h1>Test begin pagina {seconds}</h1>
        </div>
    )
}

export default IntroPage;
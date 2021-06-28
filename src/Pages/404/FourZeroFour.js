import React from "react";
import './FourZeroFour.css';
import fourzerofour from '../../Assets/404/404.png';

function FourZeroFour() {
    return (
            <div className="fourzerofour-page">
                <img className="fourzerofour" src={fourzerofour} alt="404"/>
            </div>
    )
}

export default FourZeroFour;
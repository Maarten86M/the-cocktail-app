import fourzerofour from '../../Assets/404/404.png';
import './FourZeroFour.css';

function FourZeroFour() {
    return (
        <main className="fourzerofour-page">
            <img className="fourzerofour" src={fourzerofour} alt="404"/>
            <h1 className="oops-text">Oops! Sorry we can't find that page! </h1>
        </main>
    )
}

export default FourZeroFour;
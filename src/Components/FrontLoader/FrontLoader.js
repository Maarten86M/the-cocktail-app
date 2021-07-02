import './FrontLoader.css';

function FrontLoader() {
    return (
        <div className="move-container">
            <p className="loading-text"/>
            <div className="loader-bullets b-1"/>
            <div className="loader-bullets b-2"/>
            <div className="loader-bullets b-3"/>
            <div className="loader-bullets b-4"/>
        </div>
    )
}

export default FrontLoader;
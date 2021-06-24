import './HelpSection.css';

function HelpSection(props) {
    return (
        <>
            <article className={props.styling}>
                <img className="help-img" src={props.helpimg} alt=""/>
                <p>{props.helpText}</p>
            </article>
        </>
    )
}

export default HelpSection;
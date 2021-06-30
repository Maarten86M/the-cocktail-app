import './HelpSection.css';

function HelpSection({styling,helpimg,helpText}) {
    return (
        <>
            <article className={styling}>
                <img className="help-img" src={helpimg} alt=""/>
                <p>{helpText}</p>
            </article>
        </>
    )
}

export default HelpSection;
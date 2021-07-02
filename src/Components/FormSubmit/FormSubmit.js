import './FormSubmit.css';

function FormSubmit({value, type, disabled}) {
    return (
        <input className="submit-button" value={value} type={type} disabled={disabled}/>
    )
}

export default FormSubmit;
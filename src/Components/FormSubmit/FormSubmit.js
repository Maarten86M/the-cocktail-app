import './FormSubmit.css';

function FormSubmit(props) {
    return(
            <input className="submit-button" value={props.value} type={props.type} disabled={props.disabled} />
    )
}
export default FormSubmit;
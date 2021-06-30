import React, {useState} from "react";
import './HelpButton.css';
import '../../HelpField/HelpField.css';
import HelpField from "../../HelpField/HelpField";

function HelpButton({content}) {
    const [helpField, setHelpField] = useState();

    function helpFieldOpener() {setHelpField(v => !v);}

    return (
        <>
            <button className="helpbutton" onClick={helpFieldOpener}>?</button>
            <HelpField
                helpField={helpField}
                setsetHelpField={setHelpField}
                content={content}
                opener={helpFieldOpener}
            />

        </>
    )
}

export default HelpButton;
import React from "react";
import './HelpField.css';
import helpData from '../../Data/HelpFieldInfo.json';

function HelpField(props) {

    const helpLineOne = helpData.map((help) => {
        return help.content1;
    })

    const helpLineTwo = helpData.map((help) =>{
        return help.content2;
    })

    const helpLineThree = helpData.map((help) =>{
        return help.content3;
    });

    const helpLineFour = helpData.map((help) =>{
        return help.content4;
    });

    const helpLineFive = helpData.map((help) =>{
        return help.content5;
    });

    return (
        <>
            {props.helpField && (
                    <div className="help-field" onClick={props.opener}>
                        <div>
                            <p className="cross" >&#10005;</p>
                        </div>
                        <p>{helpLineOne[props.content]}</p>
                        <p>{helpLineTwo[props.content]}</p>
                        <p>{helpLineThree[props.content]}</p>
                        <p>{helpLineFour[props.content]}</p>
                        <p>{helpLineFive[props.content]}</p>
                    </div>
            )}
        </>
    )
}

export default HelpField;
import React from "react";
import './HelpField.css';
import helpData from '../../Data/HelpFieldInfo.json';

function HelpField({opener, content,helpField}) {

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
            {helpField && (
                    <div className="help-field" onClick={opener}>
                        <div>
                            <p className="cross" >&#10005;</p>
                        </div>
                        <p>{helpLineOne[content]}</p>
                        <p>{helpLineTwo[content]}</p>
                        <p>{helpLineThree[content]}</p>
                        <p>{helpLineFour[content]}</p>
                        <p>{helpLineFive[content]}</p>
                    </div>
            )}
        </>
    )
}

export default HelpField;
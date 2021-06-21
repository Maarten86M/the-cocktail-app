import React from 'react';
import './InstructionView.css';

function InstructionView({Instruction}) {
    return (
        <div className="instruction-container">
            <b>Instructions:</b>
            <article>
                <p className="instruction-view">{Instruction}</p>
            </article>
        </div>
    )
}

export default InstructionView;
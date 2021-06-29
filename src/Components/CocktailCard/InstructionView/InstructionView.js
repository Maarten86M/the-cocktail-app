import React from 'react';
import './InstructionView.css';

function InstructionView({Instruction}) {
    return (
        <div className="instruction-container">
            <p>Instructions:</p>
            <div>
                <p className="instruction-view">{Instruction}</p>
            </div>
        </div>
    )
}

export default InstructionView;
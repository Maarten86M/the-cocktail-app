import React from 'react';

function InstructionView({Instruction}) {
    return(
        <div>
            <b>Instructions:</b>
            <p>{Instruction}</p>
        </div>
    )
}
export default InstructionView;
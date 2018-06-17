import React from 'react';

const Next = ({isNextActive, goToNextStep, isLastStep}) =>
    !isLastStep && (
        <button disabled={!isNextActive} onClick={() => goToNextStep()}>
            Далее
        </button>
    );

export default Next;

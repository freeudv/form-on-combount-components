import React from 'react';

const Previous = ({isPreviousActive, goToPreviousStep}) => (
    <button disabled={!isPreviousActive} onClick={() => goToPreviousStep()}>
        Назад
    </button>
);

export default Previous;

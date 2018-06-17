import React from 'react';

const Step = ({isActive, render}) => {
    if (isActive) {
        return <React.Fragment>{render()}</React.Fragment>;
    }

    return null;
};

export default Step;

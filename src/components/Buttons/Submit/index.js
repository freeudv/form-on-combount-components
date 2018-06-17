import React from 'react';

const Submit = ({isLastStep, handleSubmit}) =>
    isLastStep && <button onClick={() => handleSubmit()}>Готово</button>;

export default Submit;

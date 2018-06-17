import React, {Component} from 'react';
import {
    FormWizard,
    StepList,
    ButtonList,
    Step,
    Next,
    Previous,
    Submit,
    FirstForm,
    SecondForm,
    ThirdForm
} from './components';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <FormWizard>
                    <StepList>
                        <Step render={FirstForm} />
                        <Step render={SecondForm} />
                        <Step render={ThirdForm} />
                    </StepList>
                    <ButtonList>
                        <Previous />
                        <Next />
                        <Submit />
                    </ButtonList>
                </FormWizard>
            </div>
        );
    }
}

export default App;

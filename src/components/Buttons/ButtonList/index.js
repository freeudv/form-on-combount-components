import React, {Component} from 'react';

export class ButtonList extends Component {
    render() {
        const {activeStepIndex, totalSteps} = this.props;
        const children = React.Children.map(this.props.children, child => {
            if (child.type.name === 'Previous') {
                return React.cloneElement(child, {
                    isPreviousActive: activeStepIndex > 0 ? true : false,
                    goToPreviousStep: () => this.props.onPreviousStep()
                });
            } else if (child.type.name === 'Next') {
                return React.cloneElement(child, {
                    isNextActive: activeStepIndex < totalSteps ? true : false,
                    isLastStep: activeStepIndex === totalSteps,
                    goToNextStep: () => this.props.onNextStep()
                });
            } else if (child.type.name === 'Submit') {
                return React.cloneElement(child, {
                    isLastStep: activeStepIndex === totalSteps,
                    handleSubmit: () => this.props.handleSubmit()
                });
            }
        });
        return <div className="ButtonList">{children}</div>;
    }
}

export default ButtonList;

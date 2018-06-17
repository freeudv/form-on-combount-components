import React, {Component} from 'react';

export class FormWizard extends Component {
    state = {
        activeStepIndex: 0
    };

    componentDidMount = () => {
        this.getTotalSteps(this.props.children);
    };

    getTotalSteps = children => {
        let totalSteps = 0;
        for (let child of children) {
            if (child.type.name === 'StepList') {
                totalSteps = child.props.children.length - 1;
            }
        }
        this.setState({totalSteps});
    };

    handleSubmit = () => alert('Form Submitted!');

    render() {
        const children = React.Children.map(this.props.children, child => {
            if (child.type.name === 'StepList') {
                return React.cloneElement(child, {
                    activeStepIndex: this.state.activeStepIndex
                });
            } else if (child.type.name === 'ButtonList') {
                return React.cloneElement(child, {
                    activeStepIndex: this.state.activeStepIndex,
                    totalSteps: this.state.totalSteps,
                    handleSubmit: this.handleSubmit,
                    onNextStep: () =>
                        this.setState(state => ({
                            activeStepIndex: state.activeStepIndex + 1
                        })),
                    onPreviousStep: () =>
                        this.setState(state => ({
                            activeStepIndex: state.activeStepIndex - 1
                        }))
                });
            } else {
                return null;
            }
        });

        return <div className="FormWizard">{children}</div>;
    }
}

export default FormWizard;

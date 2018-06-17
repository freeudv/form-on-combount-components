import React, {Component} from 'react';

export class StepList extends Component {
    render() {
        const {activeStepIndex} = this.props;
        const children = React.Children.map(
            this.props.children,
            (child, index) =>
                React.cloneElement(child, {
                    isActive: index === activeStepIndex
                })
        );

        return <div className="StepList">{children}</div>;
    }
}

export default StepList;

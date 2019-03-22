import React, { Component } from 'react'
import TimerForm from '../containers/TimerForm';

class ToggleableTimerForm extends Component {
    state = {
        isOpen: false
    }

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };

    render() {
        const form = this.state.isOpen ? (
            <TimerForm 
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}
            />
        ) : (
        <div className='ui basic content center aligned segment'>
            <button
                className='ui basic button icon'
                onClick={ this.handleFormOpen }
            >
                <i className='plus icon' />
            </button>
        </div>
        )
        return form;
    }
}

export default ToggleableTimerForm;

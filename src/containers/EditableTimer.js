import React, { Component } from 'react';
import TimerForm from '../containers/TimerForm';
import Timer from '../components/Timer';

class EditableTimer extends Component {
    state = {
        editFormOpen: false
    }

    handleEditClick = () => {
        this.openForm();
    }
    
    handleFormClose = () => {
        this.closeForm();
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    closeForm = () => {
        this.setState({ editFormOpen: false });
    }

    openForm = () => {
        this.setState({ editFormOpen: true });
    }

    render() {
        const timer = this.state.editFormOpen ? (
            <TimerForm
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                onFormSubmit={this.handleSubmit} 
                onFormClose={this.handleFormClose}
            />
        ) : (
            <Timer
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
                onEditClick={this.handleEditClick}
            />
        )
        return timer
    }
}

export default EditableTimer;

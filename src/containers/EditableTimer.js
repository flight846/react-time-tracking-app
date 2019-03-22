import React, { Component } from 'react';
import TimerForm from '../containers/TimerForm';
import Timer from '../components/Timer';

class EditableTimer extends Component {
    state = {
        editFormOpen: false
    }
    render() {
        const timer = this.state.editFormOpen ? (
            <TimerForm
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
            />
        ) : (
            <Timer
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runningSince={this.props.runningSince}
            />
        )
        return timer
    }
}

export default EditableTimer;

import React, { Component } from 'react';
import uuid from 'uuidv4';
import EditableTimerList from '../components/EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import * as helpers from '../helpers/timers';

class TimersDashboard extends Component {
    state = {
        timers: [
            {
                title: 'Practice squat',
                project: 'Gym Chores',
                id: uuid(), 
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuid(), 
                elapsed: 1273998,
                runningSince: null,
            }
        ]
    }

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t),
        });
    };

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    };

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            }),
        });
    };


    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList 
                        timers={ this.state.timers }
                        onFormSubmit={ this.handleEditFormSubmit }
                    />
                    <ToggleableTimerForm 
                        onFormSubmit={ this.handleCreateFormSubmit }/>
                </div>
            </div>
        )
    }
}

export default TimersDashboard;

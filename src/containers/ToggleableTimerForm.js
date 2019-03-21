import React, { Component } from 'react'
import TimerForm from '../containers/TimerForm';

export default class ToggleableTimerForm extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm title="Create"/>
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon'>
                        <i className='plus icon' />
                    </button>
                </div>
            );
        }
    }
}

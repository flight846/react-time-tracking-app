import React from 'react';
import EditableTimer from '../containers/EditableTimer';
// import Timer from './Timer';

const EditableTimerList = (props) => {
    const timers = props.timers.map((timer) => 
        <EditableTimer 
            key={ timer.id }
            id={ timer.id }
            title={ timer.title }
            project={ timer.project }
            elapsed={ timer.elapsed }
            runningSince={ timer.runningSince }
            onFormSubmit={ props.onFormSubmit}
        />
    )
    return (
        <div id='timers'>
            {timers}
        </div>
    )
}

export default EditableTimerList;

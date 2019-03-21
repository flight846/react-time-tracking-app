import React from 'react';
import TimerForm from '../components/TimerForm';
import Timer from '../components/Timer';

const EditableTimer = (props) => {
    return (
        props.editFormOpen ? (
            <TimerForm
                title={props.title}
                project={props.project}
            />
        ) : (
            <Timer
                title={props.title}
                project={props.project}
                elapsed={props.elapsed}
                runningSince={props.runningSince}
            />
        )
    )
}

export default EditableTimer;

import React from 'react'

const TimerActionButton = (props) => {
    return (
        props.timerIsRunning ? (
            <div 
                className = 'ui bottom attached red basic button'
                onClick = { props.onStopClick }
                > Stop
            </div>
        ) : (
            <div
                className='ui bottom attached green basic button' 
                onClick={ props.onStartClick}
            > Start
            </div>
        ) 
    )
}

export default TimerActionButton;
import React from 'react'

const TimerForm = (props) => {
    const submitText = props.title ? 'Update' : 'Create';
    return (
        <div className='ui centered card'>
            <div className='content'>
                <div className='ui form'>
                    <div className='field'>
                        <label>Title</label>
                        <input type='text' defaultValue={props.title} />
                    </div>
                    <div className='field'>
                        <label>Project</label>
                        <input type='text' defaultValue={props.project} />
                    </div>
                    <div className='ui two bottom attached buttons'>
                        <button className='ui basic blue button'>
                            {submitText}
                        </button>
                        <button className='ui basic red button'>
                            Cancel
              </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimerForm;

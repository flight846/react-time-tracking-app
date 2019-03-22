import React, { Component } from 'react'

class TimerForm extends Component {
    // initial state from props
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input
                                id='title' 
                                type='text' 
                                value={this.state.title}
                                onChange={this.handleInputChange} 
                            />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input
                                id='project' 
                                type='text' 
                                value={this.state.project}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button 
                                className='ui basic blue button'
                                onClick={this.handleSubmit}>
                                {submitText}
                            </button>
                            <button 
                                className='ui basic red button'
                                onClick={this.props.onFormClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;

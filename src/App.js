import React, { Component } from 'react';
import './App.css';
import TimersDashboard from './containers/TimersDashboard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className='ui center aligned header'>My Timers</h1>
                <TimersDashboard />
            </div>
        );
    }
}

export default App;

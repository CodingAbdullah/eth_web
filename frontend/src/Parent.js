import React, { Component } from 'react';
import App from './App';

class Parent extends Component {

    render () {
        return (
            <div className="Parent">
                <App />
            </div>
        )
    }
}

export default Parent;
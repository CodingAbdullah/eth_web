import React, { Component } from 'react';
import Card from '../Components/card';
import './Styles/jumbotron.css';
import { Link } from 'react-router-dom';

class Jumbotron extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            isClicked: 0,
            names: ['Abdullah', 'Boss', 'king', 'queen', 'bishop', 'rook', 'knight', 'pawn']
        }
    }

    updateCounterListener = () => {
        let clickValue = this.state.isClicked + 1;

        this.setState({
            isClicked: clickValue
        });
    }
    
    render() {
        let cards = this.state.names.map((name) => { return <Card value={name} /> });
        return (
            <div className="jumbotron">
                <Link to="/login">Login</Link>
                <label className="clickLabel">{this.state.isClicked}</label><br/>
                <button className="clickButton" onClick={this.updateCounterListener}>Click!</button>
                {cards} 
            </div>
        )
    }
}

export default Jumbotron;
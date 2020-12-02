import { Component } from 'react';
import './App.css';
import Navbar from '../src/Components/navbar';
import Jumbotron from '../src/Components/jumbotron';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;

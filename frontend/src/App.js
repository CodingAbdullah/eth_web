import './App.css';
//import Jumbotron from '../src/Components/jumbotron';
import PersonForm from './Components/personForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={PersonForm}></Route>
            </Switch>
        </Router>
      </div>
    )
}

export default App;
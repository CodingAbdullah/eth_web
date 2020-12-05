import './App.css';
import Jumbotron from '../src/Components/jumbotron';
import Login from '../src/Components/login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={Jumbotron}></Route>
              <Route exact path="/login" component={Login}></Route>
            </Switch>
        </Router>
      </div>
    )
}

export default App;

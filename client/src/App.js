import React from 'react';
import './App.css';
import Home from './Home';
import List from './List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  render(){
    return (
      <div className="App">
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/list">List</Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route path="/list">
                    <List />
                  </Route>
                </Switch>
              </div>
            </Router>
      </div>
    );
  }
  
}

export default App;

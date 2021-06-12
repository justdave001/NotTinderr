import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header/>
     <Router>
        <Switch>
        <Route path="/dave">
            <h1>I am dave</h1>
          </Route>
        <Route path="/chat">
            <h1>CHat</h1>
          </Route>
          <Route path="/">
            <TinderCards/>
          </Route>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;

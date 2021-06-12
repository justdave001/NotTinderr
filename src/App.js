import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Chats from './Chats';

function App() {
  return (
    <div className="App">
    
     <Router>
        <Switch>
          <Route path="/chat">
           <Header backButton="/"/>
            <h1>CHat</h1>
          </Route>
          <Route path="/">
           <Header/>
            <TinderCards/>
            <SwipeButtons />
           </Route>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './Css/App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/search">
            <h2>Search</h2>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

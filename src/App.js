import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Brain from "./components/Brain";
import Home from "./components/Home";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/'  component={Home}  exact/>
                <Route exact path='/Dashboard' component={Dashboard}/>
                <Route path='/Brain' component={Brain}  exact/>
                <Route path='/Task' component={Task}   exact/>
                <Route path='/'  exact/>
                <Route path='/'   exact/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Brain from "./components/Brain";
import Home from "./components/Home";
import Task from "./components/Task";
import Productivity from "./components/Productivity";
import Mood from "./components/Mood";
import netlifyIdentity from "netlify-identity-widget";
//import {loginUser, logoutUser} from "./components/identityActions";

function loginUser() {
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
        const {
            app_metadata, created_at, confirmed_at, email, id, user_metadata
        } = netlifyIdentity.currentUser();

        localStorage.setItem(
            "currentOpenSaucedUser",
            JSON.stringify({...app_metadata, created_at, confirmed_at, email, id, ...user_metadata})
        );
    }
}

function logoutUser() {
    localStorage.removeItem("currentOpenSaucedUser");
}

class App extends Component { // borrowed from https://www.netlify.com/blog/2017/10/30/how-to-add-netlify-identity-service-to-react-projects/
    state = {user: null};

    componentDidMount() {
        const user = localStorage.getItem("currentOpenSaucedUser");
        if (user) {
            this.setState({user: JSON.parse(user)});
        } else {
            loginUser();
        }
        netlifyIdentity.on("login", (user) => this.setState({user}, loginUser()));
        netlifyIdentity.on("logout", (user) => this.setState({user: null}, logoutUser()));
    }

    // handleLogIn = () => {
    //     netlifyIdentity.open();
    // }
    //
    // handleLogOut = () => {
    //     netlifyIdentity.logout();
    // }

    render() {
        const {user} = this.state;
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route exact path='/Dashboard' component={Dashboard}/>
                        <Route path='/Brain' component={Brain} exact/>
                        <Route path='/Task' component={Task} exact/>
                        <Route path='/Productivity' component={Productivity} exact/>
                        <Route path='/Mood' component={Mood} exact/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

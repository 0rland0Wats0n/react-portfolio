import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "./components/navigation/navigation";

import Me from "./components/me/me";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navigation />

                    <Route exact path="/" render={() => { return <Redirect to="/me" />; }} />
                    <Route exact path="/me" component={Me} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/work" component={Work} />
                </div>
            </Router>
        );
    }
};

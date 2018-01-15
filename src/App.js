import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header";

import Me from "./components/me/me";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Header />

                <Route exact path="/" render={() => { return <Redirect to="/me" />; }} />
                <Route exact path="/me" component={Me} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/work" component={Work} />
            </div>
        </Router>
    );
};

export default App;

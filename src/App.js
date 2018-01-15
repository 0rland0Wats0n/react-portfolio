import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

                <Route path="/me" component={Me} />
                <Route path="/skills" component={Skills} />
                <Route path="/work" component={Work} />
            </div>
        </Router>
    );
};

export default App;

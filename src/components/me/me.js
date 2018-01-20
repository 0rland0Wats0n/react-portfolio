import "./me.css"

import React, { Component } from "react";

import Header from "../header/header";

export default class Me extends Component {
    render() {
        return (
            <div>
                <Header key="me--header" page="me" heading="I'm Orlando."/>
                <div className="me">
                    <span className="section--accent">
                        <i data-feather="activity" width="32" height="32"></i>
                    </span>
                    <h1 className="me--heading">
                        Saving the World, One Webpage at a Time.
                    </h1>
                    <p className="me--info">
                        I am a self-taught, bachelor of science degree (Computer Science) having fullstack web developer. I specialize in web application and wesite design/development.
                    </p>
                </div>
                <div className="me--sections-section"></div>
                <div className="me--sections-section"></div>
            </div>
        )
    }
}

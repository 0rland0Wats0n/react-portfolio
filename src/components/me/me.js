import "./me.css"

import React, { Component } from "react";

import Header from "../header/header";

export default class Me extends Component {
    render() {
        return (
            <div>
                <Header page="me" />
                Me
            </div>
        )
    }
}

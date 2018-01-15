import "./header.css"

import React, { Component } from "react";

import Coffee from "../coffee";
import Laptop from "../laptop"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <header>
                <div className="header--bg">
                    {this.selectBacground()}
                </div>
            </header>
        )
    }

    selectBacground = () => {
        if(this.props.page === "me") {
            return <Laptop />;
        }

        if(this.props.page === "work") {
            return <Coffee />;
        }

        return null
    }
}

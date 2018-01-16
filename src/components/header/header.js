import "./header.css"

import React, { Component } from "react";

import Coffee from "../coffee";
import Laptop from "../laptop"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "bg_state": "off",
            "bounce": "off",
            "rise": "off",
            "peek": "off"
        };
    }

    render() {
        return (
            <header>
                <div className="header--bg" data-active={this.state.bounce}>
                    {this.selectBacground()}
                </div>
                <div className="header--animated-heading">
                    <div>
                        {this.createHeading()}
                    </div>
                </div>
            </header>
        )
    }

    selectBacground = () => {
        if(this.props.page === "me") {
            return <Laptop onMouseEnter={this.bounceOver} />;
        }

        if(this.props.page === "work") {
            return <Coffee />;
        }

        return null
    }

    createHeading = () => {
        const characters = Array.from(this.props.heading);
        let letters = [];
        let results = [];

        for(let character in characters) {
            if(characters[character] === " ") {
                results.push(<div className="word--container" data-peek={this.state.peek} data-bounce={this.state.bounce} onMouseLeave={this.bounceBack}>{letters.splice(0, letters.length)}</div>);
            } else {
                letters.push(<span>{characters[character]}</span>);
            }
        }

        results.push(<div className="word--container" data-rise={this.state.rise} onMouseLeave={this.bounceBack}>{letters.splice(0, letters.length)}</div>);
        return results;
    }

    bounceOver = (e) => {
        setTimeout(function() {
            this.setState({ bounce: "on", "rise": "on", "peek": "off" });
        }.bind(this), 500);
    }

    bounceBack = (e) => {
        setTimeout(function() {
            this.setState({ bounce: "off", "rise": "off" });
        }.bind(this), 250);
        setTimeout(function() {
            this.setState({"peek": "on"});
        }.bind(this), 500);
    }
}

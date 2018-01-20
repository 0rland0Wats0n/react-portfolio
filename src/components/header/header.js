import "./header.css"

import React, { Component } from "react";

import Coffee from "../coffee";
import Laptop from "../laptop"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "bg": "off",
            "peek": "on",
            "top": "yes",
            "last_position": 0,
            "direction": "none"
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    render() {
        return (
            <header>
                <div className="header--bg" data-active={this.state.bg} data-top={this.state.top}>
                    {this.selectBacground()}
                </div>
                <div className="header--animated-heading" data-top={this.state.top}>
                    <div>
                        {this.createHeading()}
                    </div>
                </div>
            </header>
        )
    }

    componentWillMount = () => {
        window.addEventListener("scroll", this.handleScroll);
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

    createHeading = () => {
        const characters = Array.from(this.props.heading);
        let letters = [];
        let results = [];

        for(let character in characters) {
            if(characters[character] === " ") {
                results.push(<div className="word--container" data-peek={this.state.peek}>{letters.splice(0, letters.length)}</div>);
            } else {
                letters.push(<span>{characters[character]}</span>);
            }
        }

        results.push(<div className="word--container">{letters.splice(0, letters.length)}</div>);
        return results;
    }

    handleScroll = (e) => {
        const scroll = e.srcElement.scrollingElement.scrollTop;

        if(scroll > this.state.last_position) {
            this.setState({
                last_position: scroll,
                direction: "down"
            });
        } else {
            this.setState({
                last_position: scroll,
                direction: "up"
            });
        }

        if(scroll >= 50 && this.state.direction == "down") {
            this.setState({ "top": "no", "bg": "scrolling","peek": "off" });
        } else if(scroll < 50 && this.state.direction == "up") {
            this.setState({ "top": "yes", "bg": "off" });

            setTimeout(function() {
                this.setState({ "peek": "on" })
            }.bind(this), 1000);
        }
    }
}

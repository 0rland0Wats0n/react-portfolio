import "./header.css"

import React, { Component } from "react";

import Coffee from "../coffee";
import Laptop from "../laptop"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "bg": "off",
            "bounce": "off",
            "rise": "off",
            "peek": "off",
            "top": "yes"
        };
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

    componentDidMount = () => {
        this.bounce();
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
                results.push(<div className="word--container" data-peek={this.state.peek} data-bounce={this.state.bounce}>{letters.splice(0, letters.length)}</div>);
            } else {
                letters.push(<span>{characters[character]}</span>);
            }
        }

        results.push(<div className="word--container" data-rise={this.state.rise}>{letters.splice(0, letters.length)}</div>);
        return results;
    }

    bounce = (e) => {
        setInterval(function() {
            if(this.state.top === "no") { return; }
            
            this.setState({ bounce: "on", "rise": "on", "peek": "off", "bg": "on" });

            setTimeout(function() {
                this.setState({ bounce: "off", "rise": "off", "bg": "off" });
                this.setState({"peek": "on"});
            }.bind(this), 4000)
        }.bind(this), 8000);
    }

    handleScroll = (e) => {
        const scroll = e.srcElement.scrollingElement.scrollTop;

        if(scroll >= 50) {
            this.setState({ "top": "no", "peek": "scrolling", "bounce": "scrolling", "bg": "scrolling" });
        } else if(scroll < 50 && scroll > 10) {
            this.setState({ "top": "scrolling", "peek": "on", "bounce": "on", "bg": "off" });
        } else {
            this.setState({ "top": "yes", "peek": "on", "bounce": "on", "bg": "off" });
        }
    }
}

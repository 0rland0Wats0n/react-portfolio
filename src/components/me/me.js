import "./me.css"

import React, { Component } from "react";
import feather from "feather-icons";
import { Link } from "react-router-dom";

import Header from "../header/header";

export default class Me extends Component {
    constructor() {
        super();

        this.state = {
            "last_position": 0,
            "direction": "none",
            "heading": "off",
            "info": "off",
            "translateY": 0,
            "showSkills": "no"
        }

        this.handleScroll = this.handleScroll.bind(this);
    }
    render() {
        return (
            <div>
                <Header key="me--header" page="me" heading="I'm Orlando."/>
                <div className="me">
                    <h1 className="me--heading" data-active={this.state.heading}>
                        <span style={{transform: 'translateY('+this.state.translateY+'px)'}}></span>
                        Saving the World, One Webpage at a Time.
                    </h1>
                    <div className="me--info" data-active={this.state.info} style={{transform: 'translateY('+this.state.translateY+'px)'}}>
                        <span className="section--accent">
                            <i data-feather="activity" width="32" height="32"></i>
                        </span>
                        <p>I am a self-taught, bachelor of science in Computer Science degree having fullstack web developer. I specialize in and enjoy web application and website design/development.</p>
                    </div>
                </div>
                <div className="me--sections-link me--sections-skills" data-active={this.state.showSkills}>
                    <span className="arrow--right"></span>
                    <Link to="/skills">
                        <span>s</span>
                        <span>k</span>
                        <span>i</span>
                        <span>l</span>
                        <span>l</span>
                        <span>s</span>
                    </Link>
                </div>
                <div className="me--sections-section"></div>
            </div>
        )
    }

    componentWillMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    }

    componentDidMount() {
        feather.replace();
    }

    handleScroll = (e) => {
        const scroll = e.srcElement.scrollingElement.scrollTop;
        const windowWidth = window.innerWidth;

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

        if(windowWidth > 768) {
            if(scroll >= 300 && this.state.direction === "down") {
                let newTranslate = this.state.translateY - Math.floor(scroll%2);
                this.setState({translateY: newTranslate});
            } else if(scroll > 300 && this.state.direction === "up") {
                let newTranslate = this.state.translateY + Math.floor(scroll%2);
                this.setState({translateY: newTranslate});
            }
        } else {
            this.setState({ translateY: 0 })
        }

        if(scroll >= 400 && this.state.direction === "down") {
            this.setState({ heading: "on", info: "on" });
        } else if(scroll <= 299 && this.state.direction === "up") {
            this.setState({ heading: "off", info: "off", translateY: 0 });
        }

        if(scroll >= 1000 && this.state.direction === "down") {
            this.setState({ "showSkills": "yes" });
        } else if(scroll <= 900 && this.state.direction === "up") {
            this.setState({ "showSkills": "no" });
        }

    }
}

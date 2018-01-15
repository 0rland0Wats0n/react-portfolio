import "./navigation.css";
import React, { Component } from "react";
import feather from "feather-icons";

import Logo from "./logo";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "mobile_nav": "off"
        };
    }
    render() {
        return (
            <div>
                <div className="navigation">
                    <div className="navigation--container">
                        <div className="navigation--logo">
                            <a href="/">
                                <Logo alt="Orlando Watson - Logo"/>
                            </a>
                        </div>
                        <div className="navigation--nav">
                            <ul className="navigation--nav-list">
                                <li className="active"><a href="/">me</a></li>
                                <li><a href="/">skills</a></li>
                                <li><a href="/">work</a></li>
                            </ul>
                        </div>
                        <div className="flex--placeholder"></div>
                        <div className="navigation--contact" data-active="on">
                            <a href="#">get in touch</a>
                        </div>
                        <div className="navigation--back-to-top" data-active="off">
                            <i data-feather="arrow-up"></i>
                        </div>
                        <div className="navigation--menu-toggle" onClick={this.onMenuOpenClick}>
                            <i data-feather="menu"></i>
                        </div>
                    </div>
                </div>
                <div className="navigation--mobile-container" data-active={this.state.mobile_nav}>
                    <div className="navigation--mobile">
                        <div className="navigation--mobile-close" onClick={this.onMenuCloseClick}>
                            <i className="js--close-modal" data-feather="x" width="32" height="32"></i>
                        </div>
                        <div className="navigation--nav-mobile">
                            <ul className="navigation--nav-list-mobile">
                                <li><a href="/">me</a></li>
                                <li><a href="/">skills</a></li>
                                <li><a href="/">work</a></li>
                            </ul>
                        </div>
                        <div className="navigation--nav-mobile-contact" data-active="off">
                            <h4>get in touch</h4>
                            <ul className="social--icons">
                                <li>
                                    <a href="mailto:thewatsonorlando@gmail.com">
                                        <i data-feather="mail" width="18" height="18"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/0rland0Wats0n">
                                        <i data-feather="github" width="18" height="18"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/TheOrlandoW">
                                        <i data-feather="twitter" width="18" height="18"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        feather.replace();
    }

    onMenuOpenClick = () => {
        this.setState({ "mobile_nav": "on" });
    }

    onMenuCloseClick = () => {
        this.setState({ "mobile_nav": "off" });
    }
}

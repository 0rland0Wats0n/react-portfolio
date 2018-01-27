import "./navigation.css";
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import feather from "feather-icons";

import Logo from "../logo";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "mobile_nav": "off",
            "contact_modal": "off",
            "top": true,
            "windowWidth": window.innerWidth
        };
    }
    render() {
        return (
            <TransitionGroup component="nav">
                <div className="navigation" data-top={this.state.top ? "yes" : "no"}>
                    <div className="navigation--container">
                        <div className="navigation--logo">
                            <Link to="/me">
                                <Logo alt="Orlando Watson - Logo"/>
                            </Link>
                        </div>
                        <div className="navigation--nav">
                            <ul className="navigation--nav-list">
                                <li>
                                    <NavLink to="/me" activeClassName="active" exact>me</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/skills" activeClassName="active">skills</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/work" activeClassName="active">work</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="flex--placeholder"></div>
                        <button type="button" className="navigation--contact" data-active={(this.state.top && this.state.windowWidth >= 768) ? "on" : "off"} onClick={this.onContactOpenClick}>
                            <span>get in touch</span>
                        </button>
                        <div className="navigation--back-to-top" data-active={(!this.state.top && this.state.windowWidth >= 768) ? "on" : "off"}>
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
                            <i className="modal--close" data-feather="x" width="32" height="32"></i>
                        </div>
                        <div className="navigation--nav-mobile">
                            <ul className="navigation--nav-list-mobile">
                                <li><Link to="/me">me</Link></li>
                                <li><Link to="/skills">skills</Link></li>
                                <li><Link to="/work">work</Link></li>
                            </ul>
                        </div>
                        <div className="navigation--nav-mobile-contact">
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
                <div className="navigation--contact-container" data-active={this.state.contact_modal}>
                    <div className="navigation--contact-modal">
                        <div className="navigation--contact-close" onClick={this.onContactCloseClick}>
                            <i className="modal--close" data-feather="x" width="32" height="32"></i>
                        </div>
                    </div>
                </div>
            </TransitionGroup>
        )
    }

    componentWillMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    }

    componentWillLeave = (next) => {
        debugger;
        this.setState({"top": false});
        next();
    }

    componentDidMount() {
        feather.replace();
    }

    onMenuOpenClick = () => this.setState({ "mobile_nav": "on" });
    onMenuCloseClick = () => this.setState({ "mobile_nav": "off" });
    onContactOpenClick = () => this.setState({ "contact_modal": "on" });
    onContactCloseClick = () => this.setState({ "contact_modal": "off" });

    handleResize = () => this.setState({ "windowWidth": window.innerWidth });

    handleScroll = (e) => {
        const scroll = e.srcElement.scrollingElement.scrollTop;

        if(scroll >= 100) {
            this.setState({ "top": false });
        } else {
            this.setState({ "top": true });
        }
    }
}

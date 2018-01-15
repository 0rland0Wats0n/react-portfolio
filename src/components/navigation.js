import "./navigation.css";
import React, { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="navigation--container">
                    <div className="navigation--logo">
                        <img src="/images/logo_notext.png" alt="Orlando Watson - Logo" />
                    </div>
                    <div className="navigation--nav">

                    </div>
                    <div className="navigation--contact">

                    </div>
                    <div className="navigation--back-to-top">
                        <i data-feather="arrow-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}

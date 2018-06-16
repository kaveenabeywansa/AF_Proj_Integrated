import React, { Component } from 'react';
import './NavBar.css';

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li>Dashboard</li>
                    <li>My OPD Patients</li>
                    <li>My Queue</li>
                    <li>Questionnaire</li>
                </ul>
            </div>
        );
    }
}
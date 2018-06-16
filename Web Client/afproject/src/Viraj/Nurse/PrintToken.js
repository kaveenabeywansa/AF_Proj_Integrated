import axios from 'axios';
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import api from '../Urls';
import Patient from './PatientDetails';
import './PrintToken.css';

export default class PrintToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: []
        }
    }
    componentDidMount() {
        axios.get(api.API + "queue").then(res => {
            this.setState({
                queue: res.data.data || res.data
            });
        });
    }
    printToken(event) {
        window.print();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="nav-bar">
                    <ul>
                        <li><Link to={"/nurse/"}>OPD</Link></li>
                        <li><Link to={"/nurse/overviewofpatient"}>Patient Overview</Link></li>
                    </ul>
                </div>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body><Patient /></Panel.Body>
                    </Panel><Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Print Token</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <div class="card-body">
                                <label class="card-text">Token Number : </label>
                                <label>{this.state.queue.length + 1}</label>
                                <label id={"token-button"}>
                                    <button type="button" class="btn btn-secondary" onClick={event => this.printToken(event)}>Print Token</button>
                                </label>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        );
    }
}
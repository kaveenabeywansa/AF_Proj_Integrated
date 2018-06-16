import axios from 'axios';
import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import api from '../Urls';
import './DocHome.css';

export default class DocHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: [],
            patient: [],
            id: '',
            status: 'Hold'
        };
        this.getAll();
    }
    getQueue() {
        this.state.queue.map(queue => {
            var nic = queue.patient;
            axios.get(api.API + "patient/" + nic).then(res => {
                this.setState({
                    patient: res.data.data || res.data
                });
            })
        });

    }
    getAll() {
        axios.get(api.API + "queue/" + sessionStorage.getItem('userFName')).then(res => {
            this.setState({
                queue: res.data.data || res.data
            });
            this.getQueue();
        });
    }
    changeButton(val) {
        if (val === 'Run') {
            this.state.status = 'Hold';
            document.getElementById("but").style.color = "red";
            document.getElementById("but").innerHTML = "Hold Queue";
            document.getElementById("as").value = "Close";

        }
        else if (val === 'Hold') {
            this.state.status = 'Run';
            document.getElementById("but").style.color = "blue";
            document.getElementById("but").innerHTML = "Run Queue";
            document.getElementById("as").value = "Open";

        }
    }
    changeDocOnline(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.status === 'Run') {
            axios.delete(api.API + "doctor/" + sessionStorage.getItem('userFName')).then(res => {
                this.changeButton('Run');
            }).catch(err => {
                alert(err);
            });
        }
        else {
            var doc1 = sessionStorage.getItem('userFName');
            axios.post(api.API + "doctor/", { name: doc1 }).then(res => {
                this.changeButton('Hold');
            }).catch(err => {
                alert(err);
            });
        }
    }
    setNICSession(obj, nic, name, gender, dob) {
        // this,patient.nic,patient.name,patient.gender,patient.DateOfBirth
        sessionStorage.setItem('patientnic', nic);
        sessionStorage.setItem('patientname', name);
        sessionStorage.setItem('patientgender', gender);
        sessionStorage.setItem('patientdob', dob);
        obj.props.history.push('/doctor/home');
    }
    removePatient(id) {
        var ids = id;
        axios.delete(api.API + "queue/" + ids).then(res => {
            if (res.status === 200) {
                alert("Successfully deleted");
            }
        }).catch(err => {
            alert(err);
        });
    }
    render() {
        return (
            <div className={"DocHome"}>
                <Header />
                <div className="nav-bar">
                    <ul>
                        <li><Link to={"/doctor/"}>OPD</Link></li>
                        <li><Link to={"/doctor/"}>Dashboard</Link></li>
                        <li><Link to={"/doctor/questionnaire"}>Questionnaire</Link></li>
                    </ul>
                </div>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <tr>
                                <td className={"left-field-d"}>Name </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Dr. {sessionStorage.getItem('userFName')}</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className={"left-field-d"}>No. of Patients </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>{this.state.queue.length}</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className={"left-field-d"}>Queue Status </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"} id="as">Open</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className={"left-field-d"}>Queue Type </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Regular</td>
                            </tr>
                            <div className={"inside"}>
                                <button type="button" class="btn btn-primary" id="but" onClick={event => this.changeDocOnline(event)}>{this.state.status} Queue</button>
                            </div>
                        </Panel.Body>
                    </Panel>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className={"field-border"}>Patient NIC</th>
                                        <th scope="col" className={"field-border"}>Name</th>
                                        <th scope="col" className={"field-border"}>Date Of Birth</th>
                                        <th scope="col" className={"field-border"}>Sex</th>
                                        <th scope="col" className={"field-border"}>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.patient.map(patient =>
                                        <tr class="table-active" key={patient.id} onClick={event => this.setNICSession(this, patient.nic, patient.Full_Name, patient.gender, patient.DateOfBirth)}>
                                            <td className={"field-border-1"}>{patient.nic}</td>
                                            <td className={"field-border-1"}>{patient.Full_Name}</td>
                                            <td className={"field-border-1"}>{patient.DateOfBirth}</td>
                                            <td className={"field-border-1"}>{patient.gender}</td>
                                            <td className={"field-border-1"}>{patient.Remarks}</td>
                                            <td className={"field-border-1"}>
                                                <Button bsStyle="primary" onClick={event => this.removePatient(patient.nic)}>Dismiss</Button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Panel.Body>
                    </Panel>

                </div>
            </div>
        );
    }
}
import axios from 'axios';
import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Header';
import api from '../Urls';
import './AddToQueue.css';
import Patient from './PatientDetails';
var now = new Date();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            doctor: '',
            nurse: '',
            patient: '',
            time: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
            remarks: ''
        };
    }
    componentDidMount() {
        axios.get(api.API + "doctor").then(res => {
            this.setState({
                doctors: res.data.data || res.data
            });
        })
    }
    validation() {
        var val1 = document.getElementById("exampleSelect2").value;
        var val2 = document.getElementById("assign").value;
        var val3 = document.getElementById("exampleTextarea").value;
        if (val1.match(/^\d/) || val2.match(/^\d/) || val3.match(/^\d/)) {
            alert("Input values are incorrect");
        }
        else {
            this.onSubmit();
        }
    }
    onDoctorChange(event) {
        event.preventDefault();
        this.state.doctor = event.target.value;
    }
    onAssigByChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.nurse = event.target.value;
    }
    onRemarksChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.state.remarks = event.target.value;
    }
    onSubmit(obj) {
        var pat = sessionStorage.getItem('patientnic');
        axios.post(api.API + "queue", {
            doctor: document.getElementById("exampleSelect2").value,
            patient: pat,
            time: dateFormat(now),
            assignedBy: document.getElementById("assign").value,
            remarks: document.getElementById("exampleTextarea").value
        }).then(res => {
            alert("Added successfully");
        }).catch(err => {
            alert(err);
        });
        this.setState({
            doctor: '',
            nurse: '',
            patient: '',
            time: '',
            assignedBy: ''
        })
        obj.props.history.push('/nurse/printtoken');
    }
    render() {
        return (<div>
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
                </Panel>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Add to Queue</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={() => this.validation()}>
                            <div class="form-group">
                                <label for="exampleSelect2">Assign To</label>
                                <select multiple="" class="form-control" id="exampleSelect2" onChange={event => this.onDoctorChange(event)}>
                                    {this.state.doctors.map(doctor =>
                                        <option value={doctor.name}>Dr. {doctor.name}</option>
                                    )}
                                </select>
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Date and Time</label>
                                <input type="text" class="form-control is-valid" id="inputValid" value={dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")} />
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Assigned By</label>
                                <input type="text" value={sessionStorage.getItem('userFName')} class="form-control is-valid" id="assign" onChange={event => this.onAssigByChange(event)} required={"true"} />
                            </div>
                            <div class="form-group">
                                <label for="exampleTextarea">Remarks</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3" required={"true"}></textarea>
                            </div>
                            <button onClick={() => this.onSubmit(this)} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Panel.Body>
                </Panel>
            </div>
        </div>
        );
    }
}

export default App;

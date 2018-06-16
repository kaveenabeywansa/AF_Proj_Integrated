import axios from 'axios';
import React, { Component } from 'react';
import api from '../Urls';
import './PatientDetails.css';

export default class PatientDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: []
        };
    }
    componentDidMount() {
        axios.get(api.API + "patient/" + sessionStorage.getItem('patientnic')).then(res => {
            this.setState({
                patient: res.data.data || res.data
            });
        })
    }
    render() {
        return (
            <div className={"pat-details-1"}>
                <div>{this.state.patient.map(patient =>
                    <div key={patient.id}>
                        <label>{patient.Full_Name} / </label>
                        <label>{patient.gender} / </label>
                        <label>{patient.civil_status}</label>
                    </div>
                )}
                </div>
                <div className={"pat-details-2"}>
                    {this.state.patient.map(patient =>
                        <div key={patient.id}>
                            <label>Patient NIC : </label>
                            <label>{patient.nic}</label>
                            <label id={"dob"}>DOB : </label>
                            <label>{patient.DateOfBirth}</label>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
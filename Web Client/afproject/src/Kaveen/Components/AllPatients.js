import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap"
import Header from '../../Header';
import { Link } from 'react-router-dom';

class AllPatients extends Component {
    state = {
        list: null
    }
    clickedLink(obj, data) {
        sessionStorage.setItem('patientnic', data.nic);
        sessionStorage.setItem('patientname', data.Full_Name);
        sessionStorage.setItem('patientgender', data.gender);
        sessionStorage.setItem('patientstatus', data.civil_status);
        sessionStorage.setItem('patientdob', data.DateOfBirth);
        sessionStorage.setItem('patientphone', data.phone);
        sessionStorage.setItem('patientaddress', data.Address);
        sessionStorage.setItem('patientblood', data.Blood_Group);
        sessionStorage.setItem('patientnic', data.nic);

        //Change the link to go to the patient overvie page
        obj.props.history.push('/nurse/overviewofpatient');
    }
    componentDidMount() {
        var obj = this;
        axios.get('http://localhost:3001/patient/')
            .then(function (response) {
                const listItems = response.data.data.map((number) =>

                    <tr onClick={() => obj.clickedLink(obj, number)} className="allpatients" key={number.nic}>
                        <th scope="row"><a>{number.Full_Name}</a></th>
                        <td>{number.DateOfBirth}</td>
                        <td>{number.gender}</td>
                        <td>{number.civil_status}</td>
                        <td>{number.nic}</td>
                        <td>{number.phone}</td>
                        <td>{number.Address}</td>
                    </tr>
                );
                obj.setState({ list: listItems });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <div className="nav-bar">
                        <ul>
                            <li><Link to={"/nurse/"}>OPD</Link></li>
                            <li><Link to={"/nurse/"}>Home</Link></li>
                            <li><Link to={"/nurse/PatientRegistration"}>New Patient</Link></li>
                            <li><Link to={"/nurse/allpatients"}>All Patients</Link></li>
                        </ul>
                    </div>
                    <div className="editPatient">
                        <center><h3>Patients</h3></center>
                        <hr />

                        <table className="viewallpatientstable">
                            <thead>
                                <tr>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Civil Status</th>
                                    <th scope="col">NIC</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default AllPatients;
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Header from '../../Header';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from 'react-router-dom';

class AddAlergies extends Component {
    saveAlergy(obj) {
        // sessionStorage.setItem('patientnic', '1111');

        axios.post('http://localhost:3001/alergy/', {
            nic: sessionStorage.getItem('patientnic'),
            alergy: document.getElementById('alergy').value,
            status: document.getElementById('status').value,
            remark: document.getElementById('remark').value,
        }).then(function (response) {
            alert('Successfully Added !');
            obj.clearFields();
            //console.log(response);
        }).catch(function (error) {
            alert('Error Occured !');
            console.log(error);
        });
    }
    clearFields() {
        document.getElementById('alergy').value = "";
        document.getElementById('status').value = "";
        document.getElementById('remark').value = "";
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
                            <li><Link to={"/nurse/overviewofpatient"}>Patient Overview</Link></li>
                        </ul>
                    </div>

                    <div id="Sample2-header">
                        <span>Add Alergies</span>
                    </div>
                    <div className="editPatient">
                        <div className="editPatient">
                            <div className="alergypanel">
                                <label>Alergy</label>
                                <input type="text" className="form-control" id="alergy" placeholder="Alergy" />
                                <label>Status</label>
                                <select className="form-control" id="status">
                                    <option>Past</option>
                                    <option>Current</option>
                                </select>
                                <label>Remarks</label>
                                <textarea className="form-control" id="remark" rows="3"></textarea>
                                <button type="Save" className="btn btn-primary"
                                    onClick={() => this.saveAlergy(this)}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AddAlergies;
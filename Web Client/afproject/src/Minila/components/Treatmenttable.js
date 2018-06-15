import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header';
import Sidebar from '../../NavBar';
import './home.css';
import { Link } from "react-router-dom";

export class Treatmenttable extends React.Component {

    state = {
        treatment: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/treatment/' + sessionStorage.getItem('patientnic'))
            .then(res => {
                this.setState({
                    treatment: res.data.data || res.data
                });
            });
    }
    render() {
        return (
            <div>
                <Header />
                <div className="nav-bar">
                    <ul>
                        <li><Link to={"/doctor/"}>OPD</Link></li>
                        <li><Link to={"/doctor/"}>Dashboard</Link></li>
                        <li><Link to={"/doctor/home"}>My OPD Patients</Link></li>
                        <hr />
                        <li><Link to={"/doctor/examination"}>Examination</Link></li>
                        <li><Link to={"/doctor/treatment"}>Treatment</Link></li>
                        <li><Link to={"/doctor/injection"}>Order Injection</Link></li>
                        <li><Link to={"/doctor/view"}>Create New Visit</Link></li>
                        <hr />
                        <li><Link to={"/doctor/viewtable"}>View Visits</Link></li>
                        <li><Link to={"/doctor/examinationtable"}>Examination View</Link></li>
                        <li><Link to={"/doctor/treatmenttable"}>Treatment View</Link></li>
                        <li><Link to={"/doctor/injectiontable"}>Injection View</Link></li>
                    </ul>
                </div>
                <div className="raw">
                    <h3>Treatment</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Treatment Date & Time</th>
                                <th scope="col">Treatment</th>
                                <th scope="col">Remark</th>
                                <th scope="col">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.treatment.map(number =>
                                <tr className="table-active" key={number.id}>
                                    <td>{number.tretmentDateandTime}</td>
                                    <td>{number.treatment}</td>
                                    <td>{number.tremaks}</td>
                                    <td>{number.active}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../Header';
import './home.css';

export class Injectiontable extends React.Component {

    state = {
        injection: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/Injection/' + sessionStorage.getItem('patientnic'))
            .then(res => {
                this.setState({
                    injection: res.data.data || res.data
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
                    <h3>Injection</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Injection Data & Time</th>
                                <th scope="col">Injection</th>
                                <th scope="col">Remaks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.injection.map(number =>
                                <tr className="table-active" key={number.id}>
                                    <td>{number.injectionDateandTime}</td>
                                    <td>{number.injection}</td>
                                    <td>{number.iremaks}</td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
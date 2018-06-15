import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header';
import Sidebar from '../../NavBar';
import { Link } from "react-router-dom";

export class Viewtable extends React.Component {
    state = {
        view: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/view/' + sessionStorage.getItem('patientnic'))
            .then(res => {
                this.setState({
                    view: res.data.data || res.data
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
                    <h3>New Visits</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Injuty</th>
                                <th scope="col">visit type</th>
                                <th scope="col">remark</th>
                                <th scope="col">doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.view.map(number =>
                                <tr className="table-active" key={number.id}>
                                    <td>{number.injury}</td>
                                    <td>{number.visittype}</td>
                                    <td>{number.iremark}</td>
                                    <td>{number.Dateandtime}</td>
                                    <td>{number.doctor}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



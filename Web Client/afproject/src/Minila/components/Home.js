import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Header from '../../Header';
import { Table } from "./Table";
import { Viewtable } from "./Viewtable";
import './home.css';

export class Home extends React.Component {

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

                    Home
                    <Link to={"/doctor/view"}>View</Link>
                    <Link to={"/doctor/examination"}>Examination</Link>
                    <Link to={"/doctor/treatment"}>Treatment</Link>
                    <Link to={"/doctor/injection"}>Order injection</Link>
                    <Link to={"/doctor/viewtable"}>Create View</Link>
                    <Link to={"/doctor/examinationtable"}>Examination view</Link>
                    <Link to={"/doctor/treatmenttable"}> Treatment view</Link>
                    <Link to={"/doctor/injectiontable"}>Injection view</Link>
                    <div className="displaybackground1">
                        <hr /><h1>Patient Details</h1><hr />
                        <h2>
                            NIC:{sessionStorage.getItem('patientnic')}<br />
                            Name:{sessionStorage.getItem('patientname')}<br />
                            Gender:{sessionStorage.getItem('patientgender')}<br />
                            Date of Birth:{sessionStorage.getItem('patientdob')}
                        </h2>
                    </div>
                </div>
                <div>
                    <Router>
                        <Table>
                            <Route path="/viewtable" Component={Viewtable} />
                        </Table>
                    </Router>
                </div>

            </div>

        );
    }
}

export default Home;

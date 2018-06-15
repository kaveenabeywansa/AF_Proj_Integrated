import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Viewtable } from "./Viewtable";
import { Table } from "./Table";
import Header from '../../Header';
import Sidebar from '../../NavBar';

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
                        <li><Link to={"/doctor/"}>Examination</Link></li>
                        <li><Link to={"/doctor/"}>Treatment</Link></li>
                        <li><Link to={"/doctor/"}>Order Injection</Link></li>
                        <li><Link to={"/doctor/"}>Create View</Link></li>
                        <hr />
                        <li><Link to={"/doctor/"}>Examination View</Link></li>
                        <li><Link to={"/doctor/"}>Treatment View</Link></li>
                        <li><Link to={"/doctor/"}>Injection View</Link></li>
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
                        <hr/><h1>Patient Details</h1><hr/>
                        <h2>
                            NIC:{sessionStorage.getItem('patientnic')}<br />
                            Name:{sessionStorage.getItem('patientname')}<br />
                            Gender:{sessionStorage.getItem('patientgender')}<br />
                            Date of Birth:{sessionStorage.getItem('patientbod')}
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

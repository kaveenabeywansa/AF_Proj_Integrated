import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Header from '../../Header';
import Sidebar from '../../NavBar';
import { Link } from "react-router-dom";

export class Examinationtable extends React.Component {

    state = {
        examinations: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/examination/' + sessionStorage.getItem('patientnic'))
            .then(res => {
                this.setState({
                    examinations: res.data.data || res.data
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
                        <hr />
                        <li><Link to={"/doctor/viewtable"}>Create View</Link></li>
                        <li><Link to={"/doctor/examinationtable"}>Examination View</Link></li>
                        <li><Link to={"/doctor/treatmenttable"}>Treatment View</Link></li>
                        <li><Link to={"/doctor/injectiontable"}>Injection View</Link></li>
                    </ul>
                </div>
                <div className="displaybackground">
                    <h3>Examinations</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">data & time</th>
                                <th scope="col">Hight(cm)</th>
                                <th scope="col">weight(kg)</th>
                                <th scope="col">BMI</th>
                                <th scope="col">Blood preasure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.examinations.map(number =>
                                <tr className="table-active" key={number.id}>
                                    <td>{number.examinationDateandTime}</td>
                                    <td>{number.hight}</td>
                                    <td>{number.wight}</td>
                                    <td>{number.BMI}</td>
                                    <td>{number.temp}</td>
                                    <td>{number.bloodpreasure}</td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
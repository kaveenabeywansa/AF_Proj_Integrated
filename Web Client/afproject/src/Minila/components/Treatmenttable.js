import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header';
import Sidebar from '../../NavBar';
import './home.css';

export class Treatmenttable extends React.Component {

    state = {
        treatment: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/treatment/'+sessionStorage.getItem('patientnic'))
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
                <Sidebar />
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



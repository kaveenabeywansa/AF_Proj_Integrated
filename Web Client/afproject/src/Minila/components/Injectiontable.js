import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Header';
import Sidebar from '../../NavBar';
import './home.css';

export class Injectiontable extends React.Component {

    state = {
        injection: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/Injection/')
            .then(res => {
                this.setState({
                    injection: res.data.data || res.data
                });
            });
    }
    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
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
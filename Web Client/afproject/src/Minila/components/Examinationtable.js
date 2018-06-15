import React from "react";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import Header from '../../Header';
import Sidebar from '../../NavBar';

export class Examinationtable extends React.Component {

    state = {
        examinations: []
    };

    componentDidMount() {
        axios.get('http://localhost:3001/examination/')
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
                <Sidebar />
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
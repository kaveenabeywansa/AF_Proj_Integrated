import axios from 'axios';
import React from "react";
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import Header from '../../Header';
import './home.css';

export class Injection extends React.Component {

  state = {
    date: new Date()
  };

  datePicked(e, object) {
    object.setState({
      date: e
    });
  }

  save(obj) {
    console.log("dhsjkfhdk");
    axios.post('http://localhost:3001/Injection/', {
      nic: sessionStorage.getItem('patientnic'),
      injectionDateandTime: this.state.date,
      injection: document.getElementById('Injection').value,
      iremaks: document.getElementById('Remark').value
    }
    ).then(function (response) {
      //console.log(response);
      alert("success...!!!");
      console.log(response);
      // obj.props.history.push('/home');
    })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  };

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
        <div className="displaybackground">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <h1>Order Injection</h1>
            <div className="form-group">
              <label htmlFor="Injection Data & Time">Injection Data & Time</label>
              <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
            </div>

            { /* <div className="form-group">
      <label htmlFor="Injection Data & Time">Injection Data & Time</label>
      <input type="text" className="form-control" id="InjectionDataTime" placeholder="Injection Data & Time"></input>
        </div>*/}
            <div className="form-group">
              <label htmlFor="Injection">Injection</label>
              <input type="text" className="form-control" id="Injection" placeholder="Injection"></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleTextarea">Remark</label>
              <textarea className="form-control" id="Remark" rows="3"></textarea>
            </div>

            <button type="submit" className="btn btn-primary" onClick={() => this.save(this)}>Save</button>

          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}
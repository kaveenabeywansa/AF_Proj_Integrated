import axios from 'axios';
import React from "react";
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import Header from '../../Header';
import './home.css';
export class Treatment extends React.Component {

  state = {
    date: new Date()
  };

  datePicked(e, object) {
    object.setState({
      date: e
    });
  }

  save(obj) {
    // console.log("dhsjkfhdk");
    axios.post('http://localhost:3001/treatment/', {
      nic: sessionStorage.getItem('patientnic'),
      TreatmentdateAndtime: this.state.date,
      Treatment: document.getElementById('Treatment').value,
      Remark: document.getElementById('Remark').value,
      active: document.getElementById('active').value,


    }//,{ headers: {"Authorization" : "admin123"}}
    ).then(function (response) {
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
        </div>
        <div>
          <div className="raw">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <h1>Treatment</h1>

              <div className="form-group">
                <label htmlFor="Treatment date & time">Treatment date & time</label>
                <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
              </div>

              {/* <div className="form-group">
      <label htmlFor="exampleInputPassword1">Treatment date & time</label>
      <input type="text" class="form-control" id="TreatmentdateAndtime" placeholder="Treatment date & time"></input>
    </div> */}
              <div className="form-group">
                <label htmlFor="exampleSelect2">Treatment</label>
                <select multiple="" className="form-control" id="Treatment">
                  <option>Eye Exercise</option>
                  <option>Meditation</option>
                  <option>Ear Infection</option>
                  <option>Treatment 4</option>
                  <option>Treatment 5</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea">Remark</label>
                <textarea className="form-control" id="Remark" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Active</label>
                <input type="text" className="form-control" id="active" placeholder="Active"></input>
              </div>
              <button type="submit" className="btn btn-primary" onClick={() => this.save(this)}>Save</button>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}



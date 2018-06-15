import React from "react";
import './home.css';
import axios from 'axios';
import Calendar from 'react-calendar';
import Header from '../../Header';
import Sidebar from '../../NavBar';
import { Link } from "react-router-dom";

export class View extends React.Component {
  constructor(props) {
    super(props);
    var test = {
      name: '123'
    }
  }

  state = {
    date: new Date()
  };

  datePicked(e, object) {
    object.setState({
      date: e
    });
  }
  createview(obj) {
    axios.post('http://localhost:3001/view/', {
      nic: sessionStorage.getItem('patientnic'),
      injury: document.getElementById('injury').value,
      visittype: document.getElementById('visittype').value,
      iremark: document.getElementById('Remark').value,
      Dateandtime: this.state.date,
      doctor: document.getElementById('Doctor').value
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
        <div className="raw">
          <div className="col-md-3"></div>
          <div className="col-md-8">
            <h1>Create New Visit</h1>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Injury</label>
                <input type="text" className="form-control" id="injury" placeholder="Injury"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect1">Visit type</label>
                <select className="form-control" id="visittype">
                  <option>OPD</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea">Remark</label>
                <textarea className="form-control" id="Remark" rows="3"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="DateOfBirth">DateOfBirth</label>
                <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
              </div>
              {/* <div className="form-group">
      <label htmlFor="exampleInputPassword1">Date & time</label>
      <input type="text" className="form-control" id="DandT" placeholder="03/06/18"></input>
    </div> */}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Doctor</label>
                <input type="text" className="form-control" id="Doctor" value={sessionStorage.getItem('userFName')} placeholder="Doctor"></input>
              </div>
              <div>
                <button type="submit" className="btn btn-primary" onClick={() => this.createview(this)}>Create</button>
                <button type="submit" className="btn btn-primary">Cancel</button>
              </div>

            </form>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

import axios from 'axios';
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-date-picker';
import Header from '../../Header';
import { Link } from "react-router-dom";
import './PatientRegistration.css';

class PatientRegistration extends Component {

  state = {
    date: new Date()
  };

  datePicked(e, object) {
    object.setState({
      date: e
    });
  }

  registerPatient(object) {
    axios.post('http://localhost:3001/patient/', {
      //initialize properties
      Title: document.getElementById('Title').value,
      Full_Name: document.getElementById('Full_Name').value,
      other_name: document.getElementById('other_name').value,
      civil_status: document.getElementById('civil_status').value,
      gender: document.getElementById('gender').value,
      DateOfBirth: this.state.date,
      nic: document.getElementById('nic').value,
      citizenship: document.getElementById('citizenship').value,
      Blood_Group: document.getElementById('Blood_Group').value,
      preferred_language: document.getElementById('preferred_language').value,
      address: document.getElementById('Address').value,
      phone: document.getElementById('phone').value,
      contact_person_name: document.getElementById('contact_person_name').value,
      contact_person_tel: document.getElementById('contact_person_tel').value,
      Choose_file: document.getElementById('Choose_file').value,
      remarks: document.getElementById('Remarks').value,

    }, )
      .then(function (response) {
        sessionStorage.setItem('patientnic', document.getElementById('nic').value);
        sessionStorage.setItem('patientname', document.getElementById('Full_Name').value);
        sessionStorage.setItem('patientgender', document.getElementById('gender').value);
        sessionStorage.setItem('patientstatus', document.getElementById('civil_status').value);
        sessionStorage.setItem('patientdob', object.state.date);
        sessionStorage.setItem('patientphone', document.getElementById('phone').vallue);
        sessionStorage.setItem('patientaddress', document.getElementById('Address').value);
        sessionStorage.setItem('patientblood', document.getElementById('Blood_Group').value);

        alert("Patient Registered Successfully..");
        object.props.history.push('/nurse/OverviewOfPatient');

      }).catch(function (err) {
        console.log("Error: " + err);
      });
  };

  go() {
    alert('fuck')
  }
  render() {
    return (
      <div>
        <div>
          <Header />
          <div className="nav-bar">
            <ul>
              <li><Link to={"/nurse/"}>OPD</Link></li>
              <li><Link to={"/nurse/"}>Home</Link></li>
            </ul>
          </div>
        </div>
        <div className="PatientRegistration">
          <center><h1>Patient Registration</h1></center>
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">

              <div className="PatientPersonalDetails">
                <h2>Patient Personal Details</h2>

                <div className="form-group">
                  <label htmlFor="Title">Title</label>
                  <select className="form-control" id="Title">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Miss.</option>
                    <option>Rev.</option>

                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="Full_Name">Full_Name</label>
                  <input type="text" className="form-control" id="Full_Name" aria-describedby="emailHelp" placeholder="Full_Name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="other_name">other_name</label>
                  <input type="text" className="form-control" id="other_name" placeholder="other_name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="civil_status">civil_status</label>
                  <select className="form-control" id="civil_status">
                    <option>Single</option>
                    <option>Married</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">gender</label>
                  <select className="form-control" id="gender">
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="DateOfBirth">DateOfBirth</label>
                  <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
                </div>

                {/* <div>
                  <DatePicker
                    dayPickerProps={{
                      month: new Date(2018, 10),
                      showWeekNumbers: true,
                      todayButton: 'Today',
                    }}
                  />
                </div> */}

              </div>
              <div className="PatientIdentityDetails">
                <h2>Patient Personal Details</h2>

                <div className="form-group">
                  <label htmlFor="nic">nic</label>
                  <input type="text" className="form-control" id="nic" placeholder="nic"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="citizenship">citizenship</label>
                  <input type="text" className="form-control" id="citizenship" placeholder="citizenship"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="Blood_Group">Blood_Group</label>
                  <select className="form-control" id="Blood_Group">
                    <option>A+</option>
                    <option>A-</option>
                    <option>AB</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_language">preferred_language</label>
                  <select className="form-control" id="preferred_language">
                    <option>Sinhala</option>
                    <option>English</option>
                    <option>Tamil</option>
                    <option>other</option>
                  </select>
                </div>
              </div>

              <div className="PatientIdentityDetails">
                <h2>Patient Contact Details</h2>

                <div className="form-group">
                  <label htmlFor="Address">Address</label>
                  <input type="text" className="form-control" id="Address" placeholder="Address"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  <input type="text" className="form-control" id="phone" placeholder="phone"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="contact_person_name">contact_person_name</label>
                  <input type="text" className="form-control" id="contact_person_name" placeholder="contact_person_name"></input>
                </div>

                <div className="form-group">
                  <label htmlFor="contact_person_tel">contact_person_tel</label>
                  <input type="text" className="form-control" id="contact_person_tel" placeholder="contact_person_tel"></input>
                </div>

              </div>

              <div className="PatientIdentityDetails">
                <h2>Patient Contact Details</h2>

                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="Choose_file"></input>
                      <label className="custom-file-label" htmlFor="Choose_file">Choose file</label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text" id="">Upload</span>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="Remarks">Remarks</label>
                  <textarea className="form-control" id="Remarks" rows="3"></textarea>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <button type="Save" className="btn btn-primary" onClick={() => this.registerPatient(this)}>Save</button>
                    {//<Link style={{ color: 'black' }} params={{ userId: 123 }} to={"/overviewofpatient"}>
                    }

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientRegistration;

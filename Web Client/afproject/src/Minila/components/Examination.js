import React from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import Header from '../../Header';
import Sidebar from '../../NavBar';

export class Examination extends React.Component {

  state = {
    date: new Date()
  };

  datePicked(e, object) {
    object.setState({
      date: e
    });
  }

  cal() {
    document.getElementById('BMI').value = document.getElementById('wight').value / Math.sqrt(document.getElementById('hight').value);
  }

  save(obj) {
    console.log("dhsjkfhdk");
    axios.post('http://localhost:3001/examination/', {
      ExaminationDataTime: this.state.date,
      hight: document.getElementById('hight').value,
      wight: document.getElementById('wight').value,
      BMI: document.getElementById('BMI').value,
      temp: document.getElementById('temp').value,
      bloodpreasure: document.getElementById('preasure').value

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
          <Sidebar />
        </div>
        <div className="displaybackground">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <h1>Examination</h1>
              <form>
                <div className="form-group">
                  <label htmlFor="Examination Data & Time">Examination Data & Time</label>
                  <Calendar onChange={(e) => this.datePicked(e, this)} value={this.state.date} />
                </div>
                {/* <div className="form-group">
      <label htmlFor="Examination Data & Time">Examination Data & Time</label>
      <input type="text" className="form-control" id="ExaminationDataTime" placeholder="Examination Data & Time"></input>
        </div> */}
                <div className="form-group">
                  <label htmlFor="hight">Hight(cm)</label>
                  <input type="text" className="form-control" id="hight" placeholder="Hight"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight(kg)</label>
                  <input type="text" className="form-control" id="wight" placeholder="wight"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="weight">BMI</label>
                  <input type="text" className="form-control" id="BMI" placeholder="BMI" onClick={() => this.cal(this)}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Temperature(C)</label>
                  <input type="text" className="form-control" id="temp" placeholder="Temperature"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="preasure"> S Blood preasure</label>
                  <input type="text" className="form-control" id="preasure" placeholder="  Blood preasure"></input>
                </div>

                <button type="submit" className="btn btn-primary" onClick={() => this.save(this)}>Save</button>

              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
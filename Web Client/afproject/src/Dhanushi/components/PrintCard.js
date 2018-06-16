import React, { Component } from 'react';
import Barcode from 'react-barcode';
import { Link } from 'react-router-dom';
import { Card, CardBody, ImageHeader } from 'react-simple-card';
import ReactToPrint from "react-to-print";
import Header from '../../Header';
import './PrintCard.css';
import patient from './patient.png';

class PrintCard extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <div className="nav-bar">
            <ul>
              <li><Link to={"/nurse/"}>OPD</Link></li>
              <li><Link to={"/nurse/overviewofpatient"}>Patient Overview</Link></li>
            </ul>
          </div>
        </div>
        <div className="PrintCard">
          <center><h1>Print Card</h1></center>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5">
              <div className="card mb-3">
                <Card>
                  <center><h3 className="card-header">Patient Card</h3></center>

                  <CardBody>
                    <div className="card-body">
                      <h5 className="card-subtitle text-muted">Patient Name : {sessionStorage.getItem('patientname')}</h5>
                      <h5 className="card-subtitle text-muted">Patient NIC :{sessionStorage.getItem('patientnic')}</h5>

                    </div>
                    <div>

                      <Barcode value={sessionStorage.getItem('patientnic')} />
                    </div>
                  </CardBody>

                  <ImageHeader style={{ height: '200px', width: '50%', display: 'block' }} imageSrc={patient} alt="Card image" />

                  <div className="card-body">
                    <p className="card-text">Bring this card with you on every visit to hospital.</p>
                  </div>

                  <div className="row">
                    <div className="col-md-4"></div>
                  </div>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Print extends React.Component {
  render() {
    return (

      <div className="PrintCard2">
        <PrintCard ref={el => (this.componentRef = el)} />
        <ReactToPrint
          trigger={() => <center><button type="Print" className="btn btn-primary">Print</button></center>}
          content={() => this.componentRef}
        />

      </div>
    )
  }
}

export default Print; 
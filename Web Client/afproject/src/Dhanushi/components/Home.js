import React from "react";
//import './home.css';
import { Link } from "react-router-dom";
import Header from '../../Header';

export class Home extends React.Component {

    render() {

        return (
            <center>
                <div>
                    <Header />
                    <div className="nav-bar">
                        <ul>
                            <li><Link to={"/nurse/"}>OPD</Link></li>
                            <li><Link to={"/nurse/"}>Home</Link></li>
                            <li><Link to={"/nurse/PatientRegistration"}>New Patient</Link></li>
                            <li><Link to={"/nurse/allpatients"}>All Patients</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="nurseHomeBckgrnd">
                    Home
              <Link to={"/nurse/PatientRegistration"}>PatientRegistration</Link>
                    {/*<Link to={"/overviewofpatient"}>OverviewOfPatient</Link>*/}
                </div>
            </center>
        );
    }
}
export default Home;


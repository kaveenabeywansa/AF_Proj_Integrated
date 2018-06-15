import React from "react";
//import './home.css';
import { Link } from "react-router-dom";
import Header from './Header';

export class Home extends React.Component {

    render() {

        return (
            <center>
                <div>
                    <Header />
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


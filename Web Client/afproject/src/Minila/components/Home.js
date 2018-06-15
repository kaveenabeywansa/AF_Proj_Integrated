import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Viewtable } from "./Viewtable";
import {Table} from "./Table";
import Header from '../../Header';
import Sidebar from '../../NavBar';

export class Home extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <Sidebar />
            <div className="raw">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                Home
                <Link to={"/doctor/view"}>View</Link>
                <Link to={"/doctor/examination"}>Examination</Link>
                <Link to={"/doctor/treatment"}>Treatment</Link>
                <Link to={"/doctor/injection"}>Order injection</Link>
                <Link to={"/doctor/viewtable"}>Create View</Link>
                <Link to={"/doctor/examinationtable"}>Examination view</Link>
                <Link to={"/doctor/treatmenttable"}> Treatment view</Link>
                <Link to={"/doctor/injectiontable"}>Injection view</Link>
                <div>
              
              </div>
                    </div>
                    <div>
                    <Router>
                       <Table>
                        <Route path ="/viewtable" Component={Viewtable}/>
                   </Table>
                   </Router>
                        </div>
                  <div className="col-md-3"></div>   
            </div>
            </div>
        );
    }
}

export default Home;

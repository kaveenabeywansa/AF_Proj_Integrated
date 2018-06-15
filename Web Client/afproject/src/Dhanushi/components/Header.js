import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import './PrintCard.css';



//export const Header = (props) => {
//const div22 = {
//  width: '270px',
//  height: '1000px'
// };
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} >
                <NavLink to="/Home">Home</NavLink>
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
      </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
      </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="nav-bar">
          {/* <ul>
            <li>Links go here...</li>
          </ul> */}
        </div>
      </div>

    );
  }
}
export default Header;



















           /*<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" >OPD</a>
               

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a classNmae="nav-link"><Link to={"/patientregistration"} >AddNewPatient</Link></a>
                        </li>
                       
                    </ul>
                </div>
    </nav>*/


           /* <div className="card text-white bg-secondary mb-3" style={{ width: '20%', height: '100vh', }} >
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h4 className="card-title">Secondary card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
    </div>*/



        //<nav >
        // <div className="container">
        // <div >
        // <ul >
        // <li><Link to={"/home"} >Home</Link></li>
        //<li><Link to={"/user"} >User</Link></li>
        // </ul>
        // </div>
        //  </div>
        // </nav>

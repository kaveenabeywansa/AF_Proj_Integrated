import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={"/login"}>Int Eligence</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {/* <Nav>
                            <NavItem eventKey={1} href="#">
                                Link
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
                        </Nav> */}
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                {'Welcome '+sessionStorage.getItem('userFName')+' '+sessionStorage.getItem('userLName')}
                        </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Link to={"/logout"}>Log Out</Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
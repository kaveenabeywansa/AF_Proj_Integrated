import React, {Component} from "react";
import { Link,NavLink } from "react-router-dom";
 import './home.css';
import { Navbar , Nav, NavItem ,NavDropdown,MenuItem } from "react-bootstrap";
// export const Header = (props) => {
    //const div22 = {
    //  width: '270px',
    //  height: '1000px'
    // };
    
class Header extends Component{
    render (){
      return(
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
      <NavItem eventKey={1}>
        <NavLink to="/Home">Home</NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
        View
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
{/*<div className="nav-bar">
      </div>*/}
        </div>
      );
    }
}

export default Header;


// <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
//         <a className="navbar-brand" >OPD</a>
//         <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarResponsive">
//           <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
//               <a className="nav-link" >
//                 <i className="fa fa-fw fa-dashboard"></i>
//                 <span className="nav-link-text">Dashboard</span>
//               </a>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Home">
//            <Link to={"/home"} >Home</Link>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="left" title="User">
//               <Link to={"/user"} >User</Link>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
//               <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"  data-parent="#exampleAccordion" >
//                 <i className="fa fa-fw fa-wrench"></i>
//                 <span className="nav-link-text">Components</span>
//               </a>
//               <ul className="sidenav-second-level collapse" id="collapseComponents">
//                 <li>
//                   <a href="navbar.html">Navbar</a>
//                 </li>
//                 <li>
//                   <a href="cards.html">Cards</a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
//               <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
//                 <i className="fa fa-fw fa-file"></i>
//                 <span className="nav-link-text">Example Pages</span>
//               </a>
//               <ul className="sidenav-second-level collapse" id="collapseExamplePages">
//                 <li>
//                   <a href="login.html">Login Page</a>
//                 </li>
//                 <li>
//                   <a href="register.html">Registration Page</a>
//                 </li>
//                 <li>
//                   <a href="forgot-password.html">Forgot Password Page</a>
//                 </li>
//                 <li>
//                   <a href="blank.html">Blank Page</a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
//               <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
//                 <i className="fa fa-fw fa-sitemap"></i>
//                 <span className="nav-link-text">Menu Levels</span>
//               </a>
//               <ul className="sidenav-second-level collapse" id="collapseMulti">
//                 <li>
//                   <a href="#">Second Level Item</a>
//                 </li>
//                 <li>
//                   <a href="#">Second Level Item</a>
//                 </li>
//                 <li>
//                   <a href="#">Second Level Item</a>
//                 </li>
//                 <li>
//                   <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
//                   <ul className="sidenav-third-level collapse" id="collapseMulti2">
//                     <li>
//                       <a href="#">Third Level Item</a>
//                     </li>
//                     <li>
//                       <a href="#">Third Level Item</a>
//                     </li>
//                     <li>
//                       <a href="#">Third Level Item</a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
//               <a className="nav-link" href="#">
//                 <i className="fa fa-fw fa-link"></i>
//                 <span className="nav-link-text">Link</span>
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav sidenav-toggler">
//             <li className="nav-item">
//               <a className="nav-link text-center" id="sidenavToggler">
//                 <i className="fa fa-fw fa-angle-left"></i>
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <i className="fa fa-fw fa-envelope"></i>
//                 <span className="d-lg-none">Messages
//                   <span className="badge badge-pill badge-primary">12 New</span>
//                 </span>
//                 <span className="indicator text-primary d-none d-lg-block">
//                   <i className="fa fa-fw fa-circle"></i>
//                 </span>
//               </a>
//               <div className="dropdown-menu" aria-labelledby="messagesDropdown">
//                 <h6 className="dropdown-header">New Messages:</h6>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <strong>David Miller</strong>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <strong>Jane Smith</strong>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <strong>John Doe</strong>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item small" href="#">View all messages</a>
//               </div>
//             </li>
//             <li className="nav-item dropdown">
//               <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 <i className="fa fa-fw fa-bell"></i>
//                 <span className="d-lg-none">Alerts
//                   <span className="badge badge-pill badge-warning">6 New</span>
//                 </span>
//                 <span className="indicator text-warning d-none d-lg-block">
//                   <i className="fa fa-fw fa-circle"></i>
//                 </span>
//               </a>
//               <div className="dropdown-menu" aria-labelledby="alertsDropdown">
//                 <h6 className="dropdown-header">New Alerts:</h6>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <span className="text-success">
//                     <strong>
//                       <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
//                   </span>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <span className="text-danger">
//                     <strong>
//                       <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
//                   </span>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item" href="#">
//                   <span className="text-success">
//                     <strong>
//                       <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
//                   </span>
//                   <span className="small float-right text-muted">11:21 AM</span>
//                   <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
//                 </a>
//                 <div className="dropdown-divider"></div>
//                 <a className="dropdown-item small" href="#">View all alerts</a>
//               </div>
//             </li>
            
//             <li className="nav-item">
//               <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
//                 <i className="fa fa-fw fa-sign-out"></i>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </nav>


// </div>
// <div>
//  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a className="navbar-brand" >OPD</a>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarColor01">
//         <ul className="navbar-nav mr-auto">
//             <li class="nav-item">
//                 <a classNmae="nav-link"><Link to={"/home"} >Home</Link></a>
//             </li>
//             <li class="nav-item">
//                 <a classNmae="nav-link"><li><Link to={"/user"} >User</Link></li></a>
//             </li>
//         </ul>
//     </div>
// </nav> 

//  <div className="card text-white bg-secondary mb-3" style={{ width: '20%', height: '100vh', }} >
//     <div className="card-header">Header</div>
//     <div className="card-body">
//         <h4 className="card-title">Secondary card title</h4>
//         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
// </div>
// </div>


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

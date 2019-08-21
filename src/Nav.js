import  { NavDropdown,Navbar,Nav  }from 'react-bootstrap';
import  React, {Component}from 'react';
import './Nav.css'

class Navigationbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar fixed="top" collapseOnSelect expand="lg"  bg="white"  className="docnav" >
                  <Navbar.Brand href="#home">
                   <img
                      src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                      width="300"
                      height="50"
                      className="d-inline-block align-top"
                      alt="Docplanner logo"
                     />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                  </Nav>
                  <Nav>
                  <Nav.Link href="https://www.docplanner.com/about-us" className="aboutus">About Us</Nav.Link>
                  <Nav.Link href="https://www.docplanner.com/career" className="career">Career</Nav.Link>
                  <NavDropdown title="Departement" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  </NavDropdown>
                  </Nav>
                  </Navbar.Collapse>
                  </Navbar>
             </div>
      );
    }
}
 
export default Navigationbar ;
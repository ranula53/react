import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import {Link} from 'react-router-dom'

export default function navbar() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container >
        <Navbar.Brand as={Link} to ="/">ReviewEKEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            
            <NavDropdown title="Courses" id="collapsible-nav-dropdown" className='custom-dropdown'>
              <NavDropdown.Item href="#action/3.1" className='levelOne'>Level One</NavDropdown.Item >
              <NavDropdown.Item href="#action/3.2" className='levelOne'>
                Level Two
              </NavDropdown.Item >
              <NavDropdown.Item href="#action/3.3" className='levelOne'>Level Three</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='levelOne'>
                Level Four
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/about" className='fsize'>About</Nav.Link>
            <Nav.Link as= {Link} to = "/LoginForm" className='fsize'>Reviews</Nav.Link>
            <Nav.Link as= {Link} to = "/LoginForm" className='fsize'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}


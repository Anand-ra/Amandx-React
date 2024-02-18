import React from 'react'
import './navbar.css'
import clogo from '../../Assets/final.png'
import {Navbar,Nav,Container} from 'react-bootstrap'
import contactus from '../../Assets/contact.png'

const navbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className='brand'>
          <img src={clogo} alt='' className='logo' /> 
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbartoggle" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navelements">
            <Nav.Link href="#business">Business</Nav.Link>
            <Nav.Link href="#PnS">Products & Services</Nav.Link>
            <Nav.Link href="#Sus">Sustainability</Nav.Link>
            <Nav.Link href="#Com">Community</Nav.Link>
            <Nav.Link href="#AU">About Us</Nav.Link>
            <Nav.Link href="#CU"><img src={contactus} alt='' className='contactus' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar
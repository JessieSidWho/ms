import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../images/logoOnlyWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => (

  <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="" variant="" style={{ backgroundColor: 'black' }}>
    <Navbar.Brand className='p-1 pl-4' href="#home" style={{ fontFamily: 'Josefin Slab', fontSize: '25px' }}><img className='ml-4 mb-1 mr-3' src={Logo} alt='logo' style={{ height: '50px' }} /><span className=''></span></Navbar.Brand>
    <Navbar.Toggle id='toggle' className='mr-3 text-white' aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Navbar.Toggle>
    <Navbar.Collapse id="responsive-navbar-nav" style={{ marginRight: '150px' }}>
      <Nav className="ml-auto" style={{ fontFamily: 'Montserrat' }}>
        <Nav.Link id='home' className=' pl-4 pr-4 ' href="#home" style={{ fontSize: '15px', color: 'gray !important' }}><Link to="/">HOME</Link></Nav.Link>
        <Nav.Link id='about' className=' pl-4 pr-4 ' href="#about" style={{ fontSize: '15px', color: 'gray' }}><Link to="/">ABOUT</Link></Nav.Link>

        <NavDropdown className='pl-4 pr-4 text-danger' title="WORK" id="work basic-nav-dropdown" variant='danger' style={{ fontSize: '15px', color: 'gray' }}>
          <NavDropdown.Item ><Link to='/salon/'>Salon</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/bridal-hair/'>Bridal Hair</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/bridal-makeup/'>Bridal Makeup</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to='/exotic-colors/'>Exotic Colors</Link></NavDropdown.Item>
        </NavDropdown>

        <Nav.Link id='services' className=' pl-4 pr-4 ' href="#services" style={{ fontSize: '15px', color: 'gray' }}><Link to='/'>SERVICES</Link></Nav.Link>
        <Nav.Link id='contact' className=' pl-4  ' href="#contact" style={{ fontSize: '15px', color: 'gray' }}><Link to='/'>CONTACT</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

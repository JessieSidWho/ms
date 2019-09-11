// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../images/logoOnlyWhite.png';
import './header.css';

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1.45rem 1.0875rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="" variant="" style={{backgroundColor: 'black'}}>
    <Navbar.Brand className='p-1 pl-4' href="#home" style={{ fontFamily: 'Josefin Slab', fontSize: '25px' }}><img className='ml-4 mb-1 mr-3' src={Logo} alt='logo' style={{ height: '50px' }} /><span className=''></span></Navbar.Brand>
    <Navbar.Toggle className='mr-3' aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" style={{ marginRight: '150px' }}>
      <Nav className="ml-auto" style={{fontFamily: 'Montserrat'}}>
        <Nav.Link className='p-1 pl-4 pr-4 ' href="#about" style={{ fontSize: '15px', color: 'white' }}>ABOUT</Nav.Link>
        <Nav.Link className='p-1 pl-4 pr-4 ' href="#portfolio" style={{ fontSize: '15px', color: 'white' }}>WORK</Nav.Link>
        <Nav.Link className='p-1 pl-4 pr-4 ' href="#portfolio" style={{ fontSize: '15px', color: 'white' }}>SERVICES</Nav.Link>
        <Nav.Link className='p-1 pl-4  ' href="#contact" style={{ fontSize: '15px', color: 'white' }}>CONTACT</Nav.Link>
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

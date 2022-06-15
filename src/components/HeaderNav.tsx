import React from 'react'
//import { NavDropdown } from 'react-bootstrap';
import {Navbar, Nav, NavDropdown, Container, Col, Row, Button} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
import Logo from '../components/Logo'

const HeaderNav: React.FC = () => {
  //justifyContent:'center', alignItems:'center', alignContent:'center',
    return (
      <Navbar bg='white' expand='sm' fixed='top' sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            <img alt='' src='AI-ROX-Logo.svg' width='150' height='50' className='d-inline-block align-center'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='engineering'>Engineering</Nav.Link>
              <Nav.Link as={NavLink} to='manufacturing'>Manufacturing</Nav.Link>
              <Nav.Link as={NavLink} to='materials'>Materials</Nav.Link>
              <Nav.Link as={NavLink} to='equipment'>Equipment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

/*
              <NavDropdown title='More' id='basic-nav-dropdown' style={{paddingLeft:'20px'}}>
                <NavDropdown.Item as={NavLink} to='about'>About</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='warranty'>Warranty</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='Contact'>Contact</NavDropdown.Item>
              </NavDropdown>
 */

export default HeaderNav

/*

 <nav className='headerNav'>
        <Container style={{margin:'auto', whiteSpace: 'nowrap',  }}>
          <Row style={{textAlign:'center'}}>
            <Col className='navbarLogo' style={{margin:'auto'}}><Link to='/'><span style={{width:'100%', height:'100%'}}/></Link></Col>
            <Col style={{margin:'auto'}}>
              <Link to='engineering'>Engineering</Link>
              <Link to='manufacturing'>Manufacturing</Link>
              <Link to='materials'>Materials</Link>
              <Link to='equipment'>Equipment</Link>
            </Col>
            <Col style={{margin:'auto'}}><Button style={{backgroundColor:'rgb(136,170,0)', borderColor:'rgb(136,170,0)'}}>Contact</Button></Col>
          </Row>
        </Container>
  </nav>

*/
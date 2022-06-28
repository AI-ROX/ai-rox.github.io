import React from 'react'
//import { NavDropdown } from 'react-bootstrap';
import {Navbar, Nav, NavDropdown, Container, Col, Row, Button, Form, FormControl} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
import Logo from '../components/Logo'

const expand = 1

const HeaderNav: React.FC = () => {
  //justifyContent:'center', alignItems:'center', alignContent:'center',
  // <Nav.Link as={NavLink} to='supply'>Supply</Nav.Link>
    return (
      <Navbar bg='white' expand='sm' fixed='top' sticky="top" className='me-auto justify-content-center'>
        <Container>
          <Navbar.Brand as={NavLink} to='/' className='d-inline-block align-center'>
            <img alt='' src='/ai-rox-logo.png' width='150' height='auto' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end'>
              <Nav.Link as={NavLink} to='engineering'>Engineering</Nav.Link>
              <Nav.Link as={NavLink} to='manufacturing'>Manufacturing</Nav.Link>
              <Nav.Link as={NavLink} to='supply'>Supply</Nav.Link>
               <NavDropdown title="Resources" id="navbarScrollingDropdown" className='active'>
                <NavDropdown.Item as={NavLink} to='supply/materials'>Materials</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='supply/equipment'>Equipment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  More links
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={NavLink} to='supply/materials'>Materials</Nav.Link> */}
              {/* <Nav.Link as={NavLink} to='supply/equipment'>Equipment</Nav.Link> */}
            </Nav>
            &nbsp;&nbsp;
            <Form className="d-flex">
              <FormControl
                type="email"
                placeholder="mail@me"
                className="me-2"
                aria-label="Email"
              />
              <Button variant="outline-success">Contact</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

/*
           <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title='supply'> 
                <Nav.Link as={NavLink} to='supply/materials'>Materials</Nav.Link>
                <Nav.Link as={NavLink} to='supply/equipment'>Equipment</Nav.Link>
              </NavDropdown>

              <NavDropdown title='More' id='basic-nav-dropdown' style={{paddingLeft:'20px'}}>
                <NavDropdown.Item as={NavLink} to='about'>About</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='warranty'>Warranty</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='Contact'>Contact</NavDropdown.Item>
              </NavDropdown>
 */

export default HeaderNav

/*
<Navbar.Text> Signed in as: <a href="#login">Mark Otto</a> </Navbar.Text>
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
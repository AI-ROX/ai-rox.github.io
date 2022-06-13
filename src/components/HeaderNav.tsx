import React from 'react'
//import { NavDropdown } from 'react-bootstrap';
import {Container, Col, Row, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Logo from '../components/Logo'

const HeaderNav: React.FC = () => {
  //justifyContent:'center', alignItems:'center', alignContent:'center',
    return (
      <nav className='headerNav'>
        <Container style={{margin:'auto', whiteSpace: 'nowrap',  }}>
          <Row style={{textAlign:'center'}}>
            <Col className='navbarLogo' style={{margin:'auto'}}><Link to='/'><span/></Link></Col>
            <Col style={{margin:'auto'}}>
              <Link to='engineering'>Engineering</Link>
              <Link to='manufacturing'>Manufacturing</Link>
              <Link to='materials'>Materials</Link>
              <Link to='equipment'>Equipment</Link>
            </Col>
            <Col style={{margin:'auto'}}><Button>Contact</Button></Col>
          </Row>
        </Container>
      </nav>
    )
}

export default HeaderNav
/*
        <NavDropdown title="More">
          <Link to='equipment'>Equipment</Link>
          <Link to='equipment'>Equipment</Link>
        </NavDropdown>
 */
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import HeaderNav from '../components/HeaderNav'


const Header: React.FC = () => {
  const n = new Date(Date.now()).toString();
    return (
      <>
        <header>
          <section className='headerTop'>
            <Container>
              <Row style={{textAlign:'center'}}>
                <Col xs='2' sm='3' lg='4'>QQ 3027645465</Col>
                <Col><i className='fa fa-phone-volume fas'></i>Phone: (186) 6177 7407</Col>
                <Col xs='2' sm='3' lg='4'>Contact Us</Col>
              </Row>
            </Container>
          </section>
          <section className='headerNav'>
            <HeaderNav/>
          </section>
        </header>
      </>
    )
}

export default Header
/*
        <header style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          
           This Header is such stable...
        </div>

 */
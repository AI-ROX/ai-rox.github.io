import React from 'react'
import {Outlet} from 'react-router'
//import {Container, Col, Row} from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout: React.FC = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
}
/*
  <header></header>
  outlet
    <section></section>
    <section></section>
    <section></section>
  <footer></footer>
*/
export default Layout

/*
      <Container fluid className='layout'>
        <Row className='flex-nowrap'>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row className='flex-nowrap'>
          <Col>
            <Outlet />
          </Col>
        </Row>
        <Row className='flex-nowrap'>
          <Col>
          <Footer />
          </Col>
        </Row>          
      </Container>

*/
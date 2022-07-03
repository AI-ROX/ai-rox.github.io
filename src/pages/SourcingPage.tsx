import React, { Component } from "react";
import {Outlet} from 'react-router'
import {Container, Col, Row, CardGroup, Card} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';

const SupplyPage: React.FC = () => {
    return (
      <>
        <section style={{
          color:'white',
          minHeight:'400px',
          backgroundColor: 'rgba(0,0,0,.6)',
          backgroundImage:'url(/supply-top-hero-bg.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundBlendMode: 'multiply'}}>
            <Container>
              <Row style={{minHeight: '500px', textAlign: 'center', alignContent:'center', alignItems: 'center'}}>
                <Col xs='12'>
                  <h1 style={{ fontSize: '4em' }}>Supply and Materials Management</h1>
                  <br/>
                  <h2>Our expert team and strong partnerships make materials handling and logistics simple.</h2>
                </Col>
              </Row>
              <Row style={{minHeight:'100px',
                backgroundColor:'rgba(255,255,255,.3)',
                textAlign: 'center',
                paddingTop:'10px',
                paddingBottom: '10px'}}>
                <Col className='ai-rox-top-hero-nav' xs='6' sm='3'>
                  <NavLink to='bom'>
                    <h4>BOM</h4><h1><i className='bi bi-card-checklist'></i></h1>
                  </NavLink>
                </Col>
                <Col className='ai-rox-top-hero-nav' xs='6' sm='3'>
                  <NavLink to='materials'>
                    <h4>Materials</h4><h1><i className='bi bi-exclamation-diamond'></i></h1>
                  </NavLink>
                </Col>
                <Col className='ai-rox-top-hero-nav' xs='6' sm='3'>
                  <NavLink to='spareparts'>
                    <h4>Spareparts</h4><h1><i className='bi bi-nut'></i></h1>
                  </NavLink>
                </Col>
                <Col className='ai-rox-top-hero-nav' xs='6' sm='3'>
                  <NavLink to='equipment'>
                    <h4>Equipment</h4><h1><i className='bi bi-wrench'></i></h1>
                  </NavLink>
                </Col>
              </Row>
            </Container>
        </section>
        <section>
          <Outlet />
        </section>
      </>
    )
}

export default SupplyPage

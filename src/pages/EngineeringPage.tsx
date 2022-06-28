import React, { Component } from "react";
import {Outlet} from 'react-router'
import {Container, Col, Row, CardGroup, Card} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
import { propTypes } from "react-bootstrap/esm/Image";


const EngineeringPage: React.FC = () => {
    return (
      <section style={{
          color:'white',
          minHeight:'400px',
          backgroundColor: 'rgba(0,0,0,.6)',
          backgroundImage:'url(/keyboard-blackbg.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundBlendMode: 'multiply'}}>
            <Container>
              <Row style={{minHeight: '500px', textAlign: 'center', alignContent:'center', alignItems: 'center'}}>
                <Col xs='12'>
                  <h1 style={{ fontSize: '4em' }}>Engineering</h1>
                  <br/>
                  <h2>Our design and engineering team brings value to the product development, working at each stage of the design cycle from a concept on a napkin to a mature mass product.</h2>
                </Col>
              </Row>
              <Row style={{minHeight:'100px',
                backgroundColor:'rgba(255,255,255,.3)',
                textAlign: 'center',
                alignContent:'center',
                alignItems: 'center',
                paddingTop:'10px',
                paddingBottom: '10px'}}>
                <Col className='ai-rox-top-hero-nav' xs='3'><h4>Concept Design</h4><h1><i className='bi bi-pencil-square'></i></h1></Col>
                <Col className='ai-rox-top-hero-nav' xs='3'><h4>Mechanical Design</h4><h1><i className='bi bi-gear-fill'></i></h1></Col>
                <Col className='ai-rox-top-hero-nav' xs='3'><h4>Electrical Design</h4><h1><i className='bi bi-cpu'></i></h1></Col>
                <Col className='ai-rox-top-hero-nav' xs='3'><h4>Software&nbsp;/ Firmware</h4><h1><i className='bi bi-braces'></i></h1></Col>
              </Row>
            </Container>

            <Outlet />
      </section>
    )
}

export default EngineeringPage

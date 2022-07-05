import React, { Component } from "react";
import {Container, Col, Row, CardGroup, Card} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
//import Navbar from '../components/Navbar'
//import DateDisplay from '../components/DateDisplay'

const HomePage: React.FC = () => {
    return (
      <>
        <section>
          <Container fluid style={{padding:0, margin:0}} className='ai-rox-home-top-hero'>
            <Row style={{height: '400px', margin: 'auto'}}>
              <Col>
              </Col>
              <Col xs="12" sm='8' lg='7' xl='7' style={{
                color: 'white',
                backgroundColor: 'rgba(0,0,0, 0.75)',
                justifyContent: 'center',
                alignContent:'center',
                alignItems: 'center',
                verticalAlign: 'middle',
                margin: 'auto',
                paddingLeft: '30px',
                paddingRight: '30px'
              }}>
                <br/>
                <br/>
                <h1><img src='idh-fill.svg' style={{height: '43px', width: '43px', verticalAlign: '-4px'}}/>&nbsp;IN ONE HOUSE *</h1>
                <br/>
                <h2 style={{fontFamily: 'forArticle'}}>Software Development, Electronic Design and Manufacturing Solutions</h2>
                <br/>
                <p>Years of quality electronic design and manufacturing specializing in diverse high-tech industries, supporting your product life-cycle.</p>
                <br/>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container style={{paddingTop: '30px', margin: 'auto'}}>
            <Row style={{minHeight: '400px', textAlign: 'center', alignContent:'center', alignItems: 'center'}}>
              <Col xs="12" >
                <h1 className='ai-rox-green'>AI-ROX Polytronics</h1>
                <h2>* An Independent Design House (IDH) founded in 2018 by international team and based in South China, Shenzhen.</h2>
                <br/>
                <h2 className='ai-rox-green'>We Are</h2>
                <h3>Electronics experts focused on scalability, efficiency, and speed.</h3>
                <h3>Providing cutting-edge electronics and a flexible workflow.</h3>
                <br/>
                <br/>
              </Col>
            </Row>
            <Row style={{minHeight: '400px'}}>
              <Col>
                <CardGroup style={{justifyContent:'center'}}>
                  <Link to='engineering' style={{padding: '10px', textDecoration: 'none'}}>
                    <Card style={{border: '1px black', boxShadow:  '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                      <Card.Img height='272' variant='top' src='engineering.webp'/>
                      <Card.Body>
                        <Card.Title className='ai-rox-home-card-title'>ENGINEERING</Card.Title>
                        <Card.Text className='ai-rox-home-card-text'>FROM THE CONCEPT TO THE PRODUCT &gt;</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='manufacturing' style={{padding: '10px', textDecoration: 'none'}}>
                    <Card style={{border: '1px black', boxShadow: '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                      <Card.Img height='272' variant='top' src='Manufacturing-SMT-PCBA.webp'/>
                      <Card.Body>
                        <Card.Title className='ai-rox-home-card-title'>MANUFACTURING</Card.Title>
                        <Card.Text className='ai-rox-home-card-text'>PROTOTYPE TO MASS-PRODUCE &gt;</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='sourcing' style={{padding: '10px', textDecoration: 'none'}}>
                  <Card style={{border: '1px black', boxShadow: '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                    <Card.Img height='272' variant='top' src='marterials supply.webp'/>
                    <Card.Body>
                      <Card.Title className='ai-rox-home-card-title'>SUPPLY</Card.Title>
                      <Card.Text className='ai-rox-home-card-text'>CHEMICALS, COMPONENTS, TOOLS &gt;</Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </section>
        <section style={{
          color:'white',
          backgroundColor: 'rgba(0,250,0,.8)',
          backgroundImage:'url(/high-freq-bg.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundBlendMode: 'multiply'}}>
          <Container>
            <Row  style={{minHeight: '400px', textAlign: 'center', alignContent:'center', alignItems: 'center'}}>
              <Col>
                <h1 className='ai-rox-green'>Industries Served</h1>
                <h2>We had honor of working with an extremely diverse spectrum of industries.</h2>
                <br/>
                {/* <h2 className='ai-rox-green'>We Are</h2>
                <h3>Electronics experts focused on scalability, efficiency, and speed.</h3>
                <h3>Providing cutting-edge electronics and a flexible workflow.</h3> */}
              </Col>
            </Row>
            <Row>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Industrial Automation, Smart Factory</h4>
                <ul>
                  <li>Controllers</li>
                  <li>Monitoring Systems</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Scientific and Test Equipment</h4>
                <ul>
                  <li>LCR-Meters</li>
                  <li>Network Analyzers</li>
                  <li>SHF Analogue</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Unmanned Systems</h4>
                <ul>
                  <li>AI Visual Inspection</li>
                  <li>Sensors</li>
                  <li>UAV</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Energy Systems</h4>
                <ul>
                  <li>Energy meters</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>IoT</h4>
                <ul>
                  <li>Interface converters</li>
                  <li>Controllers</li>
                  <li>UI Dashboards</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Smart Home</h4>
                <ul>
                  <li>Environment quality control</li>
                  <li>Motion sensing / presence detection</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Marine</h4>
                <ul>
                  <li>Communication systems</li>
                  <li>Cabling</li>
                  <li>Technical Maintenance systems</li>
                </ul>
              </Col>
              <Col xs='12' sm='6' md='4' lg='4' xl='3'><h4>Military</h4>
                <ul>
                  <li>Information Security</li>
                  <li>Networking</li>
                  <li>Access Control</li>
                </ul>
              </Col>
            </Row>

          </Container>
        </section>
        <section>
          <Container fluid>
            <Row style={{minHeight: '400px', textAlign: 'left', alignContent:'center', alignItems: 'top', margin: '10px'}}>
              <Col xs='12' sm='12' md='4' lg='4' xl='4' className='ai-rox-home-card-set2'>
                <h3>Quality Commitment</h3>
                <p>Our mission is to continually improve our Quality Management System to provide products and services that are perfect, on time, and within budget, while improving customer satisfaction in a great working environment.</p>
              </Col>
              <Col xs='12' sm='12' md='4' lg='4' xl='4' style={{color:"white", backgroundColor:'rgba(136,170,0)'}} className='ai-rox-home-card-set2'>
                <h3>High Tech Solutions</h3>
                <p>Onshore precision, designing, and building products for cutting edge industries such as IoT, Aerospace, Unmanned Systems, Medical Devices, Military and Defense, Scientific and Research Equipment, and Energy Systems.</p>              </Col>
              <Col xs='12' sm='12' md='4' lg='4' xl='4' className='ai-rox-home-card-set2'>
                <h3>Communication</h3>
                <p>Our outstanding customer service and customer-focused methodology keep our client&apos;s goals front and center throughout the design and manufacturing processes.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
  )
}
/*

        <section style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

<div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2em' }}>Electronic Design and Manufacturing Solutions</h1>
        </div>

<i className="bi bi-house-fill" style={{fontSize: '2.5rem', color: 'rgb(136,170,0)'}}></i>

 */
export default HomePage
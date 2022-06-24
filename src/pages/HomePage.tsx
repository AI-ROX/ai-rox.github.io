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
            <Row style={{height: '400px',}}>
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
                <p>Years of quality electronic design and manufacturing of Printed Circuit Boards (PCBs) specializing in diverse high-tech industries.</p>
                <br/>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container style={{paddingTop: '30px', margin: 'auto'}}>
            <Row>
              <Col xs="12" style={{textAlign: 'center'}}>
                <h1 className='ai-rox-green'>AI-ROX Polytronics</h1>
                <p>* An Independent Design House (IDH) founded in 2018.</p>
                <br/>
                <h3 className='ai-rox-green'>We Are</h3>
                <p>Electronics experts focused on scalability, efficiency, and speed.<br/>Providing cutting-edge electronics and a flexible workflow.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardGroup style={{justifyContent:'center'}}>
                  <Link to='engineering' style={{padding: '10px', textDecoration: 'none'}}>
                    <Card style={{border: '1px black', boxShadow:  '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                      <Card.Img height='272' variant='top' src='engineering.webp'/>
                      <Card.Body>
                        <Card.Title>Engineering</Card.Title>
                        <Card.Text>from the concept to the product &gt;</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='manufacturing' style={{padding: '10px', textDecoration: 'none'}}>
                    <Card style={{border: '1px black', boxShadow: '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                      <Card.Img height='272' variant='top' src='Manufacturing-SMT-PCBA.webp'/>
                      <Card.Body>
                        <Card.Title>Manufacturing</Card.Title>
                        <Card.Text>on your behalf under supervision<br/> of our professional surveyor &gt;</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='supply' style={{padding: '10px', textDecoration: 'none'}}>
                  <Card style={{border: '1px black', boxShadow: '2px 2px 20px 2px rgba(0,0,0,.48)'}}>
                    <Card.Img height='272' variant='top' src='marterials supply.webp'/>
                    <Card.Body>
                      <Card.Title>Supply</Card.Title>
                      <Card.Text>of the quality raw materials, <br/>electronic components,<br/> new and refurbished equipment &gt;</Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </CardGroup>
              </Col>
            </Row>
          </Container>
          
        </section>
        <section>AND ANOTHER SECTION</section>
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
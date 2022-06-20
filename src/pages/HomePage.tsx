import React, { Component } from "react";
import {Container, Col, Row, CardGroup, Card} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';
//import Navbar from '../components/Navbar'
//import DateDisplay from '../components/DateDisplay'

const HomePage: React.FC = () => {
    return (
      <>
        <section style={{
          backgroundColor: 'black',
          backgroundImage:' url(/Home-page-top-row-hero.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover'
        }}>
          <Container fluid style={{padding:0, margin:0}}>
            <Row style={{height: '400px',}}>
              <Col >
              </Col>
              <Col xs="7" style={{
                color: 'white',
                backgroundColor: 'black',
                justifyContent: 'center',
                alignContent:'center',
                alignItems: 'center',
                margin: 'auto',
              }}>
                <h1><i className="bi bi-house-fill" style={{fontSize: '2.5rem', color: 'rgb(136,170,0)'}}></i>&nbsp;UNDER ONE ROOF</h1>
                <br/>
                <h2 style={{fontFamily: 'forArticle'}}>Software Development,<br/> Electronic Design and<br/> Manufacturing Solutions</h2>
                <br/>
                <p>Years of quality electronic design and manufacturing of Printed Circuit Boards (PCBs) specializing in diverse high-tech industries.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col>
                <h1>AI-ROX Polytronics</h1>
                <p>We are an Independent Design House (IDH) founded in 2018.</p>
                <p>Electronics experts focused on scalability, efficiency, and speed. Providing cutting-edge electronics and a flexible workflow.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>To make great products for our customers that create value.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
          <CardGroup style={{alignItems: 'stretch'}}>
            <Link to='engineering' style={{padding: '10px', textDecoration: 'none'}}>
              <Card>
                <Card.Img height='272' variant='top' src='engineering.webp'/>
                <Card.Body>
                  <Card.Title>Engineering</Card.Title>
                  <Card.Text>from the concept to the product &gt;</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to='engineering' style={{padding: '10px', textDecoration: 'none'}}>
              <Card>
                <Card.Img variant='top' src=''/>
                <Card.Body>
                  <Card.Title>Manufacturing</Card.Title>
                  <Card.Text>on your behalf under supervision<br/> of our professional surveyor &gt;</Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to='engineering' style={{padding: '10px', textDecoration: 'none'}}>
            <Card>
              <Card.Img variant='top' src=''/>
              <Card.Body>
                <Card.Title>Supply</Card.Title>
                <Card.Text>of the quality raw materials, <br/>electronic components,<br/> new and refurbished equipment &gt;</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </CardGroup>
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

 */
export default HomePage

import React, { Component } from "react";
import {Container, Col, Row} from 'react-bootstrap'
//import Navbar from '../components/Navbar'
//import DateDisplay from '../components/DateDisplay'

const HomePage: React.FC = () => {
    return (
      <>
        <section style={{
          backgroundColor: 'black',
          backgroundImage:' url(https://www.proactivepcb.com/wp-content/uploads/Home-page-top-row-hero.webp)',
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
                <h2>UNDER ONE ROOF</h2>
                <h1 style={{fontFamily: 'forArticle', fontSize: '3em'}}>Electronic Design and<br/> Manufacturing Solutions</h1>
                <p style={{fontSize:'18px'}}>25 years of quality electronic design and manufacturing of Printed Circuit Boards (PCBs) specializing in diverse high-tech industries.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section>HERE IS JUMBOTRON</section>
        <section  style={{backgroundColor:'gray'}}>THIS IS ANOTHER SECTION</section>
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

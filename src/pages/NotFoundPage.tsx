import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.INDEX_ROUTE)
    }

    return (
        <Container style={{textAlign: 'center'}}>
          <Row>
            <Col>
              <h1>Hello, 404 happened! =)</h1>
              <br/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 style={{ color: '#c0c0c0' }}>This maybe due to current &quot;Under construction&quot; state of the website, or you requested some wrong or missing address.</h3>
              <br/>
              <h3 style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>Any way, just follow to the: <span style={{ color: 'green' }}>Homepage</span>.</h3>
            </Col>
          </Row>
        </Container>
    )
}

export default NotFoundPage

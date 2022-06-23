import React, { Component } from "react";
import {Outlet} from 'react-router'
import {Container, Col, Row, CardGroup, Card} from 'react-bootstrap'
import {NavLink, Link} from 'react-router-dom';

const SupplyPage: React.FC = () => {
    return (
        <section>
            <h1 style={{ fontSize: '4em' }}>We Supply</h1>
            <Outlet />
        </section>
    )
}

export default SupplyPage

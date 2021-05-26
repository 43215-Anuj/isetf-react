import React from 'react'
import './Header.scss';
import iset from '../../assets/img/logos/logoiset.jpg';
import niti from '../../assets/img/logos/niti.png';
import { Row, Col, Container } from 'reactstrap';

const Header = () => {
    return (
        <div id="header">
            <Container style={{position: "relative"}}>
                <Row>
                    <Col lg='4' sm='4' xs='6'>
                        <img src={niti} alt="niti" />
                    </Col>
                    <Col lg='4' sm='4' xs='6'>
                        <img src={iset} alt="iset"/>
                    </Col>
                    <Col lg='4' sm='4' xs='12'>
                        <div className="center">
                            <h1>Society Dedicated To Science & Technology Promotion</h1> 
                            <p>Along With Focus On Modern Agriculture & Health Related Issues Basically In Rural & Sub-Urban Areas</p>
                        </div>
                    </Col>
                </Row>
                <div className="blinking registration">Registration No. 2128</div>
            </Container>
        </div>
    )
}

export default Header

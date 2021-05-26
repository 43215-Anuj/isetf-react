import React from 'react'
import './Collaborators.scss';
import elc from '../../assets/img/logos/elc.jpg';
import fgc from '../../assets/img/logos/fgc.jpg';
import fw from '../../assets/img/logos/fw.jpg';
import Footer from '../../components/Footer/Footer';
import BannerHeading from '../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';

const Collaborators = () => {
    return (
        <div>
        <BannerHeading title="COLLABORATORS" />
        <section>
            <Container>
                <Row>
                    <Col lg="4">
                        <img src={elc} alt="elc" />
                    </Col>
                    <Col lg="4">
                        <img src={fgc} alt="fgc" />
                    </Col>
                    <Col lg="4">
                        <img src={fw} alt="fw" />
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
            
        </div>
    )
}

export default Collaborators

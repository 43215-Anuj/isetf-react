import React from 'react'
import '../Team.scss';
import Footer from '../../../components/Footer/Footer';
import BannerHeading from '../../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faLinkedin, faOrcid,
         faResearchgate, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Founder = (props) => {
    return (
        <div>
            <BannerHeading title="Who Behind The Mission" />
            <section>
                <Container>
                    <Row>
                        {props.data.map((Founder, index) => {
                            return (
                                <div key={index} className={`founder-${props.class} member-card`}>
                                    <Row className="mem-card-head">
                                        <Col lg="9">
                                            <h2>{Founder.name}</h2>
                                            <h6>{Founder.desg}</h6>
                                            {(Object.keys(Founder.links).length !== 0) ?
                                                <div className="icons">
                                                <a href={Founder.links.scholar}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faGraduationCap } /> </a>
                                                <a href={Founder.links.researchGate}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faResearchgate } /> </a>
                                                <a href={Founder.links.orcid}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faOrcid } /> </a>
                                                <a href={Founder.links.facebook}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faFacebook } /> </a>
                                                <a href={Founder.links.twitter}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faTwitter } /></a>
                                                <a href={Founder.links.linkedin}
                                                target="_blank" rel="noreferrer">
                                                <FontAwesomeIcon icon={ faLinkedin } /></a>
                                            </div>
                                            : 
                                            "" }
                                        </Col>
                                        <Col lg="3">
                                            <img src={require(`../../../assets/img/members/${Founder.imgSrc}.jpg`).default} 
                                            alt={Founder.name} />
                                        </Col>
                                    </Row>
                                    <Row className="mem-card-body">
                                        <Col lg='12' sm='12'>
                                        {
                                            Founder.desc.map((para, i) => {
                                                return (
                                                <p key={i}>{para}</p>
                                                )
                                            })
                                        }
                                        </Col>
                                        
                                    </Row>
                                </div>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Founder

import React from 'react'
import '../Volunteers.scss';
import Footer from '../../../components/Footer/Footer';
import BannerHeading from '../../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';
import '../Volunteers.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Volunteers = (props) => {
    
    const { Volunteers, WebVolunteers } = props
    return (
        <div>
            <BannerHeading title="Executive Members" />
            <section>
                <Container>
                    <Row>
                        <div className="sec-heading">
                            <h2>VOLUNTEERS</h2>
                        </div>
                        {
                            Volunteers.map((vol) => {
                                return (
                                    <Col key={vol.id} lg='4'>
                                        <div className="v-wrapper">
                                            <img src={require(`../../../assets/img/volunteer/${vol.imgSrc}.jpg`).default} 
                                            alt={vol.name} />
                                            <div className="t-layer">
                                                <h4>{vol.name}</h4>
                                                <div className="description">
                                                    <h5>{vol.desg}</h5>
                                                    <p>{vol.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    )
                                })
                        }
                    </Row>
                    <Row>
                        <div className="sec-heading">
                            <h2>WEB DEVELOPERS</h2>
                        </div>
                        {
                            WebVolunteers.map((vol) => {
                                return (
                                    <Col key={vol.id} lg='4'>
                                        <div className="v-wrapper">
                                            <img src={require(`../../../assets/img/volunteer/${vol.imgSrc}.jpg`).default} 
                                            alt={vol.name} />
                                            <div className="t-layer">
                                                <h4>{vol.name}</h4>
                                                <div className="description">
                                                    <h5>{vol.desg}</h5>
                                                    <p>{vol.institute}</p>
                                                    <div className="icons">
                                                        <a href={vol.links[0]}
                                                        target="_blank" rel="noreferrer">
                                                        <FontAwesomeIcon icon={ faLinkedinIn } /></a>
                                                        <a href={vol.links[1]}
                                                        target="_blank" rel="noreferrer">
                                                        <FontAwesomeIcon icon={ faGithub } /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    )
                                })
                        }
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Volunteers

import React from 'react'
import memberData from '../../../data/member.json';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../../../components/Footer/Footer';
import BannerHeading from '../../../components/BannerHeading/Banner';
import '../Members.scss';

const Life = () => {
    return (
        <div>
            <BannerHeading title="LIFE Members" />
            <section className="l-section">
                <Container>
                    <Row>
                        {
                            memberData.LifeMember.map(member => {
                                return (
                                    <Col key={member.id} lg='4' sm='12'>
                                        <div className="m-wrapper">
                                            <h4>{member.name}</h4>
                                            <h5>{member.position}</h5>
                                            <h6>{member.aff}</h6>
                                            <p>{member.memNo}</p>
                                            <p>{member.email}</p>
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

export default Life

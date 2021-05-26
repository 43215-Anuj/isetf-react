import React from 'react'
import memberData from '../../../data/associate.json';
import '../Members.scss';
import { Container, Row, Col } from 'reactstrap';
import Footer from '../../../components/Footer/Footer';
import BannerHeading from '../../../components/BannerHeading/Banner';

const Associate = () => {
    return (
        <div>
            <BannerHeading title="Associate Members" />
            <section className="l-section">
                <Container>
                    <Row>
                        {
                            memberData.AssociateMembers.map(member => {
                                return (
                                    <Col key={member.id} lg='4' sm='12'>
                                        <div className="m-wrapper">
                                            <h4>{member.name}</h4>
                                            <h5>{member.position}</h5>
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

export default Associate

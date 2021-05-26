import React from 'react'
import '../Team.scss';
import AOS from 'aos';
import Footer from '../../../components/Footer/Footer';
import BannerHeading from '../../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';

const Executives = (props) => {
    if(typeof window !== `undefined`) {
        AOS.init({
          once: false,
          mirror: false,
        });
      }
    return (
        <div>
            <BannerHeading title="Executive Members" />
                <section>
                    <Container>
                        <Row>
                        {
                            props.data.map((exe, index) => {
                                return (
                                    <Col key={index} lg="6">
                                        <div className={`exe-card ${exe.class}`}
                                            data-aos="fade-up"
                                            data-aos-delay="0"
                                            data-aos-duration="700"
                                            data-aos-easing="ease-in-out"
                                            data-aos-mirror="false"
                                            data-aos-once="true"
                                            data-aos-anchor-placement="top-center">
                                            <h2>{exe.name}</h2>
                                            <h4>{exe.desg}</h4>
                                            <Row>
                                                <Col lg="4">
                                                    <img 
                                                        src={require(`../../../assets/img/members/${exe.imgSrc}.jpg`).default} 
                                                        alt={exe.id}/>
                                                </Col>
                                                <Col lg="8">
                                                    <p>{exe.desc}</p>
                                                </Col>
                                            </Row>
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

export default Executives

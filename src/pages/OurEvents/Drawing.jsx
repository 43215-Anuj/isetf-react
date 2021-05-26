import React from 'react'
import './Events.scss'
import Footer from '../../components/Footer/Footer';
import BannerHeading from '../../components/BannerHeading/Banner';
import { Container, Row, Col } from 'reactstrap';
import sujal from '../../assets/img/drawing/sujal.jpg';
import p_sujal from '../../assets/img/drawing/p_sujal.jpg';
import isha from '../../assets/img/drawing/isha.jpg';
import p_isha from '../../assets/img/drawing/p_isha.jpg';
import uday from '../../assets/img/drawing/uday.jpg';
import p_uday from '../../assets/img/drawing/p_uday.jpg';


const players = [
    {
        id: "1st",
        name: 'Sujal Patel',
        std: '10th Std',
        img: sujal,
        painting: p_sujal
    },
    {
        id: "2nd",
        name: 'Isha Zaheer',
        std: '10th Std',
        img: isha,
        painting: p_isha
    },
    {
        id: "3rd",
        name: 'Uday Sonkar',
        std: '12th Std',
        img: uday,
        painting: p_uday
    }
]

const Drawing = () => {
    return (
        <div>
            <BannerHeading title="Drawing Competition - COVID-19" />
            <section>
                <Container>
                    <div className="sec-heading">
                        <h2>THEME: To Spread Awareness About The Coronavirus and Its Prevention</h2>
                    </div>
                    <Row>
                    {
                        players.map((player) => {
                            return (
                                <Col key={player.id} lg='4' sm='12'>
                                    <div class="flip">
                                        <div class="front" style={{
                                            "background-image": `url(${player.img})`
                                        }}
                                        >
                                        <h2 class="text-shadow">{player.id} </h2>
                                        <h1 class="text-shadow">{player.name}</h1>
                                        <h1>{player.std}</h1>
                                        </div>
                                        <div class="back"
                                            style={{
                                                "background-image": `url(${player.painting})` 
                                            }}>
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

export default Drawing

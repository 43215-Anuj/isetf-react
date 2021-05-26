import React, { useState, useEffect } from 'react'
import './Donate.scss'
import Footer from '../../components/Footer/Footer';
import BannerHeading from '../../components/BannerHeading/Banner';
import { Jumbotron, Container, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePay } from '@fortawesome/free-brands-svg-icons'
import PhonePay from '../../assets/img/icons/phone-pe.png';

import event1 from '../../assets/img/events/event9.jpg';
import event2 from '../../assets/img/events/awarefarmers.jpg';

const Donate = () => {

    const [ amount , setAmount ] = useState(0)
    useEffect(() => {
        if(amount < 0) {
            alert ("invalid Value entered")
            setAmount(0)
        }
    }, [amount])
  
    const clearRadio = () => {
        const buttons = document.getElementsByClassName('amt-radio')
        for(let i=0; i< buttons.length; i++) {
            document.getElementsByClassName('amt-radio')[i].checked = false
        }
        setAmount(0)
    }
    
    return (
        <div id="donate">
            <BannerHeading title="Donate - Contribute to a cause" />
            <section>
                <Container>
                    <Jumbotron>
                        <h1 className="display-3">ISET Foundation - Donation</h1>
                        <p className="lead">Joining our mission is the most impactful way to give.</p>
                      
                        <p>100% of your donations is used in the transformation of the lifes of those in need.</p>
                        <Row className="events">
                            <Col lg="4">
                                <img src={event1} alt="event1"/>
                                <div className="overlay"></div>
                            </Col>
                            <Col lg="4">
                                <img src={event2} alt="event2"/>
                                <div className="overlay"></div>
                            </Col>
                        </Row>
                        
                        <hr className="my-2" />
                        <p className="lead">Pay using UPI id</p>
                        <div className="pay-options">
                            <div className="pay-option">
                            <FontAwesomeIcon icon={ faGooglePay } /><p> 7985077353@upi</p></div>
                            <div className="pay-option">
                            <img src={PhonePay} alt="phonepay"/><p> 7985077353@ybl</p></div>
                        </div>
                        <hr className="my-2" />
                        <p className="lead">OR - Donate through our payment Our Payment Gateway</p>
                        <p>Pick from mostly used options by our donars</p>
                        <div className="amount">
                            <label htmlFor="100">
                                <input 
                                    type="radio" id="hundred"
                                    className="amt-radio" 
                                    name="amount" 
                                    value="100" 
                                    onChange={(e) => setAmount(e.target.value)}/>100
                            </label>
                            <label htmlFor="200">
                                <input 
                                    type="radio" id="two" 
                                    className="amt-radio"
                                    name="amount" 
                                    value="200"
                                    onChange={(e) => setAmount(e.target.value)} />200
                            </label>
                            <label htmlFor="500">
                                <input 
                                    type="radio" id="five"
                                    className="amt-radio" 
                                    name="amount" 
                                    value="500"
                                    onChange={(e) => setAmount(e.target.value)} />500
                            </label>
                            <label htmlFor="1000">
                                <input 
                                    type="radio" id="ten"
                                    className="amt-radio" 
                                    name="amount" 
                                    value="1000" 
                                    onChange={(e) => setAmount(e.target.value)} />1000
                            </label>
                            <Button 
                                onClick={clearRadio}
                                color="warning">Clear</Button>
                        </div>
                        <div className="input-wrap">
                            <p>Or, Enter your custome amount</p>
                            <input id="amt" type="number" 
                                name="amt" placeholder="Enter Amount" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}/>
                        </div>
                        <Button id="donate">Donate</Button>
                    </Jumbotron>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Donate

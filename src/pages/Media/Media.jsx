import React, { useState } from 'react'
import './Media.scss';
import Footer from '../../components/Footer/Footer';
import BannerHeading from '../../components/BannerHeading/Banner';
import { Container, Row, Col, Modal, ModalBody, Button, ModalFooter } from 'reactstrap';
import data from '../../data/media.json';

const Media = () => {

    const [ modal, setModal ] = useState({
        state: false,
        id: 0,
        original: ""
    })

    const toggle = (item) => {
        setModal({
        state: !modal.state,
        id: item.id,
        original: item.original
    });
    console.log(modal)
    }
    return (
        <div>
            <BannerHeading title="Media Featured" />
            <section id="media-f">
                <Container>
                    <Row>
                    {
                        data.items.map(item => {
                            return(
                                <Col key={item.id} lg='3' sm='12'>
                                    <img onClick={() => toggle(item)}
                                    src={require(`../../assets/img/media/${item.local}.jpg`).default}   
                                    alt={item.id} />
                                </Col>
                            )
                        })
                    }
                    {
                    (modal.state ? 
                        <Modal isOpen={modal.state} 
                            toggle={toggle} 
                            className={modal.original}
                            size="lg">
                            <ModalBody>
                                <img
                                src={require(`../../assets/img/media/${modal.original}.jpg`).default} alt={modal.original} /> 
                            </ModalBody>
                            <ModalFooter>
                            <Button color="primary" onClick={() => setModal(false)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    :
                        null
                    )
                    }
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Media

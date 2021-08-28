import React, { useState } from "react";
import "../Team.scss";
import Footer from "../../../components/Footer/Footer";
import BannerHeading from "../../../components/BannerHeading/Banner";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Members = (props) => {
  const [modal, setModal] = useState({
    state: false,
    name: "",
    desg: "",
    desc: "",
  });

  const toggle = (advisor) =>
    setModal({
      state: !modal.state,
      name: advisor.name,
      desg: advisor.desg,
      desc: advisor.desc,
    });

  return (
    <div>
      <BannerHeading title="Advisory Members" />
      <section>
        <Container>
          <Row>
            {props.data.map((advisor, index) => {
              return (
                <Col className="advisory-card" key={index} lg="3">
                  <Card outline color="primary">
                    <CardBody onClick={() => toggle(advisor)}>
                      <img
                        src={
                          require(`../../../assets/img/members/${advisor.imgSrc}.jpg`)
                            .default
                        }
                        alt={advisor.name}
                      />
                      <CardHeader tag="h5">{advisor.name}</CardHeader>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
            <Modal
              isOpen={modal.state}
              toggle={toggle}
              className={modal.name}
              size="lg"
            >
              <ModalHeader>
                {modal.name} - {modal.desg}
              </ModalHeader>
              <ModalBody>{modal.desc}</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => setModal(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Members;

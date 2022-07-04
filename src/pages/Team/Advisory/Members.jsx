import React from "react";
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
} from "reactstrap";
import { Link } from "react-router-dom";

const Members = (props) => {
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
                    <CardBody>
                      <img
                        src={
                          require(`../../../assets/img/members/${advisor.imgSrc}.jpg`)
                            .default
                        }
                        alt={advisor.name}
                      />
                      <Link
                        to={`/team/advisory/${advisor.id}`}
                      >
                        <CardHeader tag="h5">{advisor.name}</CardHeader>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Members;

import React from "react";
import BannerHeading from "../../components/BannerHeading/Banner";
import { Row, Col, Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import Sandeep from "../../assets/img/members/founder.jpg";
const Services = () => {
  return (
    <div className="about-page">
      <BannerHeading title="SERVICES" />
      <section>
        <div className="sec-heading">
          <h2>ISET FOUNDATION SCITECH</h2>
          <h4>Academic, Scientific and Medical Writing Services</h4>
          <p>
            We are pleased to inform you that we have a wide range of writing
            services to assist in both academic and research and research
            purpose.
          </p>
          <Container>
            <Row className="ab-cards" style={{ display: "flex" }}>
              <Col lg="6" sm="12">
                <div
                  className="service-container ab-card"
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexGrow: 1,
                  }}
                >
                  <h4>Academic Services</h4>
                  <ul className="service-points">
                    <li>
                      Organisation of Courses/ workshop/ internship/ CMES/
                      Conference.
                    </li>
                    <li>
                      Customized content writing services in terms of videos,
                      ppts, documents.
                    </li>
                    <li>
                      Contents for the entire syllabus/ courses/ competitive
                      exams in terms of MCQs, notes, video lectures are also
                      available.
                    </li>
                    <li>
                      Career guidance and counselling services are available to
                      any stream of life sciences/ biotechnology/ medical/
                      paramedical.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="6" sm="12">
                <div
                  className="service-container ab-card"
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexGrow: 1,
                  }}
                >
                  <h4>Research Services</h4>
                  <ul className="service-points">
                    <li>Assistance in M.Sc/MD/Ph.D. thesis.</li>
                    <li>
                      Assistance in manuscript writing services (Research/
                      Review/ Meta-analysis/ case-report/ short communication/
                      hypothesis) in medical/ paramedical/ dental ayurveda/
                      homeopathy/ basic science and all bio related fields.
                    </li>
                    <li>
                      Assistance in writing grants proposal (Intramural/
                      Extramural projects) in the fields of life science/
                      biotechnology and medical/ paramedical.
                    </li>
                    <li>
                      Assistance in writing book chapters or authored/
                      editorials books.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <hr />
            <h5 style={{ color: "green" }}>
              We have a team of highly qualified(Ph.D.) and excellent
              professional scientific writing with vast range of writing skills.
            </h5>
            <h5>
              We are committed to providing our best services to you at suitable
              prices and would be felt glad to assist you
            </h5>
            <div
              style={{
                marginTop: "2rem",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "100%",
                  textAlign: "right",
                }}
              >
                DR. Sandeep Singh
                <br />
                Director, ISET Foundation
                <br />
                Mobile: +91 7985077353
                <br />
                email: isetfoundation@gmail.com
              </p>
              <img
                src={Sandeep}
                alt="sandeep singh"
                style={{
                  border: "solid #f76f04 3px",
                  width: 120,
                  margin: "0 10px 0 10px",
                  height: 120,
                  objectFit: "cover",
                  borderRadius: 200,
                }}
              />
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;

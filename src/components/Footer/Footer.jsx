import React from "react";
import banner from "../../assets/img/banners/isetf.jpg";
import "./Footer.scss";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import PhonelinkRingRoundedIcon from "@material-ui/icons/PhonelinkRingRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faTwitter,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import QR from "../../assets/img/icons/QR.jpeg";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3">
            <img className="banner" src={banner} alt="img" />
            <div className="contant-d">
              <span>
                <LocationOnRoundedIcon />
              </span>
              <span className="f-text">
                594 Kha/123, Krishna Bhawan, Sahinoor Colony, Nilmatha,
                Lucknow-226002
              </span>
            </div>
            <div className="contant-d">
              <span>
                <MailRoundedIcon />
              </span>
              <span className="f-text">isetfoundation@gmail.com</span>
            </div>
            <div className="contant-d">
              <span>
                <PhonelinkRingRoundedIcon />
              </span>
              <span className="f-text">+91 7985077353</span>
            </div>
          </Col>
          <Col lg="3">
            <div className="center-fc" style={{ textAlign: "center" }}>
              <h4>LINKS</h4>
              <Link to="/home">HOME</Link>
              <Link to="/home">ABOUT</Link>
              <Link to="/home">EVENTS</Link>
              <Link to="/home">TEAM</Link>
              <Link to="/home">MEMBERS</Link>
              <Link to="/home">VOLUNTEERS</Link>
            </div>
          </Col>
          <Col lg="3" className="payment">
            <img src={QR} alt="qr code" />
            <Button color="success" tag={Link} to="/donate">
              DONATE FOR A CAUSE
            </Button>
          </Col>
          <Col lg="3" className="social-m">
            <div className="icons">
              <a
                href="https://www.facebook.com/isetfoundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/isetfoundation/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQ9HaUYx9jotvJ_Ig5zM5Ow"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://twitter.com/hashtag/isetfoundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.researchgate.net/project/Indian-Scientific-Education-and-Technology-Foundation-ISET-Foundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faResearchgate} />
              </a>
            </div>
            <h4>SOCIAL MEDIA</h4>
          </Col>
        </Row>
      </Container>
      <Row className="contribution">
        <Col className="tnc" lg="4" sm='12'>
            <Link to='/privacy_policy'>Privacy Policy</Link>
            <Link to='/refund_policy'>Refund Policy</Link>
            <Link to='/tnc'>Terms & Cond.</Link>
        </Col>
        <Col lg="8" sm='12'>    
          © 2021 All Right Reserved, ISET Foundation. Coded by
          <a href="https://anujkumar.gtsb.io/" target="_blank" rel="noreferrer">
            {" "}
            Anuj Kumar.
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

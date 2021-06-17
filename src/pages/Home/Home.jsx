import React, { useState } from "react";
import "./Home.scss";
import AOS from "aos";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";

import FormComponent from "../../components/Contact/Form";
import Footer from "../../components/Footer/Footer";

import c_one from "../../assets/img/events/banner2.jpg";
import c_two from "../../assets/img/events/hm_banner1.jpg";
import c_three from "../../assets/img/events/hm_banner2.jpg";
import c_four from "../../assets/img/events/hm_banner3.jpg";

import MediaFeature from "../../components/MediaCarousel/Carousel";
import mf1 from "../../assets/img/media/pa1.jpg";
import mf2 from "../../assets/img/media/pb1.jpg";
import mf3 from "../../assets/img/media/pc1.jpg";
import mf4 from "../../assets/img/media/pd1.jpg";
import mf5 from "../../assets/img/media/pe1.jpg";
import mf6 from "../../assets/img/media/pf1.jpg";
import mf7 from "../../assets/img/media/pg1.jpg";
import mf8 from "../../assets/img/media/ph1.jpg";
import mf9 from "../../assets/img/media/pi1.jpg";
import mf10 from "../../assets/img/media/pj1.jpg";

import event1 from "../../assets/img/events/event8.jpg";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import EcoIcon from "@material-ui/icons/Eco";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import LooksOneIcon from "@material-ui/icons/LooksOne";

const items = [
  {
    id: 1,
    src: c_one,
    caption: "WELCOME TO ISET FOUNDATION",
    text: "INDIAN SCIENTIFIC EDUCATION & TECHNOLOGY FOUNDATION",
  },
  {
    id: 2,
    src: c_two,
    caption: "WELCOME TO ISET FOUNDATION",
    text: "INDIAN SCIENTIFIC EDUCATION & TECHNOLOGY FOUNDATION",
  },
  {
    id: 3,
    src: c_three,
    caption: "WELCOME TO ISET FOUNDATION",
    text: "INDIAN SCIENTIFIC EDUCATION & TECHNOLOGY FOUNDATION",
  },
  {
    id: 4,
    src: c_four,
    caption: "WELCOME TO ISET FOUNDATION",
    text: "INDIAN SCIENTIFIC EDUCATION & TECHNOLOGY FOUNDATION",
  },
];

const mediaItems = [
  { imgSrc: mf1, id: 1 },
  { imgSrc: mf2, id: 2 },
  { imgSrc: mf3, id: 3 },
  { imgSrc: mf4, id: 4 },
  { imgSrc: mf5, id: 5 },
  { imgSrc: mf6, id: 6 },
  { imgSrc: mf7, id: 7 },
  { imgSrc: mf8, id: 8 },
  { imgSrc: mf9, id: 9 },
  { imgSrc: mf10, id: 10 },
];

const Home = () => {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.id} />
        <CarouselCaption
          className="text-danger"
          captionText={item.text}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div id="home">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={5000}
        ride={"carousel"}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <section id="media-featured">
        <Container>
          <div className="sec-heading">
            <h2>MEDIA FEATURED</h2>
          </div>
          <MediaFeature items={mediaItems} />
        </Container>
      </section>
      <section id="about">
        <Container>
          <Row>
            <Col lg="7">
              <div
                className="about-text"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h2>ISET Foundation</h2>
                <p>
                  ISET Foundation has been established mainly for the promotion
                  of science education focus in the suburban and rural area of
                  India. In India, nearly 70 percent of the country’s population
                  lives in rural areas where, for the first time since
                  independence, the overall growth rate of population has
                  sharply declined, according to the latest census. Of the 121
                  crore Indian, 83.3 crores live in rural areas while 37.7
                  crores stay in urban areas, said the census of India’s 2011
                  Provisional Population Totals of Rural-Urban Distribution in
                  the country, released by Union Home Secretary. In India, the
                  science education is having little strength towards
                  development and innovation than other developing and developed
                  countries mainly in rural.
                </p>
              </div>
            </Col>
            <Col lg="5">
              <img
                src={event1}
                alt="lab"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="mission">
        <div className="sec-heading">
          <h2>ISET FOUNDATION'S MISSION</h2>
        </div>
        <Container>
          <Row>
            <Col lg="6">
              <div
                className="mission-la"
                data-aos="slide-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <WifiTetheringIcon />
                <h4>Awareness</h4>
                <p>
                  ISET Foundation promotes scientific culture among students and
                  make them aware about its importance in the human welfare and
                  development.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div
                className="mission-ra"
                data-aos="slide-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <LocalFloristIcon />
                <h4>Raising Of Self-Esteem</h4>
                <p>
                  ISET Foundation ensures that all children not only study the
                  theory but also strictly do the practical work in the school.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="glance">
        <Container>
          <div className="sec-heading">
            <h2>ABOUT ISET FOUNDATION AT A GLANCE</h2>
            <p>
              ISET Foundation works nationally to promote Science Education in
              India. The foundation is keenly interested to develop the
              scientific temperament in each student of India and to develop the
              scientific-technological atmosphere in the community.
            </p>
          </div>

          <Row>
            <Col lg="4" sm="12">
              <div
                className="glance-card"
                data-aos="slide-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div className="title">
                  <EcoIcon />
                  <h4>Health & Environmental Programmes</h4>
                </div>

                <p>
                  ISET Fundation used to organize the health camps time to time
                  in order to ensure that everyone get access to medical
                  facilities.We alsporganizes several environment progames for
                  the betterment of society.
                </p>
              </div>
            </Col>
            <Col lg="4" sm="12">
              <div
                className="glance-card"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div className="title">
                  <WifiTetheringIcon />
                  <h4>Awareness Programmes</h4>
                </div>

                <p>
                  We spread awareness among students towards the importance of
                  science and technology in the era of today through the
                  scientific sessions organized at their schools. The key role
                  of such programmes is to encourage more and more students
                  towards science and technology.
                </p>
              </div>
            </Col>
            <Col lg="4" sm="12">
              <div
                className="glance-card glance-right"
                data-aos="slide-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <div className="title">
                  <CastForEducationIcon />
                  <h4>Education Resources</h4>
                </div>

                <p>
                  ISET Foundation produces environmental education resources lik
                  publications, CD-ROMs and posters for primary and secondary
                  school teachers...
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="stats">
        <Container>
          <Row>
            <Col lg="3">
              <div
                className="stat"
                data-aos="zoom-in-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <PeopleAltIcon />
                <p className="stat-number">1000+</p>
                <p className="stat-desc">Peoples</p>
              </div>
            </Col>
            <Col lg="3">
              <div
                className="stat"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <LoyaltyIcon />
                <p className="stat-number">35</p>
                <p className="stat-desc">Programme</p>
              </div>
            </Col>
            <Col lg="3">
              <div
                className="stat"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <LocalLibraryIcon />
                <p className="stat-number">700+</p>
                <p className="stat-desc">Certified Teachers</p>
              </div>
            </Col>
            <Col lg="3">
              <div
                className="stat"
                data-aos="zoom-in-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <LooksOneIcon />
                <p className="stat-number">1200+</p>
                <p className="stat-desc">Award Winning</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="4" sm="12">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/isetfoundation"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <blockquote
                  cite="https://www.facebook.com/isetfoundation"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/isetfoundation">Facebook</a>
                </blockquote>
              </div>
            </Col>
            <Col lg="8" sm="12">
              <div
                data-aos="fade-ight"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <FormComponent />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: "var(--theme-yellow)" }}>
        <div className="sec-heading">
          <h2>BECOME A MEMBER</h2>
          <Container>
            <p>
              ISET Foundation’s Members are self-motivated people of all ages
              and from different walks of life who give of their time and
              resources to make positive difference in the science education of
              students and society. Come, be an ISET Foundation member.
            </p>
            <Link
              to={{
                pathname: "/member_form"
              }}
            >
              <Button
                color="info"
                style={{ fontFamily: "Montserrat-SemiBold", color: "#fff" }}
              >
                JOIN AS MEMBER
              </Button>
            </Link>
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

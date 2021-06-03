import React from "react";
import "./About.scss";
import AOS from "aos";

import BannerHeading from "../../components/BannerHeading/Banner";
import { Row, Col, Container } from "reactstrap";
import Footer from "../../components/Footer/Footer";

const About = () => {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }
  return (
    <div className="about-page">
      <BannerHeading title="ABOUT" />
      <section>
        <div className="sec-heading">
          <h2>OVERVIEW</h2>
        </div>
        <Container>
          <p>
            Indian Scientific Education & Technology Foundation is a non-profit
            and non-governmental organization that has been established mainly
            for the promotion of science in India at the suburban and rural
            level. The ISET foundation is specially made for the promotion of
            science education and endorsement of the scientific manner
            adaptability in a routine lifestyle of the society. Science
            education plays a major role in living a comfortable life. India has
            made much progress in the education sector since Independence
            including progress in science education. Science and Technology are
            the main driving forces of the nation and fundamental to the
            progress and growth. So it is necessary that advantages of science
            and technology should reach all sections of the society through the
            ISET foundation. In India, nearly 70% of the country’s population
            lives in rural areas mean out of 121 crores population, 83.3 crores
            live in rural areas while 37.7 crores stay in urban areas, said the
            census of India’s 2011 released by Union Home Secretary. As per UGC,
            approximately 20 million students get enrollment in various courses
            yearly, among 19% students only enroll in science courses and 16%
            students enrollmentled in engineering and technology. According to
            the Gross enrollment ratio (GER) 2018, the enrollment percentage of
            Science courses were 16.04% and Engineering and technology was
            15.57% in undergraduate and in postgraduate, enrollment percentage
            of science was 13%, Medical Science was 3.33%, Information
            Technology & computer was 6.22% and Engineering & technology was
            6.69%. India is constantly progressive to attain the scientific
            advancement in many areas and the ISET foundation stands for
            cooperating to achieve the scientific advancement. This organization
            is not only focused on science education but also interested in to
            develop advanced modern technology based healthcare, scientific
            technology based agriculture and scientific lifestyle based society.
          </p>
          <Row className="ab-cards">
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>
                  Our Moto: Science of today is the technology of tomorrow
                </h3>
                <h4>Promotion Of Science And Technology</h4>
                <p>
                  The main Moto behind the establishment of the ISET Foundation
                  is to promote Science Education in India. The foundation is
                  keenly interested to develop the scientific temperament in
                  each student of India and to develop the
                  scientific-technological atmosphere in the community.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>Our Vision</h3>
                <h4>
                  ISET FOUNDATION’s vision is to be provide the platform to the
                  students and the society for adapting scientific lifestyle.
                </h4>
                <ul>
                  <li>
                    <p>To develop excellent scientific education</p>
                  </li>
                  <li>
                    <p>
                      To develop advanced modern technology based healthcare
                    </p>
                  </li>
                  <li>
                    <p>To develop scientific technology based agriculture</p>
                  </li>
                  <li>
                    <p>To develop scientific lifestyle based society</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>Our Mission</h3>
                <p>
                  ISET Foundation mission is to improve the quality of science
                  education in India and ensure that all children not only study
                  the theory but also strictly do the practical work in the
                  school. It would be accomplished by working in collaboration
                  with the government, local communities, parents, teachers,
                  volunteers, and civil society members. Organization’s aim is
                  to supplement in science education rather than replace
                  governmental efforts. It sure, that we will achieve the
                  advancement in Indian science through facilitates the
                  excellent scientific education, awareness programmes, promote
                  the innovation/creative ideas, endorse entrepreneurship, to
                  develop competitiveness and stewardship toward science. Our
                  vision, mission and objectives could be achieved only through
                  definite strong believes
                </p>
                <ul>
                  <li>
                    <p>In Transparency</p>
                  </li>
                  <li>
                    <p>In Charity with Dignity</p>
                  </li>
                  <li>
                    <p>In Professionalism and Dedication</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="obj">
        <div className="sec-heading">
          <h2>OBJECTIVES</h2>
        </div>
        <Container>
          <Row className="ab-cards">
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <ul>
                  <li>
                    <p>
                      To promote science education in the school level students.
                    </p>
                  </li>
                  <li>
                    <p>
                      To develop strong interest in students toward the science.
                    </p>
                  </li>
                  <li>
                    <p>
                      To create training/workshop centre, education centre and
                      health centre for adequate development in society.
                    </p>
                  </li>
                  <li>
                    <p>
                      To improve the critical thinking in the students toward
                      the science.
                    </p>
                  </li>
                  <li>
                    <p>
                      To work on various projects to provide medical care and
                      healthy atmosphere in society.
                    </p>
                  </li>
                  <li>
                    <p>
                      To provide a better communication channel between
                      scientists and students to interact with rural life and
                      its realities thus enabling them to learn from the
                      accumulated knowledge of the villagers’ traditional
                      methods, so that the scientific basis of such knowledge of
                      the ages is understood and its technological improvements
                      attempted.
                    </p>
                  </li>
                  <li>
                    <p>
                      To implement and co-ordinate various projects aimed
                      towards promotion and development of science and
                      technology.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <ul>
                  <li>
                    <p>
                      To organize awareness programmes for hygiene and
                      sanitation and balance diet with nutritious values.
                    </p>
                  </li>
                  <li>
                    <p>
                      To implement projects to edit, translate, publish
                      scientific books, scientific articles, pamphlets,
                      periodicals, science posters, educative and informative
                      material that may be considered desirable for promotion of
                      science.
                    </p>
                  </li>
                  <li>
                    <p>
                      To implement various projects for sustainable development
                      of agriculture sector in scientific way of proceed.
                    </p>
                  </li>
                  <li>
                    <p>
                      To implement various projects for promotion of adoption of
                      scientific techniques in Eco-friendly sustainable
                      developments of semi-urban and rural areas.
                    </p>
                  </li>
                  <li>
                    <p>
                      To organize lectures, seminars, conferences, workshops,
                      study groups, debates, symposia and other programmes at
                      international, national, regional and state level for to
                      develop innovative ideas towards science education and
                      technologies.
                    </p>
                  </li>
                  <li>
                    <p>
                      To provide scholarship/Financial help to poor rural
                      students for their academic enhancements in science.
                    </p>
                  </li>
                  <li>
                    <p>
                      To aware the role of science in our life to the society
                      through the achievements, developments and advantages.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="200"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <ul>
                  <li>
                    <p>
                      To establish and run various welfare centers to promote
                      science & technology for holistic human development.
                    </p>
                  </li>
                  <li>
                    <p>
                      To establish, manage and run robust science centers in
                      semi-urban areas to present applied science education.
                    </p>
                  </li>
                  <li>
                    <p>
                      To enhance the interaction between scientists (from India
                      as well abroad) and students to create strong bond for
                      science community.
                    </p>
                  </li>
                  <li>
                    <p>
                      To provide a forum for rural innovators to interact with
                      science and technological experts, so that they imbibe the
                      scientific method in their work, when appropriate, and
                      encourage the multiplication of innovative endeavors.
                    </p>
                  </li>
                  <li>
                    <p>
                      To conduct short term training programmes for rural people
                      to implement science technologies and methods in routine
                      life.
                    </p>
                  </li>
                  <li>
                    <p>
                      To accept donations, grants, presents, gifts and other
                      offerings in the shape of movable or immovable properties
                      and the same shall be utilized for the promotion of
                      science education and technology.
                    </p>
                  </li>
                  <li>
                    <p>
                      To implement projects for start and run Eminent Science
                      Institutes for scientific studies at semi-urban areas.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default About;

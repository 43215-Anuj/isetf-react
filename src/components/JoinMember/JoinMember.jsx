import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import emailjs from "emailjs-com";
import classnames from "classnames";
import "./JoinMember.scss";
import Footer from "../Footer/Footer";
import JotformEmbed from "react-jotform-embed";

const JoinMember = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [userDetails, setUserDetails] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const volHandleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById("vol_email").value;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(String(email).toLowerCase());

    const phoneRe = /^[0-9]{6,15}$/;
    const phoneNumber = document.getElementById("vol_phone").value;
    const isPhoneValid = phoneRe.test(String(phoneNumber).toLowerCase());

    if (isEmailValid && isPhoneValid) {
      emailjs
        .sendForm(
          "service_9qoxos9",
          "template_07be4a9",
          e.target,
          "user_VhAeeFq5TIaJ9rwoKLDvE"
        )
        .then(
          (result) => {
            alert("Congratulations! Form is Successfully submitted");
            document.getElementById("vol_phone").value = "";
            document.getElementById("vol_email").value = "";
            document.getElementById("vol_name").value = "";
            document.getElementById("rad1").checked = false;
            document.getElementById("rad2").checked = false;
            document.getElementById("rad3").checked = false;
            document.getElementById("rad4").checked = false;
            document.getElementById("rad5").checked = false;
            document.getElementById("comments").value = "";
            document.getElementById("vol_address").value = "";
            document.getElementById("declaration").checked = false;
          },
          (error) => {
            alert("! Error: ", error);
          }
        );
    } else {
      alert(
        "Please check, you might have missed or entered some wrong details."
      );
    }
  };

  const handleChange = (e, field) => {
    setUserDetails({
      ...userDetails,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <Nav tabs className="nav-options">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Join As Volunteer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Join As Member
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row>
              <h2>Volunteership Form</h2>
              <Col sm="12" lg="12">
                <form onSubmit={(e) => volHandleSubmit(e)}>
                  <input
                    type="text"
                    id="vol_name"
                    name="vol_name"
                    placeholder="Enter Name"
                    required
                  />
                  <input
                    type="email"
                    id="vol_email"
                    name="vol_email"
                    placeholder="Enter email"
                    required
                  />
                  <input
                    type="text"
                    id="vol_phone"
                    name="vol_phone"
                    placeholder="Enter phone"
                    required
                  />
                  <input
                    type="text"
                    id="vol_address"
                    name="vol_address"
                    placeholder="Enter address"
                    required
                  />
                  <div className="input-wrapper">
                    <p>How did you hear about this volunteer opportunity? </p>
                    <label htmlFor="friend">
                      <input
                        type="radio"
                        id="rad1"
                        name="source"
                        value="friend"
                        onChange={(e) => handleChange(e, "hear")}
                      />
                      A Friend or colleague
                    </label>
                    <br />
                    <label htmlFor="social_network">
                      <input
                        type="radio"
                        id="rad2"
                        name="source"
                        value="social_network"
                        onChange={(e) => handleChange(e, "hear")}
                      />
                      Social Network
                    </label>
                    <br />
                    <label htmlFor="google">
                      <input
                        type="radio"
                        id="rad3"
                        name="source"
                        value="google"
                        onChange={(e) => handleChange(e, "hear")}
                      />
                      Google
                    </label>
                    <br />
                    <label htmlFor="blog_post">
                      <input
                        type="radio"
                        id="rad4"
                        name="source"
                        value="blog_post"
                        onChange={(e) => handleChange(e, "hear")}
                      />
                      Blog post
                    </label>
                    <br />
                    <label htmlFor="news_articles">
                      <input
                        type="radio"
                        id="rad5"
                        name="source"
                        value="news_articles"
                        onChange={(e) => handleChange(e, "hear")}
                      />
                      News Articles
                    </label>
                  </div>
                  <textarea
                    id="comments"
                    name="vol_comments"
                    rows="5"
                    cols="50"
                    placeholder="Comments"
                  ></textarea>
                  <div className="input-wrapper">
                    <label htmlFor="volunteer">
                      <input
                        id="declaration"
                        className="checkbox"
                        name="volunteer"
                        type="checkbox"
                        value="I hereby declare that the information furnished above is
                        true, complete and correct to the best of my knowledge
                        and belief."
                        required
                      />
                      <span>
                        I hereby declare that the information furnished above is
                        true, complete and correct to the best of my knowledge
                        and belief.
                      </span>
                    </label>
                  </div>

                  <Button type="submit" color="success">
                    JOIN AS VOLUNTEER
                  </Button>
                </form>
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2">
          <Container>
            <Row>
              <Col sm="12" lg="12">
                <JotformEmbed src="https://form.jotform.com/211565626531454" scrolling={true} />
                <div className="note input-wrapper">
                  <p>
                    <strong>Detail of payment of membership fee:</strong>
                  </p>
                  <hr />
                  <p>
                    Membership fees can be paid either by net banking transfer
                    (through NEFT) into society’s current account or through
                    BHIM APP. The detail is given below-
                    <br />
                    <span>
                      <li style={{ background: "yellow", color: "black" }}>
                        You can pay using the below provided QR Code
                      </li>{" "}
                    </span>
                    <br />
                    <br />
                    <strong>Account Name: </strong>Indian Scientific Education
                    and Technology
                    <br />
                    <strong>Foundation A/c No.: </strong>415501010125187
                    <br />
                    <strong>IFSC code: </strong>UBIN0541559
                    <br />
                    <strong>MICR code: </strong> 226026012
                    <br />
                    <strong> Bank Name: </strong> Union Bank of India, Branch:
                    Amethi, Lucknow.
                    <br />
                    <strong>BHIM APP: </strong> 7985077353@upi
                    <br />
                    <span style={{ background: "yellow", color: "black" }}>
                      Your Membership will be completed once you pay the
                      membership fee.
                    </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </TabPane>
      </TabContent>
      <Footer />
    </div>
  );
};

export default JoinMember;

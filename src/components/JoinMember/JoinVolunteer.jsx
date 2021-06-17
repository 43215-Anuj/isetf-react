import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Row, Col, Container, Button } from "reactstrap";
import './JoinMember.scss';

const JoinVolunteer = () => {
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
    <Container style={{padding: "4rem 0"}}>
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
                  I hereby declare that the information furnished above is true,
                  complete and correct to the best of my knowledge and belief.
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
  );
};

export default JoinVolunteer;

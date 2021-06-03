import React, { useState, useEffect } from "react";
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

const JoinMember = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const [userDetails, setUserDetails] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    address: "",
    pin: "",
    comment: "",
    country: "",
    how: "",
    why_isetf: "",
    plan: "",
    member: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        let select = document.getElementById("country");
        let options = `<option value="select" placeholder="Select country...">Select country...</option>`;
        response.map((res) => {
          options += `<option ${
            userDetails.country === res.name ? "selected" : ""
          } 
            value="${res.name}">${res.name}</option>`;
          return true;
        });

        if (select) {
          select.innerHTML = options;
        }
      })
      .catch((error) => alert(error));
  }, [userDetails.country]);

  const clear = () => {
    setUserDetails({
      from_name: "",
      from_email: "",
      phone: "",
      address: "",
      pin: "",
      comment: "",
      country: "",
      how: "",
      why_isetf: "",
      plan: "",
      member: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9qoxos9",
        "template_wwz006s",
        e.target,
        "user_VhAeeFq5TIaJ9rwoKLDvE"
      )
      .then(
        (result) => {
          console.log(result);
          setIsSuccess(true);
        },
        (error) => {
          setIsFail(true);
        }
      );
    clear();
  };

  const handleChange = (e, field) => {
    setUserDetails({
      ...userDetails,
      [field]: e.target.value,
    });
  };

  // const onDismiss = () => {
  //   setIsSuccess(false);
  //   setIsFail(false);
  // };

  console.log(isSuccess, isFail)
  console.log(userDetails.member);
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
            Join As Member
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Join As Volunteer
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Container>
            <Row>
              <h2>Membership Form</h2>
              <Col sm="12" lg="12">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    name="from_name"
                    value={userDetails.from_name}
                    onChange={(e) => handleChange(e, "from_name")}
                    required
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    name="from_email"
                    value={userDetails.from_email}
                    onChange={(e) => handleChange(e, "from_email")}
                    required
                  />
                  <input
                    id="phone"
                    type="phone"
                    placeholder="Enter phone number"
                    name="number"
                    value={userDetails.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    required
                  />
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter full-address"
                    value={userDetails.address}
                    onChange={(e) => handleChange(e, "address")}
                    required
                  />
                  <select name="country" id="country" required>
                    <option value="">Select Country...</option>
                  </select>

                  <div className="hear-about-us">
                    <p>Where did you hear about us?</p>
                    <label htmlFor="friend">
                      <input
                        type="radio"
                        id="friend"
                        name="about_us"
                        value="friend"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      A Friend or colleague
                    </label>
                    <br />
                    <label htmlFor="social_network">
                      <input
                        type="radio"
                        id="social_network"
                        name="about_us"
                        value="social_network"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Social Networks
                    </label>
                    <br />
                    <label htmlFor="google">
                      <input
                        type="radio"
                        id="google"
                        name="about_us"
                        value="google"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Google
                    </label>
                    <br />
                    <label htmlFor="blog_post">
                      <input
                        type="radio"
                        id="blog_post"
                        name="about_us"
                        value="blog_post"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Blog Post
                    </label>
                    <br />
                    <label htmlFor="news_articles">
                      <input
                        type="radio"
                        id="news_articles"
                        name="about_us"
                        value="news_articles"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      News Articles
                    </label>
                  </div>
                  <label
                    htmlFor="image"
                    style={{
                      width: 600,
                      alignSelf: "center",
                      margin: "0.5rem 0 0 0",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat-SemiBold",
                      }}
                    >
                      Upload Image
                      <input
                        id="image"
                        type="file"
                        name="my_file"
                        placeholder="Upload Image"
                      />
                    </p>
                  </label>

                  <label
                    htmlFor="image"
                    style={{
                      width: 600,
                      alignSelf: "center",
                      margin: "0.5rem 0 0 0",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "left",
                        fontFamily: "Montserrat-SemiBold",
                      }}
                    >
                      Upload Resume/Biography
                      <input
                        id="image"
                        type="file"
                        name="my_file"
                        placeholder="Upload Image"
                      />
                    </p>
                  </label>

                  <div className="hear-about-us">
                    <p>MemberShip Type</p>
                    <label htmlFor="life_member">
                      <input
                        type="radio"
                        id="life_member"
                        name="about_us"
                        value="life_member"
                        onChange={(e) => handleChange(e, "member")}
                      />
                      Life Member: <strong>Rs.1000/-</strong> (For 10 Years,
                      renew after every five year)
                    </label>
                    <br />
                    <label htmlFor="associate_member">
                      <input
                        type="radio"
                        id="associate_member"
                        name="about_us"
                        value="associate_member"
                        onChange={(e) => handleChange(e, "member")}
                      />
                      Associate Member: <strong>Rs.500/-</strong> Per three
                      years
                    </label>
                    <br />
                    <label htmlFor="student_member">
                      <input
                        type="radio"
                        id="student_member"
                        name="about_us"
                        value="student_member"
                        onChange={(e) => handleChange(e, "member")}
                      />
                      Student Member: <strong>Rs.200/-</strong> Per annum
                    </label>
                    <br />
                    <label htmlFor="foreign_member">
                      <input
                        type="radio"
                        id="foreign_member"
                        name="about_us"
                        value="foreign_member"
                        onChange={(e) => handleChange(e, "member")}
                      />
                      Foreign (Life): US <strong>$150</strong> Payable in 1/2
                      installments within a year
                    </label>
                    <br />
                    <label htmlFor="f_ordinary">
                      <input
                        type="radio"
                        id="f_ordinary"
                        name="about_us"
                        value="f_ordinary"
                        onChange={(e) => handleChange(e, "member")}
                      />
                      Foreign (Ordinary) : US <strong>$20</strong> Per annum
                    </label>
                  </div>
                  <div className="note">
                    <p>
                      <strong>Payment details of Membership: </strong>
                      Pay either by net banking (through NEFT) into society’s
                      current account or through BHIM APP. The detail is given
                      as follows -
                    </p>
                    <hr />
                    <ul>
                      <li>
                        <strong>Account Name: </strong> Indian Scientific
                        Education
                      </li>
                      <li>
                        <strong>Technology Foundation A/c No.: </strong>{" "}
                        415501010125187
                      </li>
                      <li>
                        <strong>IFSC code: </strong> UBIN0541559
                      </li>
                      <li>
                        <strong>MICR code: </strong> 226026012
                      </li>
                      <li>
                        <strong>Bank Name: </strong> Union Bank of India,
                        Branch: Amethi, Lucknow
                      </li>
                      <li>
                        <strong>BHIM APP: </strong> 7985077353@upi
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexBasis: "space-between",
                      alignSelf: "center",
                      width: 600,
                      justifyContent: "space-between",
                    }}
                  >
                    <Button color="success" type="submit">
                      BECOME OUR MEMBER
                    </Button>
                    <Button color="danger" type="button" onClick={clear}>
                      CLEAR
                    </Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </TabPane>
        <TabPane tabId="2">
          <Container>
            <h2>Volunteership Form</h2>
            <Row>
              <Col sm="12" lg="12">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    name="from_name"
                    value={userDetails.from_name}
                    onChange={(e) => handleChange(e, "from_name")}
                    required
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    name="from_email"
                    value={userDetails.from_email}
                    onChange={(e) => handleChange(e, "from_email")}
                    required
                  />
                  <input
                    id="phone"
                    type="phone"
                    placeholder="Enter phone number"
                    name="number"
                    value={userDetails.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    required
                  />
                  <input
                    id="address"
                    type="text"
                    placeholder="Enter address"
                    value={userDetails.address}
                    onChange={(e) => handleChange(e, "address")}
                    required
                  />
                  <div className="hear-about-us">
                    <p>Where did you hear about us?</p>
                    <label htmlFor="friend">
                      <input
                        type="radio"
                        id="friend"
                        name="about_us"
                        value="friend"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      A Friend or colleague
                    </label>
                    <br />
                    <label htmlFor="social_network">
                      <input
                        type="radio"
                        id="social_network"
                        name="about_us"
                        value="social_network"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Social Networks
                    </label>
                    <br />
                    <label htmlFor="google">
                      <input
                        type="radio"
                        id="google"
                        name="about_us"
                        value="google"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Google
                    </label>
                    <br />
                    <label htmlFor="blog_post">
                      <input
                        type="radio"
                        id="blog_post"
                        name="about_us"
                        value="blog_post"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      Blog Post
                    </label>
                    <br />
                    <label htmlFor="news_articles">
                      <input
                        type="radio"
                        id="news_articles"
                        name="about_us"
                        value="news_articles"
                        onChange={(e) => handleChange(e, "how")}
                      />
                      News Articles
                    </label>
                  </div>

                  <textarea
                    id="comments"
                    rows="5"
                    cols="50"
                    placeholder="Any comments"
                    name="comments"
                    value={userDetails.message}
                    onChange={(e) => handleChange(e, "comments")}
                    required
                  />
                  <div className="note">
                    <p>
                      <strong>Note: </strong>
                      Please check your details carefully. Once submitted, you
                      will not be able to edit your details. Thank You
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexBasis: "space-between",
                      alignSelf: "center",
                      width: 600,
                      justifyContent: "space-between",
                    }}
                  >
                    <Button color="success" type="submit">
                      BECOME OUR MEMBER
                    </Button>
                    <Button color="danger" type="button" onClick={clear}>
                      CLEAR
                    </Button>
                  </div>
                </form>
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

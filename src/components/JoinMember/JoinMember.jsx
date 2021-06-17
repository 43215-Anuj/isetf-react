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

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, [props.activeTab]);

  let ifr = document.getElementById("JotFormIFrame-211565626531454");
  let iframe = undefined;
  if (ifr) {
    let src = ifr.src;
    let iframeParams = [];
    if (window.location.href && window.location.href.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(
        window.location.href
          .substr(window.location.href.indexOf("?") + 1)
          .split("&")
      );
    }
    if (src && src.indexOf("?") > -1) {
      iframeParams = iframeParams.concat(
        src.substr(src.indexOf("?") + 1).split("&")
      );
      src = src.substr(0, src.indexOf("?"));
    }
    iframeParams.push("isIframeEmbed=1");
    ifr.src = src + "?" + iframeParams.join("&");
  }

  window.isPermitted = (originUrl, whitelisted_domains) => {
    let url = document.createElement("a");
    url.href = originUrl;
    let hostname = url.hostname;
    let result = false;
    if (typeof hostname !== "undefined") {
      whitelisted_domains.forEach(function (element) {
        if (
          hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
          hostname === element
        ) {
          result = true;
        }
      });
      return result;
    }
  };

  const handleIFrameMessage = (e) => {
    if (typeof e.data === "object") {
      return;
    }
    let args = e.data.split(":");
    if (args.length > 2) {
      iframe = document.getElementById(
        "JotFormIFrame-" + args[args.length - 1]
      );
    } else {
      iframe = document.getElementById("JotFormIFrame");
    }
    if (!iframe) {
      return;
    }
    switch (args[0]) {
      case "scrollIntoView":
        iframe.scrollIntoView();
        break;
      case "setHeight":
        iframe.style.height = args[1] + "px";
        break;
      case "collapseErrorPage":
        if (iframe.clientHeight > window.innerHeight) {
          iframe.style.height = window.innerHeight + "px";
        }
        break;
      case "reloadPage":
        window.location.reload();
        break;
      case "loadScript":
        if (!window.isPermitted(e.origin, ["jotform.com", "jotform.pro"])) {
          break;
        }
        let src = args[1];
        if (args.length > 3) {
          src = args[1] + ":" + args[2];
        }
        let script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        document.body.appendChild(script);
        break;
      case "exitFullscreen":
        if (window.document.exitFullscreen) window.document.exitFullscreen();
        else if (window.document.mozCancelFullScreen)
          window.document.mozCancelFullScreen();
        else if (window.document.mozCancelFullscreen)
          window.document.mozCancelFullScreen();
        else if (window.document.webkitExitFullscreen)
          window.document.webkitExitFullscreen();
        else if (window.document.msExitFullscreen)
          window.document.msExitFullscreen();
        break;
        default: break;
    }

    let isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
    if (
      isJotForm &&
      "contentWindow" in iframe &&
      "postMessage" in iframe.contentWindow
    ) {
      let urls = {
        docurl: encodeURIComponent(document.URL),
        referrer: encodeURIComponent(document.referrer),
      };
      iframe.contentWindow.postMessage(
        JSON.stringify({ type: "urls", value: urls }),
        "*"
      );
    }
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
                <iframe
                  id="JotFormIFrame-211565626531454"
                  title="ISETF Membership form"
                  onLoad={window.parent.scrollTo(0,0)}
                  allowtransparency="true"
                  allowFullScreen={true}
                  allow="geolocation; microphone; camera"
                  src="https://form.jotform.com/211565626531454"
                  frameBorder="0"
                  style={{
                    minWidth: "100%",
                    height:"539px",
                    border:"none",
                  }}
                ></iframe>

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
                    and Technology Foundation
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
                      Your Membership will be completed and you will get
                      membership certificate with number once you pay the
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

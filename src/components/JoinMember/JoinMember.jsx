import React, { useEffect, useCallback, useRef } from "react";
import {
  Row,
  Col,
  Container,
} from "reactstrap";

import "./JoinMember.scss";
import Footer from "../Footer/Footer";

const JoinMember = () => {
  let iframe = useRef(null);

  const handleIFrameMessage = useCallback((e) => {
    if (typeof e.data === "object") {
      return;
    }
    let args = e.data.split(":");
    if (args.length > 2) {
      iframe.current = document.getElementById(
        "JotFormIFrame-" + args[args.length - 1]
      );
    } else {
      iframe.current = document.getElementById("JotFormIFrame");
    }
    if (!iframe.current) {
      return;
    }
    switch (args[0]) {
      case "scrollIntoView":
        iframe.current.scrollIntoView();
        break;
      case "setHeight":
        iframe.current.style.height = args[1] + "px";
        break;
      case "collapseErrorPage":
        if (iframe.current.clientHeight > window.innerHeight) {
          iframe.current.style.height = window.innerHeight + "px";
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
      default:
        break;
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
  }, []);

  useEffect(() => {

    let ifr = document.getElementById("JotFormIFrame-211565626531454");
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

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }

    return () => {
      window.removeEventListener("message", handleIFrameMessage);
    };
  }, [handleIFrameMessage]);

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

  return (
    <div>
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <iframe
              id="JotFormIFrame-211565626531454"
              title="ISETF Membership form"
              allowtransparency="true"
              allowFullScreen={true}
              allow="geolocation; microphone; camera"
              src="https://form.jotform.com/211565626531454"
              frameBorder="0"
              style={{
                minWidth: "100%",
                height: "539px",
                border: "none",
              }}
            ></iframe>

            <div className="note input-wrapper">
              <p>
                <strong>Detail of payment of membership fee:</strong>
              </p>
              <hr />
              <p>
                Membership fees can be paid either by net banking transfer
                (through NEFT) into society’s current account or through BHIM
                APP. The detail is given below-
                <br />
                <span>
                  <li style={{ background: "yellow", color: "black" }}>
                    You can pay using the below provided QR Code
                  </li>{" "}
                </span>
                <br />
                <br />
                <strong>Account Name: </strong>Indian Scientific Education and
                Technology Foundation
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
                  Your Membership will be completed and you will get membership
                  certificate with number once you pay the membership fee.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default JoinMember;

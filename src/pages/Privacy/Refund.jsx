import React from "react";
import { Container, Row } from "reactstrap";
import Footer from "../../components/Footer/Footer";
const Refund = () => {
  return (
    <div id="instructions">
      <Container className="container_section" style={{ padding: "4rem 0" }}>
        <Row>
          <h4>Refund and Cancellation Policy</h4>
          Welcome to this web-site of ISET Foundation. We make public our policy
          on refund and cancellation of donations received for the social cause
          on payment gateway as under:-
          <p>
            1. No refund/cancellation for the donated amount by any donor will
            not be entertained, the online donations through the online payment
            gateway.
          </p>
          <p>2. No cash or refund of money will be allowed.</p>
          <p>
            3. If any in-kind support received by the donor from any where the
            material will be reached to the poorest of the poorer communities.
          </p>
          <p>
            4. Once received the donation for a cause will not be refunded to
            the donor. No cancellation to be made. The donation will be used for
            the community development, children education or women’s
            empowerment.
          </p>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Refund;

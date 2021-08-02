import React from "react";
import { Container, Row } from "reactstrap";
import Footer from "../../components/Footer/Footer";
const TnC = () => {
  return (
    <div>
      <div id="instructions">
        <Container className="container_section" style={{ padding: "4rem 0" }}>
          <Row>
            <h4>Terms and Conditions</h4>
            <p>
              Use of this site is provided by ISET Foundation subject to the
              following Terms and Conditions:
            </p>
            <p>
              ISET Foundation reserves the rights to change these terms and
              conditions at any time by posting changes online. Your continued
              use of this site after changes are posted constitutes your
              acceptance of this agreement as modified. You agree to use this
              site only for lawful purposes, and in a manner which does not
              infringe the rights, or restrict, or inhibit the use and enjoyment
              of the site by any third party.
            </p>
            <p>
              This site and the information, names, images, pictures, logos
              regarding or relating to ISET Foundation are provided “as is”
              without any representation or endorsement made and without
              warranty of any kind whether express or implied. In no event will
              ISET Foundation be liable for any damages including, without
              limitation, indirect or consequential damages, or any damages
              whatsoever arising from the use or in connection with such use or
              loss of use of the site, whether in contract or in negligence.
              ISET Foundation does not warrant that the functions contained in
              the material contained in this site will be uninterrupted or error
              free, that defects will be corrected, or that this site or the
              server that makes it available are free of viruses or bugs or
              represents the full functionality, accuracy and reliability of the
              materials.
            </p>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default TnC;

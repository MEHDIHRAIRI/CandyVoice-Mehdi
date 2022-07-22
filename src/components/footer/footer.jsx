/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>Villeurbane, Lyon</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              +33 07 77 30 76 35 <br />
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              <a href="#" className="link">
                mehdihrairi6@gmail.com
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <a href="#" className="link">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-github"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by Mehdi Hrairi.
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <a href="#" className="p-10 p-l-0">
                    Terms of Use
                  </a>
                  <a href="#" className="p-10">
                    Legal Disclaimer
                  </a>
                  <a href="#" className="p-10">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;

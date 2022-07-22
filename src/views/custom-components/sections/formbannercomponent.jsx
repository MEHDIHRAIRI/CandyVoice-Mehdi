import React from "react";
import { Col, Container, Form, Row } from "reactstrap";

const FormBannerComponent = () => {
  return (
    <div id="banner1">
      <Container>
        <Row>
          <Col lg="5" md="7">
            <Form className="m-t-40">
              <input
                type="text"
                name="email"
                placeholder="Enter Email Address"
                className="font-16"
              />
              <input
                type="submit"
                value="Get Started"
                className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormBannerComponent;

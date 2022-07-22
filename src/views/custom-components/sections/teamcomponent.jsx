/* eslint-disable */
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const TeamComponent = () => {
    return (
        <div >
            <div className="team2">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Team</h2>
                          </Col>
                    </Row>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} >
                        <Col lg="3" md="6" >
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-github"></i></a></li>
                                            <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Mehdi Hrairi</h5>
                                        <h6 className="subtitle">Full-Stack Developer</h6>
                                        <p>You can relay on my knowledge of fullStack development.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;

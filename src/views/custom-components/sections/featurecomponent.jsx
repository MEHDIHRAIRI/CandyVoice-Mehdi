/* eslint-disable */
import React, { useState } from "react";

import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img5 from "../../../assets/images/features/feature30/img2.jpg";

const FeatureComponent = ({ voicesFlag, voices }) => {
  const [open, setOpen] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [modal, setModal] = useState(false);
  const [voice, setVoice] = useState({});
  const toggle = () => {
    setModal(!modal);
  };
  const toggleDetails = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <img
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    <h3 className="title">Candy Voice</h3>
                    <p>
                      Candy voice provides you with fun experience changing your
                      voice.
                    </p>
                    <a
                      className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
                      href="https://candyvoice.com/"
                    >
                      <span>
                        Explore More <i className="ti-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">List of your digital voices</h2>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            {voices.map((voice) => (
              <Col lg="6">
                <Card>
                  <Row>
                    <Col md="8">
                      <CardBody className="d-flex no-block">
                        <div>
                          <h5 className="font-medium">Name: {voice.name}</h5>
                          <h5 className="font-medium">
                            Language: {voice.language}
                          </h5>
                        </div>
                      </CardBody>
                    </Col>

                    <Col md="4" className="text-center">
                      <button
                        style={{ border: "none" }}
                        className="text-white linking bg-success-gradiant"
                        onClick={() => {
                          setVoice(voice);
                          setOpen(true);
                        }}
                      >
                        Details <i className="ti-arrow-right"></i>
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="12" className="text-center">
                    <button
                      onClick={toggle.bind(null)}
                      style={{ cursor: "pointer", border: "none" }}
                      className="text-white linking bg-success-gradiant"
                    >
                      New Voice<i className="ti-plus"></i>
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        size="lg"
        isOpen={open}
        toggle={toggleDetails.bind(null)}
        onClose={() => {
          setOpen(false);
          setUpdate(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalHeader toggle={toggleDetails.bind(null)}>
          <h3>Voice Details</h3>
        </ModalHeader>
        <div
          style={{
            width: "100%",
            heigth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            <h2>Voice Name: </h2>
            {update ? (
              <TextField
                id="outlined-basic"
                label={voice.name}
                variant="outlined"
              />
            ) : (
              <h3>{voice.name}</h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            <h2>Language: </h2>
            <h3>{voice.language}</h3>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
            }}
          >
            <h2>Recorded sentences: </h2>
            {voice.nbFragments > 0 && voice.nbFragments < 20 ? (
              <div
                style={{
                  backgroundColor: "red",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{voice.nbFragments}</h3>
              </div>
            ) : voice.nbFragments > 20 && voice.nbFragments < 50 ? (
              <div
                style={{
                  backgroundColor: "orange",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{voice.nbFragments}</h3>
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "lightgreen",
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{voice.nbFragments}</h3>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
              marginBottom: "10px",
            }}
          >
            <h2>Type: </h2>
            <h3>{voice.type}</h3>
          </div>
          {update ? (
            <ModalFooter>
              <Button
                style={{ backgroundColor: "red", border: "none" }}
                onClick={() => setUpdate(!update)}
              >
                <SaveIcon /> Cancel
              </Button>
              <Button
                style={{ backgroundColor: "green", border: "none" }}
                onClick={() => setUpdate(!update)}
              >
                <CancelIcon /> Save
              </Button>
            </ModalFooter>
          ) : (
            <ModalFooter>
              <Button
                style={{ backgroundColor: "primary", border: "none" }}
                onClick={() => setUpdate(!update)}
              >
                <EditIcon /> Update
              </Button>
            </ModalFooter>
          )}
        </div>
      </Modal>
      <Modal size="lg" isOpen={modal} toggle={toggle.bind(null)}>
        <ModalHeader toggle={toggle.bind(null)}>
          <h3>New Voice</h3>
        </ModalHeader>

        <TextField
          id="standard-basic"
          label="Voice Name"
          variant="outlined"
          style={{
            marginBottom: "3%",
            marginTop: "3%",
            marginRight: "10%",
            marginLeft: "10%",
          }}
        />
        <FormControl
          sx={{
            m: 1,
            marginBottom: "30px",
            marginRight: "10%",
            marginLeft: "10%",
          }}
          style={{
            marginBottom: "30px",
            marginTop: "20px",
            marginRight: "10%",
            marginLeft: "10%",
          }}
        >
          <InputLabel>Language</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={0}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>French</MenuItem>
            <MenuItem value={20}>English</MenuItem>
            <MenuItem value={30}>German</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            marginBottom: "30px",
            marginRight: "10%",
            marginLeft: "10%",
          }}
          style={{
            marginBottom: "30px",
            marginTop: "20px",
            marginRight: "10%",
            marginLeft: "10%",
          }}
        >
          <InputLabel>Varient</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={0}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Fr_fr</MenuItem>
            <MenuItem value={20}>Eng_uk</MenuItem>
            <MenuItem value={20}>Eng_us</MenuItem>
            <MenuItem value={30}>German</MenuItem>
          </Select>
        </FormControl>
        <ModalFooter>
          <Button
            style={{
              backgroundColor: "lightgreen",
              width: "30%",
              border: "none",
            }}
            onClick={toggle.bind(null)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default FeatureComponent;

/* eslint-disable */
import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  Button,
  NavLink,
  NavbarToggler,
  Collapse,
  Modal,
  ModalHeader,
  ModalFooter,
} from "reactstrap";

import TextField from "@mui/material/TextField";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import logo2 from "../../../assets/images/logos/white-logo.png";
import {
  updateUserDetails,
  getCurrentUserDetails,
} from "../../../services/user.js";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const HeaderComponent = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [newEmail, setNewEmail] = React.useState({});
  const [userData, setUserData] = React.useState({
    id: user.id,
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const updateUser = async () => {
    if (newEmail.email) {
      const updatedUser = await updateUserDetails(userData.id, newEmail);
      setNewEmail({});
      user.email = updatedUser.email;
    } else {
      await updateUserDetails(userData.id, userData);
      const data = await getCurrentUserDetails();
      setUserData({});
      user.firstname = data.firstname;
      user.lastname = data.lastname;
    }
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "ConfirmPassword does not match";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "ConfirmPassword does not match";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };
  const toggleDetails = () => {
    setOpen(!open);
  };
  return (
    <div id="section">
      <div className="header1 po-relative bg-dark">
        <Container>
          <Navbar className="navbar-expand-lg h2-nav">
            <NavbarBrand href="#">
              <img src={logo2} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggleDetails}>
              <span className="ti-menu text-white"></span>
            </NavbarToggler>
            <Collapse isOpen={open} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Work</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Services <i className="fa fa-angle-down m-l-5"></i>
                  </DropdownToggle>
                  <DropdownMenu className="b-none animated fadeInUp">
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem>Separated link</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>One more separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#">Freebies</NavLink>
                </NavItem>
                <NavItem>
                  <button
                    onClick={toggleDetails.bind(null)}
                    className="btn btn-outline-info"
                    href="#"
                  >
                    Hire Me
                  </button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      <Modal size="lg" isOpen={open} toggle={toggleDetails.bind(null)}>
        <ModalHeader toggle={toggleDetails.bind(null)}>
          <h3>Profile</h3>
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
              marginTop: "5%",
              marginBottom: "3%",
            }}
          >
            <h3>Email: </h3>
            {update ? (
              <TextField
                id="outlined-basic"
                label={user.email}
                variant="outlined"
                onChange={(e) => setNewEmail({ email: e.target.value })}
              />
            ) : (
              <h3>{user.email}</h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
              marginBottom: "3%",
            }}
          >
            <h3>Gender: </h3>
            {update || !user.gender ? (
              <Select
                style={{ width: "38%" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.gender}
                label={user.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
              >
                <MenuItem value="undefined">None</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h3>{user.gender}</h3>
                <h3>
                  {user.gender === "male" ? (
                    <MaleIcon color="primary" />
                  ) : user.gender === "female" ? (
                    <FemaleIcon color="secondary" />
                  ) : (
                    ""
                  )}
                </h3>
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
              marginBottom: "3%",
            }}
          >
            <h3>Firstname: </h3>
            {update ? (
              <TextField
                id="outlined-basic"
                label={user.firstname}
                variant="outlined"
                onChange={(e) =>
                  setUserData({ ...userData, firstname: e.target.value })
                }
              />
            ) : (
              <h3>{user.firstname}</h3>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: "10%",
              marginLeft: "10%",
              marginBottom: "3%",
            }}
          >
            <h3>Lastname: </h3>
            {update ? (
              <TextField
                id="outlined-basic"
                label={user.lastname}
                variant="outlined"
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
            ) : (
              <h3>{user.lastname}</h3>
            )}
          </div>
          {update ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: "10%",
                  marginLeft: "10%",
                  marginBottom: "3%",
                }}
              >
                <h3>Password: </h3>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    variant="outlined"
                    onBlur={validateInput}
                    type="password"
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                      onInputChange(e);
                    }}
                  />
                  {error.password && (
                    <p style={{ color: "red" }}>{error.password}</p>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: "10%",
                  marginLeft: "10%",
                  marginBottom: "4%",
                }}
              >
                <h3>Confirm password: </h3>
                <div style={{ display: "block" }}>
                  <TextField
                    id="outlined-basic"
                    label="Confirm password"
                    variant="outlined"
                    name="confirmPassword"
                    type="password"
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        confirmPassword: e.target.value,
                      });
                      onInputChange(e);
                    }}
                  />
                  {error.confirmPassword && (
                    <p style={{ color: "red" }}>{error.confirmPassword}</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <ModalFooter>
          {update ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  backgroundColor: "green",
                  marginRight: "10px",
                  width: "100%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={async () => {
                  setUpdate(!update);
                  setOpen(false);
                  await updateUser();
                }}
              >
                <SaveIcon style={{ marginRight: "10px" }} /> <h3>Save</h3>
              </Button>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "red",
                  width: "100%",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setUpdate(!update)}
              >
                <CancelIcon style={{ marginRight: "10px" }} /> <h3>Cancel</h3>
              </Button>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Button
                variant="contained"
                style={{
                  marginTop: "50px",
                  width: "80%",
                  textAlign: "center",
                  height: "60px",
                }}
                onClick={() => setUpdate(!update)}
              >
                <EditIcon /> update
              </Button>
            </div>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default HeaderComponent;

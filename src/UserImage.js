import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Jumbotron, Button } from "reactstrap";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Image from "react-graceful-image";

const imageStyle = {
  height: "30vh",
  borderRadius: "50%"
};

class UserImage extends React.Component {
  state = {
    userImage: []
  };

  componentDidMount() {
    // performing a GET request
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${this.props.childID}`
      )
      .then(result => {
        console.log(result);
        // If successful, we do stuffs with 'result'

        this.setState({
          userImage: result.data
        });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  // componentDidUpdate() {
  //
  // }

  render() {
    return (
      <div className="col d-flex align-items-center">
        <div className="row">
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {this.state.userImage.map(user => (
              <img
                className="mx-3 mb-3"
                style={{ height: "30vh" }}
                src={user}
                alt=""
              />
            ))}

            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserImage;

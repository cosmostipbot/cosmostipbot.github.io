import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class TopNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">@cosmostipbot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/howto">How-To</Nav.Link>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="/terms">Terms</NavDropdown.Item>
                <NavDropdown.Item href="/privacy">Privacy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Collapse className="justify-content-end xs-hidden">
              <Navbar.Text>
                <a
                  href="https://twitter.com/Cosmostipbot?ref_src=cosmostipbot.com"
                  target="new"
                  className="twitter-follow-button emoji"
                  data-show-count="false"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#00aced" }}
                  />
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>{" "}
                <a
                  href="https://tttttt.me/cosmostipbot"
                  target="new"
                  className="emoji twitter-follow-button"
                >
                  <FontAwesomeIcon
                    icon={faTelegram}
                    style={{ color: "steelblue" }}
                  />
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/pro-regular-svg-icons";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <i>@Cosmostipbot is a Cosmos Alliance collaborative effort.</i>
              <br />
              <br />
              <div style={{ textAlign: "left" }}>
                The first{" "}
                <a href="https://cosmos.network" target="new">
                  Cosmos
                </a>{" "}
                (ATOM) social tip application allows for seemless sending and
                recieving of cryptocurrency to anyone via direct mentions and in
                public group chats. <br />
                <br />
                The application was co-created by Hubertus von Heyden (
                <a href="https://twitter.com/Immasssi" target="new">
                  @Immasssi
                </a>
                ) and Tobias Schwarz (
                <a href="https://twitter.com/toschdev" target="new">
                  @toschdev
                </a>
                ) .<br />
                <br />
                <FontAwesomeIcon icon={faQuoteRight} size="lg" />{" "}
                <i>
                  Our mission is to provide an intuitive, convenient and fast
                  way to reward content and creators on social media
                  platforms.We strive to improve app capabilities and features
                  and expand to many social platforms, reaching both the
                  blockchain target audience as well as a broad userbase from
                  outside the market.
                </i>{" "}
                <FontAwesomeIcon icon={faQuoteRight} size="lg" />
                <br />
                <br />
                We always welcome community feedback and engagement so feel free
                to reach out to us directly either on Telegram or Twitter.
                <br />
                <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>FAQ</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ textAlign: "left" }}>
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                What is @cosmostipbot?
                <br /> <br />
                A tip application development for social media.
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Who runs it?
                <br /> <br />
                The Cosmos Alliance (Initiative for the growth of the
                decentralized Cosmos ecosystem)
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Is it safe to use?
                <br /> <br />
                Yes tip bot addresses are safe to use. Each user controls his
                own tip account.
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                What happens if i change my username?
                <br /> <br />
                Nothing. Each tip account is assigned to users Twitter and
                Telegram ID.
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                What happens if Twitter or Telegram suspends my account
                permanently?
                <br /> <br />
                Thats a problem. If Twitter or Telegram removes/revokes your
                Twitter ID your tip funds are at risk.
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Do i need a tip bot account to recieve tips? <br /> <br />
                No. Recipients do not need an account in order to receive tips.{" "}
                <br />
                Nevertheless in order to withdraw or tip they will need to
                !register. <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                How much do withdraws cost?
                <br /> <br />
                Nothing. Withdraws are free and the tx fee is covered by the
                Cosmos Alliance Initiative. <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Which platforms are supported? <br /> <br />
                Currently the @cosmostipbot is live on Twitter (Beta) and
                Telegram (Alpha) <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Is there a tip limit? <br /> <br />
                There is no tip limit on Telegram. <br />
                There is a tip limit on Twitter of 12 tip tx every 3 hours
                (Imposed by Twitter rate limits) <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                Is it safe to store large amounts of ATOM in a tip account?{" "}
                <br /> <br />
                It is safe. Yet we do not recommend long term storage. Always
                withdraw tips to a private hardware wallet like{" "}
                <a href="https://www.ledger.com" target="new">
                  www.ledger.com
                </a>
                <br /> <br />
                <span role="img" className="emoji" aria-label="faq-bullet">
                  ⚫
                </span>{" "}
                How can i support your development efforts?
                <br /> <br />
                We gladly accept donations{" "}
                <span role="img" className="emoji" aria-label="heart">
                  💜
                </span>
                <br /> <br />
                cosmos1ktfq8n50hu78uvfylwxveag3zpwtnmcs40q4p4
                <br /> <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

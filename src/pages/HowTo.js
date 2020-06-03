import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

export default class HowTo extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="twitter">
            <Row className="justify-content-md-center">
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="twitter">
                      <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="telegram">
                      <FontAwesomeIcon icon={faTelegram} size="lg" /> Telegram
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="twitter">
                    <Row>
                      <Col>
                        <h1>How-To</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <br />
                        <i>
                          Sending & receiving Cosmos (ATOM) cryptocurrency on
                          Twitter is convenient, transparent, intuitive and
                          fast.
                          <br />
                          Tip-bot transactions are confirmed by 125
                          decentralized nodes (Validators) on the Cosmos
                          Blockchain (Hub).
                        </i>
                        <div style={{ textAlign: "left" }}>
                          <br />
                          <br />
                          How to navigate the @Cosmostipbot on Twitter or
                          Telegram?
                          <br />
                          <br />
                          1. Visit{" "}
                          <a
                            href="https://twitter.com/cosmostipbot"
                            target="new"
                          >
                            https://twitter.com/cosmostipbot
                          </a>{" "}
                          or{" "}
                          <a href="t.me/cosmostipbot" target="new">
                            t.me/cosmostipbot
                          </a>
                          <br />
                          <br />
                          2. Send a direct message (DM/PM) to the tip-bot and
                          type !help in the comment field.
                          <br />
                          <br />
                          3. Next type !register to claim a unique Atom address
                          for your Twitter or Telegram ID.
                          <br />
                          <br />
                          Congratulations 👨🏼‍🚀 the bot has assigned a unique Atom
                          account to your personal Twitter ID.
                          <br />
                          <br />
                          A user may track & check his/her account on any public
                          blockchain explorer: www.mintscan.io
                          <br />
                          <br />
                          In order to deposit/withdraw Atom cryptocurrency, one
                          may use the bot command !deposit or !withdraw <br />
                          to either load-up a tip account or transfer Atom to a
                          more secure hardware wallet like{" "}
                          <a href="https://www.ledger.com/" target="new">
                            https://www.ledger.com/
                          </a>
                          <br />
                          <br />
                          How to send tips?
                          <br />
                          <br />
                          Always use the STF (Standard tip format) on any public
                          post or group chat.
                          <br />
                          <br />
                          For Twitter: @Cosmostipbot !tip 1 @username
                          <br />
                          <br />
                          For Telegram: @Cosmostipbot /tip 1 @username
                          <br />
                          <br />
                          <br />
                          <br />
                          How is the @cosmostipbot maintained?
                          <br />
                          <br />
                          The tip-bot is maintained by community nodes & a
                          backup infrastructure to provide emergency
                          availability. <br />
                          Maintenance and development is sustained by a flat 5%
                          pow-fee* on any outgoing tip made by users of the
                          @cosmostipbot. <br />
                          Withdraws from tip-bot addresses do not pay the 5%
                          fee. A small amount of atom is used to cover the gas
                          on each tip-bot transaction.
                          <br />
                          <br />
                          Tx-fee (example):
                          <br />
                          ✅Joe wants to tip 0.01 Atom to Anna via a public
                          mention on any public tweet. He uses the standard tip
                          format below:
                          <br />
                          @Cosmostipbot !tip 0.01 @Anna
                          <br />
                          <br />
                          ✅Joe must !register with the @Cosmostipbot
                          <br />
                          <br />
                          ✅The bot automatically charges a 5% pow-fee which
                          includes the gas cost*
                          <br />
                          <br />
                          ✅Anna recieves 0.0095 Atom at her Twitter ID.
                          <br />
                          <br />
                          Anna gets notified and may proceed to withdraw the tip
                          by sending a DM to @Cosmostipbot <br />
                          with the command !register or !help followed up by
                          !withdraw or continue tipping.
                          <br />
                          “Tip recipients do not need a tip-bot account to be
                          able to receive tips. <br />
                          Registration with the bot is only required to deposit
                          Atom or withdraw tips”
                          <br />
                          (*5% tip-bot proof of work fee explained. <br />
                          It consist of 1. Cost to cover the gas to perform the
                          Atom tip transaction + 2. Cost to maintain optimal
                          tip-bot up time, efficiency & development
                          improvements).
                          <br />
                          A confirmation tweet will always appear below the
                          mentioned tip tweet and indicate the tx hash including
                          amount sent, a timestamp and link to a reliable Cosmos
                          blockchain explorer.
                          <br />
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="telegram">
                    <Row>
                      <Col>
                        <h1>How-To</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <br />
                        <i>
                          Tips are sent through public messages and groups.
                          These are processed in real time.
                        </i>
                        <br />
                        <br />
                        <div style={{ textAlign: "left" }}>More Info</div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

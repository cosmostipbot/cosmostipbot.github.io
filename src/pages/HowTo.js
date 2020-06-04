import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLightbulbOn as farLightbulbOn } from "@fortawesome/pro-regular-svg-icons";

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
                          <h3>
                            How to navigate the @Cosmostipbot on Twitter or
                            Telegram?
                          </h3>
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
                          type <code>!help</code> in the comment field.
                          <br />
                          <br />
                          3. Next type <code>!register</code> to claim a unique
                          Atom address for your Twitter or Telegram ID.
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="party">
                            🎉
                          </span>{" "}
                          Congratulations{" "}
                          <span
                            role="img"
                            className="emoji"
                            aria-label="astronaut"
                          >
                            👨🏼‍🚀
                          </span>{" "}
                          the bot has assigned a unique Atom account to your
                          personal Twitter ID.
                          <br />
                          <br />A user may track & check his/her account on any
                          public blockchain explorer:{" "}
                          <a href="https://www.mintscan.io" target="new">
                            mintscan.io
                          </a>
                          <br />
                          <br />
                          In order to deposit/withdraw Atom cryptocurrency, one
                          may use the bot command <code>!account</code> or{" "}
                          <code>!withdraw</code> <br />
                          to either load-up a tip account or transfer Atom to a
                          more secure hardware wallet like{" "}
                          <a href="https://www.ledger.com/" target="new">
                            ledger.com
                          </a>
                          <br />
                          <br />
                          <h3>How to send tips?</h3>
                          <br />
                          Always use the STF (Standard tip format) on any public
                          post or group chat.
                          <br />
                          <br />
                          For Twitter:{" "}
                          <code>@Cosmostipbot !tip 1 @username</code>
                          <br />
                          <br />
                          For Telegram:{" "}
                          <code>@Cosmostipbot /tip 1 @username</code>
                          <br />
                          <br />
                          <hr />
                          <h3>How is the @cosmostipbot maintained?</h3>
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
                          <h3>
                            Tx-fee <small>example</small>
                          </h3>
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Joe wants to tip 0.01 Atom to Anna via a public
                          mention on any public tweet. He uses the standard tip
                          format below:
                          <br />
                          <code>@Cosmostipbot !tip 0.01 @Anna</code>
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Joe must <code>!register</code> with the @Cosmostipbot
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          The bot automatically charges a 5% pow-fee which
                          includes the gas cost*
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Anna recieves 0.0095 Atom at her Twitter ID.
                          <br />
                          <br />
                          Anna gets notified and may proceed to withdraw the tip
                          by sending a DM to @Cosmostipbot <br />
                          with the command <code>!register</code> or{" "}
                          <code>!help</code> followed up by
                          <code>!withdraw</code> or continue tipping.
                          <br />
                          <br />
                          <blockquote className="blockquote">
                            <p>
                              <span className="emoji">
                                <FontAwesomeIcon
                                  icon={farLightbulbOn}
                                  size="lg"
                                />
                              </span>{" "}
                              Hint: Tip recipients do not need a tip-bot account
                              to be able to receive tips. Registration with the
                              bot is only required to deposit Atom or withdraw
                              tips.
                            </p>
                          </blockquote>
                          A confirmation tweet will always appear below the
                          mentioned tip tweet and indicate the tx hash including
                          amount sent, a timestamp and link to a reliable Cosmos
                          blockchain explorer.
                          <br />
                          <br />
                          <small>
                            *5% tip-bot proof of work fee <br />
                            It consist of cost to cover the gas to perform the
                            Atom tip transaction and cost to maintain optimal
                            tip-bot up time, efficiency & development
                            improvements.
                            <br />
                          </small>
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
                        <div style={{ textAlign: "left" }}>
                          <h3>
                            How to navigate the @Cosmostipbot on Telegram?
                          </h3>
                          <br />
                          1. Visit{" "}
                          <a href="https://t.me/cosmostipbot" target="new">
                            https://t.me/cosmostipbot
                          </a>
                          <br />
                          <br />
                          2. Send a direct message (DM/PM) to the tip-bot and
                          press start.
                          <br />
                          <br />
                          3. Next use <code>/register</code> to claim a unique
                          Atom address for your Telegram ID.
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="party">
                            🎉
                          </span>{" "}
                          Congratulations{" "}
                          <span
                            role="img"
                            className="emoji"
                            aria-label="astronaut"
                          >
                            👨🏼‍🚀
                          </span>{" "}
                          the bot has assigned a unique Atom account to your
                          personal Telegram ID.
                          <br />
                          <br />A user may track & check his/her account on any
                          public blockchain explorer:{" "}
                          <a href="https://mintscan.io" target="new">
                            mintscan.io
                          </a>
                          <br />
                          <br />
                          In order to deposit/withdraw Atom cryptocurrency, one
                          may use the bot command <code>/account</code> or{" "}
                          <code>/withdraw</code> to either fill up a tip account
                          or transfer Atom to a more secure hardware wallet like{" "}
                          <a href="https://ledger.com" target="new">
                            ledger.com
                          </a>
                          <br />
                          <br />
                          <h3>How to send tips?</h3>
                          <br />
                          Always use the STF (Standard tip format) in any group
                          chat.
                          <br />
                          <br />
                          <code>@Cosmostipbot /tip 1 @username</code>
                          <br />
                          <br />
                          <hr />
                          <h3>How is the @cosmostipbot maintained?</h3>
                          <br />
                          The tip-bot is maintained by community nodes & a
                          backup infrastructure to provide emergency
                          availability.
                          <br />
                          Maintenance and development is sustained by a flat 5%
                          pow-fee* on any outgoing tip made by users of the
                          @cosmostipbot.
                          <br />
                          Withdraws from tip-bot addresses do not pay the 5%
                          fee. A small amount of atom is used to cover the gas
                          on each tip-bot transaction.
                          <br />
                          <br />
                          <h3>Tx-fee example</h3>
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Joe wants to tip 0.01 Atom to Anna via a Telegram
                          group chat. He uses the standard tip format below:
                          <br />
                          <br />
                          <code>@Cosmostipbot /tip 0.01 @Anna</code>
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Joe must <code>/register</code> with the @Cosmostipbot
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          The bot automatically charges a 5% pow-fee which
                          includes the gas cost*
                          <br />
                          <br />
                          <span role="img" className="emoji" aria-label="check">
                            ✅
                          </span>{" "}
                          Anna recieves 0.0095 Atom at her Telegram ID.
                          <br />
                          <br />
                          Anna gets notified and may proceed to withdraw the tip
                          by sending a DM to @Cosmostipbot with the command{" "}
                          <code>/register</code> or <code>/help</code> followed
                          up by <code>/withdraw</code> or can continue tipping.
                          <br />
                          <br />
                          <blockquote className="blockquote">
                            <p>
                              <span className="emoji">
                                <FontAwesomeIcon
                                  icon={farLightbulbOn}
                                  size="lg"
                                />
                              </span>{" "}
                              Hint: Tip recipients do not need a tip-bot account
                              to be able to receive tips. Registration with the
                              bot is only required to deposit Atom or withdraw
                              tips.
                            </p>
                          </blockquote>
                          A confirmation notice will always appear below the
                          mentioned tip tweet and indicate the tx hash which
                          includes amount sent, a timestamp and link to a
                          reliable Cosmos blockchain explorer.
                          <br />
                          <br />
                          <small>
                            *5% tip-bot proof of work fee It consist of cost to
                            cover the gas to perform the Atom tip transaction
                            and cost to maintain optimal tip-bot up time,
                            efficiency & development improvements.
                          </small>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          <br />
        </Container>
      </div>
    );
  }
}

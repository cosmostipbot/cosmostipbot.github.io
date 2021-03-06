import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAtom } from "@fortawesome/pro-light-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import ListGroup from "react-bootstrap/ListGroup";

export default class Home extends Component {
  render() {
    const tweetCommand = [
      `!tip: Tips are sent through public tweets. On Twitter: Tag @cosmostipbot in a tweet and mention !tip <amount> <@username>. Example:
        @cosmostipbot !tip 5 @toschdev
        would send a 5 ATOM tip to user @toschdev.`,
    ];
    const twitterCommandsWithExplanation = [
      `!help: The tip bot will respond to your DM with a list of commands and their functions. If you forget something, use this to get a hint of how to do it!`,
      `!register: Registers your user ID for an account that is tied to it.  This is used to store your tips. Make sure to withdraw to a private wallet, as the tip bot is not meant to be a long term storage device for ATOM.`,
      `!balance: This returns the balance of the account linked with your user ID.`,
      `!account: Returns the account number that is tied to your user ID (currently unique to platform).  You can use this to deposit more ATOM to tip from your personal wallet.`,
      `!withdraw: Proper usage is !withdraw cosmosxxxxxxxx.  This will send the full balance of your tip account to the provided Cosmos account.  Optional: You can include an amount to withdraw by sending !withdraw <amount> <account>.  Example: !withdraw 1 cosmosxxxxx would withdraw 1 ATOM to account cosmosxxxxx.`,
      `!donate: Proper usage is !donate 1234.  This will send the requested donation to the Cosmos Tip Bot donation account to help fund development efforts.`,
      `!setlanguage: Used to change the default language of the bot.  A list of available languages is provided in the !languages command.  Proper use is "!setlanguage german" to change your language to German.`,
      `!languages: Returns a list of languages available for translation`,
    ];

    const telegramCommands = [
      `/tip: Use this command to tip anyone in public group chats. 
    
      Example: @Cosmostipbot /tip 1 @joe
      
      This will send 1 ATOM to @joe.`,
    ];
    const telegramCommandsWithExplanation = [
      `/help: Type this command if your lost.`,
      `/register: Register to create a unique Cosmos (ATOM) adress which is linked to your Telegram ID.`,
      `/balance: Shows your ATOM balance.`,
      `/account: Shows your unique ATOM address. 
    
      You may use this to deposit ATOM tip funds.`,
      `/withdraw: Use this format example to make withdraws
    
      /Withdraw 0.01 cosmos_xxxxxxxxxxxx
      
      (Add a memo if your sending to exchanges) `,
      `/donate: Gives you the option to donate directly to the App development. `,
      `/setlanguage: UUsed to change the default language of the bot.`,
      `/languages: Returns a list of languages available for translation`,
    ];
    return (
      <div>
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="justify-content-md-center">
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <FontAwesomeIcon icon={faTelegram} size="lg" /> Telegram
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="atom">
                      <FontAwesomeIcon icon={faAtom} size="lg" /> &nbsp;ATOM
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col sm={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      <Col>
                        <h1>Commands</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <b>Tweet / Group Message Commands</b>
                        <br />
                        <i>
                          Tips are sent through public tweets. These are
                          processed in real time.
                        </i>
                        <br />
                        <br />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="commands">
                          <ul>
                            {tweetCommand.map((command) => (
                              <li>{command}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <b>DM / PM Commands</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="commands">
                          <ul>
                            {twitterCommandsWithExplanation.map((command) => (
                              <li>{command}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <a
                          href={`https://twitter.com/messages/compose?recipient_id=1216509448413483011&text=${encodeURI(
                            `!register`
                          )}`}
                          data-screen-name="@cosmostipbot"
                          target="new"
                        >
                          <Button variant="primary" size="lg">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />{" "}
                            Register
                          </Button>
                        </a>
                      </Col>
                      <Col>
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURI(
                            `@cosmostipbot !tip 1 @`
                          )}`}
                          target="new"
                        >
                          <Button variant="primary" size="lg">
                            <FontAwesomeIcon icon={faTwitter} size="lg" /> Make
                            a tip Tweet
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col>
                        <h1>Commands</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <b>Telegram / Group Message Commands</b>
                        <br />
                        <i>
                          Tips are sent through public messages and groups.
                          These are processed in real time.
                        </i>
                        <br />
                        <br />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="commands">
                          <ul>
                            {telegramCommands.map((command) => (
                              <li>{command}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <b>DM / PM Commands</b>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="commands">
                          <ul>
                            {telegramCommandsWithExplanation.map((command) => (
                              <li>{command}</li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <a
                          href="https://tttttt.me/cosmostipbot"
                          target="new"
                          className="emoji twitter-follow-button"
                        >
                          <Button variant="primary" size="lg">
                            <FontAwesomeIcon icon={faTelegram} size="lg" />{" "}
                            Register on Telegram
                          </Button>
                        </a>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="atom">
                    {/* <Row>
                      <Col>
                        <img
                          src="/img/atom_cosmonaut.jpg"
                          className="header-img"
                          alt="comostipbot logo"
                        /><br/><br/>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col>
                        <h1>ATOM</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{ textAlign: "left" }}>
                          <p>
                            ATOM is the native asset of the Cosmos Network. It
                            has a total supply of 257 million atom of which 257
                            million are circulating.
                            <br />
                            Currently 71% of all Atom are locked up on chain by
                            users of the network in order to secure the POS
                            Blockchain.
                          </p>
                          <p>
                            ATOM is currently available on 133 global markets.{" "}
                            <br />
                            We have listed the most liquid exchanges for your
                            convenience.
                          </p>
                          <br />
                          <br />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <h2>Exchanges</h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <a
                              href="https://www.binance.com/en/register?ref=43412619"
                              target="new"
                            >
                              Binance
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a
                              href="https://www.coinbase.com/join/schwar_duk"
                              target="new"
                            >
                              Coinbase
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a
                              href="https://www.mxc.ai/auth/signup?inviteCode=149zu"
                              target="new"
                            >
                              MXC
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a
                              href="https://www.coinex.com/register?refer_code=nrpz4"
                              target="new"
                            >
                              CoinEx
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a
                              href="https://www.kucoin.com/ucenter/signup?rcode=2R8tu8d"
                              target="new"
                            >
                              Kucoin
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>Kraken</ListGroup.Item>
                          <ListGroup.Item>Huobi Global</ListGroup.Item>
                          <ListGroup.Item>Bittrex</ListGroup.Item>
                          <ListGroup.Item>OKEx</ListGroup.Item>
                          <ListGroup.Item>BitMax</ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p>
                          <small>
                            Disclaimer: The Cosmos Tip App developers do not
                            give financial advice to users on the purchase or
                            sale of ATOM cryptocurrency. ATOM is the native
                            asset of the Cosmos Tip App and we therefore want to
                            show all available exchanges that currently support
                            ATOM.
                          </small>
                        </p>
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

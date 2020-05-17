import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Home extends Component {
  render() {
    const tweetCommand = [
      `!tip: Tips are sent through public tweets. On Twitter: Tag @cosmos_tipbot in a tweet and mention !tip <amount> <@username>. Example:
        @cosmos_tipbot !tip 5 @toschdev
        would send a 5 ATOM tip to user @toschdev.`,
    ];
    const commandsWithExplanation = [
      `!help: The tip bot will respond to your DM with a list of commands and their functions. If you forget something, use this to get a hint of how to do it!`,
      `!register: Registers your user ID for an account that is tied to it.  This is used to store your tips. Make sure to withdraw to a private wallet, as the tip bot is not meant to be a long term storage device for ATOM.`,
      `!balance: This returns the balance of the account linked with your user ID.`,
      `!account: Returns the account number that is tied to your user ID (currently unique to platform).  You can use this to deposit more ATOM to tip from your personal wallet.`,
      `!withdraw: Proper usage is !withdraw cosmosxxxxxxxx.  This will send the full balance of your tip account to the provided Cosmos account.  Optional: You can include an amount to withdraw by sending !withdraw <amount> <account>.  Example: !withdraw 1 cosmosxxxxx would withdraw 1 ATOM to account cosmosxxxxx.`,
      `!donate: Proper usage is !donate 1234.  This will send the requested donation to the Cosmos Tip Bot donation account to help fund development efforts.`,
      `!setlanguage: Used to change the default language of the bot.  A list of available languages is provided in the !languages command.  Proper use is "!setlanguage German" to change your language to German.`,
      `!languages: Returns a list of languages available for translation`,
    ];
    return (
      <div>
        <Container>
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
                Tips are sent through public tweets. These are processed in real
                time.
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
                  {commandsWithExplanation.map((command) => (
                    <li>{command}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

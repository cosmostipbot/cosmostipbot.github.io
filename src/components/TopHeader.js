import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

export default class TopHeader extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="header-div">
            <img
              src="/img/dude.jpg"
              className="header-img"
              alt="comostipbot logo"
            />
          </div>
        </Jumbotron>
      </div>
    );
  }
}

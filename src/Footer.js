import React from "react";

const phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

const foot = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "left",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

const link = {
  color: "grey",
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={phantom}>
        <footer style={foot}>
          <span>&copy; All rights reserved. @cosmostipbot 2020</span>
          <span className="float-right">
            <a href="/terms-and-conditions" style={link}>
              <span className="ml-4">Terms & Conditions</span>
            </a>
            <a href="/privacy-policy" style={link}>
              <span className="ml-4">Privacy Policy</span>
            </a>
          </span>
        </footer>
      </div>
    );
  }
}

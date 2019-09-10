import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" data-testid="navbar">
        <Link data-testid="logo" to="/">
          <img src={logo} alt="Beach Resort" />
        </Link>
      </nav>
    );
  }
}

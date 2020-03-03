import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { LoginContext } from "../context";
import logo from "../images/logo.svg";
import Login from "./Login";

type NavBarProps = RouteComponentProps;

class Navbar extends Component<NavBarProps> {
  static contextType = LoginContext;

  unListen: null | Function = null;

  state = {
    isOpen: false,
    username: "",
    password: ""
  };

  componentDidMount() {
    this.unListen = this.props.history.listen(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  componentWillUnmount() {
    if (this.unListen) {
      this.unListen();
    }
  }

  setUsername = (username: string) => {
    this.setState({ username, isLogged: false });
  };

  setPassword = (password: string) => {
    this.setState({ password, isLogged: false });
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isLogged, doLogin, doLogout } = this.context;

    return (
      <nav className="nav" data-testid="navbar">
        <div className="nav__left">
          <Link to="/" data-testid="logo">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <ul
            className={
              this.state.isOpen
                ? isLogged
                  ? "nav__links-show nav__links-show-login"
                  : "nav__links-show nav__links-show-no-login"
                : "nav__links"
            }
            data-testid="navbar-links"
          >
            <li>
              <Link to="/" data-testid="home-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" data-testid="rooms-link">
                Rooms
              </Link>
            </li>
            {isLogged ? (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            ) : (
              <Link to="/admin">Admin</Link>
            )}
            <li>
              <Login
                username={this.state.username}
                password={this.state.password}
                setUsername={this.setUsername}
                setPassword={this.setPassword}
                doLogin={doLogin}
                doLogout={doLogout}
                isLogged={isLogged}
              />
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <button
            type="button"
            className="nav__btn"
            onClick={this.handleToggle}
            data-testid="menu"
          >
            <FaAlignRight className="nav__icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);

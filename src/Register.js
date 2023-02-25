import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startRegister } from "./actions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Register extends PureComponent {
  constructor() {
    super();

    this.state = {
      name:"",
      email: "",
      phone_no:"",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  register = e => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    this.setState({ email: "", password: "", confirmPassword: "" });
    console.log(email, password, confirmPassword);
    this.props.register(this.state);
  };

  render() {
    const { name, email, phone_no, password, confirmPassword } = this.state;
    return (
      <form className="loginForm">
        {this.props.registered ? "Registered" : ""}
        {this.props.registering && !this.props.registered ? "Registering" : ""}
        <h1 className="heading">Create Account</h1>
        <div className="socialLogins">
          <button className="socialLogin">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </button>
          <button className="socialLogin">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </button>
          <button className="socialLogin">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </button>
        </div>
        <span className="standardText">Or use your email instead</span>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="envelope" />
            <input
              className="inputfield"
              type="text"
              placeholder="Name"
              autoComplete="username"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              className="inputfield"
              type="email"
              placeholder="Email.."
              autoComplete="username"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input
              className="inputfield"
              type="number"
              placeholder="Phone-no"
              autoComplete="phone_no"
              name="Phone_no"
              value={phone_no}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="key" />
            <input
              className="inputfield"
              type="password"
              placeholder="Password.."
              autoComplete="new-password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="customInput">
            <FontAwesomeIcon className="inputicon" icon="key" />
            <input
              className="inputfield"
              type="password"
              placeholder="Confirm Password.."
              autoComplete="new-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="field submitfield">
          <input
            className="submit"
            type="submit"
            value="SIGN UP"
            onClick={this.register}
          />
        </div>
        <div className="field signupfield">
          <span className="linkfield">
            <Link to="/">Already signed up ? Login here</Link>
          </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    registered: state.registered,
    registering: state.registering
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: content => dispatch(startRegister(content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

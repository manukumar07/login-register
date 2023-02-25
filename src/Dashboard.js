import React, { PureComponent } from "react";
import "./Dashboard.css";
import axios from "axios";

export default class Dashboard extends PureComponent {
  logout = () => {
    axios.get("/logout").then(() => this.props.history.push("/"));
  };
  render() {
    return (
      <div>
        <a className="logout" onClick={this.logout}>
          Logout
        </a>
        <div className="dashboard">
          <h3>Welcome to the dashboard</h3>
        </div>
      </div>
    );
  }
}

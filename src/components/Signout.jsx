import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { setCookie, setBidId, setBidName } from "../utils/cookies";

class Signout extends Component {
  state = {};
  render() {
    setCookie("token", "", 1);
    setBidId("BidId", "", 1);
    setBidName("BidName", "", 1);
    return <Redirect to="/" />;
  }
}

export default Signout;

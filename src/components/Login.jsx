import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { setCookie, setBidId, setBidName } from "../utils/cookies";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSuccess: false,
      responseResult: "",
      isError: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();

    if (
      this.state.email === "Bidtora" &&
      this.state.password === "Bidtora@123"
    ) {
      this.setState({
        isSuccess: true,
        responseResult: this.state.email,
      });
    }
    {
      this.setState({ isError: true });
    }
  };

  render() {
    const responseResult = this.state.responseResult;

    if (this.state.isSuccess && responseResult === this.state.email) {
      setBidId("BidId", 0, 1);
      setBidName("BidName", "", 1);
      setCookie("token", responseResult, 1);

      return <Redirect to="/dashboard" />;
    } else if (this.state.isError) {
      // alert("Error in User Name or Password");
      return <Redirect to="/Error" />;
    }

    return (
      <React.Fragment>
        <div className="container">
          <section className="formClass">
            <form onSubmit={this.handleLogin} id="login">
              <center>
                {" "}
                <h2>Login</h2>{" "}
              </center>

              <div className="form-label-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />
              <div className="form-label-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Login
              </button>
              <br />
              <div>
                Not a member yet?{" "}
                <a href="/signUp" className="p-2 text-dark">
                  Sign up
                </a>
              </div>
            </form>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;

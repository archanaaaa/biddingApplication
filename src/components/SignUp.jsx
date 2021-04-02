import React, { Component } from "react";
import "./style.css";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section class="formClass">
            <center>
              <h3>Page Under Developement</h3>
            </center>
            {/* <form onSubmit={this.handleLogin} id="login">
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
            </form> */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;

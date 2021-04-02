import React, { Component } from "react";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section class="formClass">
            <center>
              <h3>User Name or Password Wrong</h3>
            </center>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default ErrorPage;

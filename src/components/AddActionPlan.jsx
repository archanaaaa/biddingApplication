import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";
import { getBidId } from "../utils/cookies";

class AddActionPlan extends Component {
  constructor() {
    super();
    this.state = {
      department: [],

      bidId: getBidId(),
      status: "",
      updateNotes: "",
      assignedDate: "",
      closedDate: "",
      activityHeadline: "",
      assignedDepartment: "",
      assignedIndividualId: "",
      targetDate: "",
      activityDescription: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var body = JSON.stringify(this.state);
    console.log("posting a new action plan ", body);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: body,
    };

    fetch(config["baseHost"] + "/actionplan", requestOptions)
      // .then((response) => response()
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            isSuccess: true,
            displayMsg: "Data Stored Successfully",
          });
        } else {
          this.setState({
            isError: true,
            displayMsg: "Sorry There is a problem in storing Data",
          });
        }
        // console.log(response.json());
      })
      .catch((error) => console.log("error", error));

    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    this.setState({ assignedDate: date });
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/department", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let data = [];
        result.forEach((element) => {
          data.push(element.value);
        });
        this.setState({ department: data });
        console.log(data);
      })
      .catch((error) => {
        this.setState({
          isError: true,
          displayMsg: error,
        });
      });
  }

  render() {
    const { department } = this.state;
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">
          {this.state.isSuccess ? (
            <div class="alert alert-success" role="alert">
              {this.state.displayMsg}
            </div>
          ) : this.state.isError ? (
            <div class="alert alert-danger" role="alert">
              {this.state.displayMsg}
            </div>
          ) : (
            ""
          )}

          <center>
            <b>
              <h2>Add Action Plan</h2>
            </b>
          </center>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="activityHeadline">Activity Headline</label>
                  <input
                    type="text"
                    className="form-control"
                    id="activityHeadline"
                    placeholder="Activity Headline "
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3"></div>
              </div>

              <div className="form-row">
                <div className="col-12 mb-3">
                  <label for="activityDescription">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="activityDescription"
                    placeholder="Activity Description"
                    rows="5"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="assignedDepartment">Assigned Department</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="assignedDepartment"
                    id="assignedDepartment"
                    required
                  >
                    {department.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="assignedIndividualId">Assigned Owner</label>
                  <input
                    type="text"
                    className="form-control"
                    id="assignedIndividualId"
                    placeholder="Individual Id"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="priority">Priority</label>
                  <input
                    type="text"
                    className="form-control"
                    id="priority"
                    placeholder="Priority like P1, P2 .. P5"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="targetDate">Target Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="targetDate"
                    placeholder="Target Date"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 mb-2"></div>
                <div className="col-md-6 mb-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddActionPlan;

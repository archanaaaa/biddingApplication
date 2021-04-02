import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";
import { getBidId } from "../utils/cookies";

class AddReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewcategory: [],

      bidId: getBidId(),
      updateNotes: "",
      status: "",
      actionTakenNotes: "",
      actionTakenBy: "",
      actionTakenDate: "",
      verificationStatus: "",
      verificationNotes: "",
      verifiedBy: "",
      referenceSection: "",
      category: "",
      raisedBy: "",
      targetDate: "",
      comment: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //console.log(this.state.form)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var body = JSON.stringify(this.state);
    console.log("posting a new query ", body);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
      body: body,
    };

    fetch(config["baseHost"] + "/reviewrecord", requestOptions)
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
      .catch((error) => {
        this.setState({
          isError: true,
          displayMsg: error,
        });
      });
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/rccategory", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let data = [];
        result.forEach((element) => {
          data.push(element.value);
        });
        this.setState({ reviewcategory: data });
        console.log(data);
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">
          <center>
            <b>
              <h2>Add Review Comment</h2>
            </b>
          </center>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="referenceSection">Reference Section</label>
                  <input
                    type="text"
                    className="form-control"
                    id="referenceSection"
                    placeholder="Reference Section"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3"></div>
              </div>

              <div className="form-row">
                <div className="col-12 mb-3">
                  <label for="comment">Review Comment</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="comment"
                    placeholder="Comment"
                    rows="5"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label for="category">Category</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="category"
                    id="category"
                    required
                  >
                    {this.state.reviewcategory.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
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

export default AddReview;

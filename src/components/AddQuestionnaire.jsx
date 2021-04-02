import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";

class AddQuestionnaire extends Component {

  constructor() {
    super();
    this.state = {
      querycategory: [],
      form: {
        bidId: "12",
        updateNotes: "",
        status: "open",
        referenceSection: "",
        category: "",
        raisedBy: "",
        targetDate: "",
        comment: "",
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (event) => {
    //console.log(this.state);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var body = JSON.stringify(this.state);
    console.log("posting a new query ", body);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: body,
    };

    fetch(config["baseHost"] + "/questionnaire", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    event.preventDefault();
  }

  async componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    await fetch(config["baseHost"] + "/masterdata/querycategory", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        let data = []
        result.forEach(element => {
          data.push(element.value);
        });
        this.setState({ querycategory: data });
        console.log(data);
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">
          <center>
            <b>
              <h2>Add Question</h2>
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
                    placeholder="Reference Section "
                    onChange={this.handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-row">

                <div className="col-12 mb-3">
                  <label for="comment">Question / Comment / Remarks</label>
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
                  <select onChange={this.handleChange} className="form-control" name="category" id="category" required>
                    {this.state.querycategory.map((item) =>
                      <option value={item}>{item}</option>
                    )}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="targetDate">
                    Target Date
                    </label>
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

export default AddQuestionnaire;

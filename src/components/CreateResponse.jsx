import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import DualListBox from "react-dual-listbox";
import SimpleUploadComponent from "./Upload/SimpleUploadComponent.js";
import config from "../config.json";
import "./style.css";
import "../../node_modules/react-dual-listbox/lib/react-dual-listbox.css";
import { getCookie } from "../utils/cookies";

class CreateResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bidName: "",
      bidOwner: "",
      bidStatus: "",
      bidType: "",
      expectedDate: "",
      clientName: "",
      existingClientIndicator: false,
      vertical: "",
      industry: "",
      technologies: "",
      projectType: "",
      region: "",
      subregion: "",
      competitor: "",
      creationDate: "",
      createdBy: "",
      lastChangedDate: "",
      lastChangedBy: getCookie("token"),

      bidTypeList: [],
      verticalList: [],
      industryList: [],
      technologiesList: [],
      projectTypeList: [],
      regionList: [],
      subregionList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    this.getBidTypeList();
    this.getIndustryList();
    this.getVerticalList();
    this.getProjectTypeList();
    this.getRegionList();
    this.getSubRegionList();
    this.getTechnologyList();
  }

  async getBidTypeList() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    await fetch(config["baseHost"] + "/masterdata/bidtype", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            bidTypeList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getIndustryList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/industry", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            industryList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getVerticalList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/vertical", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            verticalList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getProjectTypeList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/projecttype", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            projectTypeList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getSubRegionList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/subregion", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            subregionList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getRegionList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/region", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            regionList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }

  async getTechnologyList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(config["baseHost"] + "/masterdata/technologies", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result !== null) {
          this.setState({
            technologiesList: result,
          });
        }
      })
      .catch((error) => {
        console.log("Fetching Bid List failed error", error);
        this.setState({
          isError: true,
        });
      });
  }


  handleChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    this.setState({ creationDate: date });

    var body = JSON.stringify(this.state);
    console.log("posting a new bid response ", body);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
    };

    fetch(config["baseHost"] + "/bids", requestOptions)
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

  state = {
    selected: ['one'],
  };

  onChange = (selected) => {
      this.setState({ selected });
  };

  render() {
    console.log(this.state);
    const options = [
      {
          label: 'Frontend',
          options: [
              { value: 'reactjs', label: 'ReactJs' },
              { value: 'angularjs', label: 'AngularJs' },
              { value: 'vuejs', label: 'VueJs' },
          ],
      },
      {
          label: 'Backend',
          options: [
              { value: 'nodejs', label: 'NodeJs' },
          ],
      },
      {
          label: 'Cloud',
          options: [
              { value: 'amazonaws', label: 'Amazon AWS' },
              { value: 'googleCloud', label: 'Google Cloud' },
          ],
      },
  ];
  const { selected } = this.state;
           
    const {
      industryList,
      verticalList,
      bidTypeList,
      projectTypeList,
      regionList,
      technologiesList,
      subregionList,
    } = this.state;
    
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
              <h2>Create Response</h2>
            </b>
          </center>

          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="bidName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bidName"
                    name="bidName"
                    placeholder="Name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="bidOwner">Owner</label>
                  <input
                    type="text"
                    className="form-control"
                    id="bidOwner"
                    name="bidOwner"
                    placeholder="Owner"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <SimpleUploadComponent />
                {/*{<div className="form-group">
                    <label htmlFor="exampleFormControlFile1">
                      Upload Request
                    </label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                    />
          </div>*/}
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="clientName">Client</label>
                  <input
                    type="text"
                    className="form-control"
                    name="clientName"
                    id="clientName"
                    placeholder="Client"
                    onChange={this.handleChange}
                    required
                  />

                  <span>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="existingClientIndicator"
                          name="existingClientIndicator"
                          onChange={this.handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="existingClientIndicator"
                        >
                          Existing Customer
                        </label>
                      </div>
                    </div>
                  </span>
                </div>

                <div className="col-md-4 mb-3">
                  <label htmlFor="Expected Date Of Submission">
                    Expected Date Of Submission
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="expectedDate"
                    name="expectedDate"
                    placeholder="expecte_date_of_submission"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label>Type</label>
                  <select
                      onChange={this.handleChange}
                      className="form-control"
                      name="bidType"
                      id="bidType"
                      required
                    >
                    {bidTypeList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="typeOfProject">Project Type</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="typeOfProject"
                    id="typeOfProject"
                    required
                  >
                    {projectTypeList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="industry ">Industry </label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="industry"
                    id="industry"
                    required
                  >
                    {industryList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="vertical ">Vertical</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="vertical"
                    id="vertical"
                    required
                  >
                    {verticalList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="Region">Region</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="region"
                    id="region"
                    required
                  >
                    {regionList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="subregion">Sub Region</label>
                  <select
                    onChange={this.handleChange}
                    className="form-control"
                    name="subregion"
                    id="subregion"
                    required
                  >
                    {subregionList.map((item) => (
                      <option value={item.value}>{item.value}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="col-12 mb-3">
                  <label>Technologies</label>
                  <DualListBox canFilter options={options} selected={selected}
                  onChange={this.onChange}/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mb-2"></div>
                <div className="col-md-4 mb-3">
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

export default CreateResponse;

                  
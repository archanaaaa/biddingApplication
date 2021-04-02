import React, { Component } from "react";
import MaterialDatatable from "material-datatable";
import { FormControl, InputLabel, Input, TextField } from "@material-ui/core";
import SideBar from "../headerNavBar/SideBar";

class AssignTeamMember extends Component {
  constructor() {
    super();
    this.state = {
      bidName: "",
      bidOwner: "",
      expectedDate: "",
      bidType: "",
      searchBidName: "",
      SearchPersonName: "",
      searchExpertiseArea: "",
      searchEmailAddress: "",
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  submitHandler = (e) => {
    // method="POST" action="/save-rent-details"
    e.preventDefault();
    if (this.state.searchBidName !== "") {
      this.setState({
        bidName: "Microservices impl",
        bidOwner: "Aravind",
        expectedDate: "30-10-2020",
        bidType: "RFP",
      });
    } else {
      this.setState({
        bidName: "",
        bidOwner: "",
        expectedDate: "",
        bidType: "",
      });
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const columns = [
      {
        name: "S.No",
        field: "S_No",
        // options: {
        //     width: 70,
        // },
      },
      {
        name: "Person ID",
        field: "personId",
      },
      {
        name: "Person Name",
        field: "personName",
      },
      {
        name: "Expertise Area",
        field: "expertiseArea",
      },
      {
        name: "Email Id",
        field: "emailId",
      },
    ];
    const data = [
      {
        S_No: "1",
        personId: "12345",
        personName: "User A",
        expertiseArea: "Software",
        emailId: "abc@gmail.com",
      },
      {
        S_No: "2",
        personId: "12225",
        personName: "Admin A",
        expertiseArea: "Software",
        emailId: "xyz@gmail.com",
      },
    ];

    const options = {
      filterType: "checkbox",
      sortColumnIndex: 0,
      sortColumnDirection: "asc",
    };
    const { bidName, bidType, bidOwner, expectedDate } = this.state;
    return (
      <React.Fragment>
        <div className="wrapper">
          <SideBar />

          <div className="main-container">
            <div className="row">
              <div className="col-6">
                <p>Bid Details: {bidName}</p>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      id="standard-read-only-input"
                      label="Bid Name"
                      value={bidName}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      id="standard-read-only-input"
                      label="Expected Date"
                      value={expectedDate}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <TextField
                      id="standard-read-only-input"
                      label="Bid Type"
                      value={bidType}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <TextField
                      id="standard-read-only-input"
                      label="Bid Owner"
                      value={bidOwner}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </div>
                </div>
                <br />
                {/* <Button variant="contained" color="primary" size="small" disabled>
  Submit
</Button> */}
                <br />
                <br />
                <MaterialDatatable
                  title={"Assigned Team for Bid"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </div>

              <div className="col-6">
                <p>Search Bid : </p>
                <form onSubmit={this.submitHandler}>
                  <div className="row">
                    <div className="col-6">
                      <FormControl>
                        <InputLabel htmlFor="searchBidName">
                          Bid Name
                        </InputLabel>
                        <Input
                          id="searchBidName"
                          name="searchBidName"
                          onChange={this.onChange}
                          aria-describedby="my-helper-text"
                        />
                      </FormControl>
                    </div>
                    <div className="col-6">
                      <FormControl>
                        <InputLabel htmlFor="searchPersonName">
                          Person Name
                        </InputLabel>
                        <Input
                          id="searchPersonName"
                          name="searchPersonName"
                          onChange={this.onChange}
                          aria-describedby="my-helper-text"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FormControl>
                        <InputLabel htmlFor="searchExpertiseArea">
                          Expertise Area
                        </InputLabel>
                        <Input
                          id="searchExpertiseArea"
                          name="searchExpertiseArea"
                          onChange={this.onChange}
                          aria-describedby="my-helper-text"
                        />
                      </FormControl>
                    </div>
                    <div className="col-6">
                      <FormControl>
                        <InputLabel htmlFor="searchEmailAddress">
                          Email Address
                        </InputLabel>
                        <Input
                          id="searchEmailAddress"
                          name="searchEmailAddress"
                          onChange={this.onChange}
                          aria-describedby="my-helper-text"
                        />
                      </FormControl>
                    </div>
                  </div>
                  <br />
                  <button
                    style={{ width: "15%" }}
                    className="btn btn-primary btn-sm"
                  >
                    Submit
                  </button>
                  {/* <Button variant="contained" color="primary" size="small" onSubmit={this.submitHandler}>
  Submit
</Button> */}
                </form>

                <br />

                <MaterialDatatable
                  title={"Team Members"}
                  data={data}
                  columns={columns}
                  options={options}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AssignTeamMember;

import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";

class SubmissionDetails extends Component {
  constructor(){
    super();
    this.state = {
        name : "",
        description : "",
        submittedBy : "",
        submittedDate : "",
        submissionMode : "",
        file : null
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange=(e)=>{
    this.setState({[e.target.id] : e.target.value});
  }

  handleUpload=(e)=>{
    e.preventDefault();
      var name = document.getElementById("newfile").files.item(0).name; 
      this.setState({file : name})
  }

  handleSubmit=(event)=>{
      event.preventDefault();
      
      console.log(JSON.stringify(this.state))
  }

  async componentDidMount(){
    
  }

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">
          <center>
            <b>
              <h2>Submission Details</h2>
            </b>
          </center>
          <div className="container">
            <form onSubmit={this.handleSubmit}>

              <div className="form-row">
                    <div className="col-md-6 mb-3">
                    <label for="name">Name of the Documents</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Document name"
                        onChange={this.handleChange}
                        required
                    />
                    </div>
                </div>

                <div className="form-row">
                   
                    <div className="col-12 mb-3">
                    <label for="description">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Description"
                        rows="2"
                        onChange={this.handleChange}
                        required
                    />
                    </div>
                </div>

                <div className="form-row">
                    
                    <div className="col-md-6 mb-3">
                    <label for="submittedBy">Submitted By</label>
                    <input
                        type="text"
                        className="form-control"
                        id="submittedBy"
                        placeholder="Submitted By"
                        onChange={this.handleChange}
                        required
                    />
                    </div>
                    <div className="col-md-6 mb-6">
                    <label for="targetDate">
                    Submitted Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="submittedDate"
                        placeholder="Submitted Date"
                        onChange={this.handleChange}
                        required
                    />
                    </div>
                </div>

                <div className="form-row">
                <div className="col-md-6 mb-3">
                    <label for="targetDate">
                    Submission mode
                    </label>
                    <select  className="form-control" id="submissionMode" name="submissionMode" onChange = {this.handleChange}>
                        <option value="email">Email</option>
                        <option value="upload">Upload</option>
                    </select>
                    </div>
                    <div className="col-md-6 mb-3">
                    <label>Upload</label>
                        <input className="form-control p-1" type="file" id="newfile" name="newfile" onChange={this.handleUpload}></input> 
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

export default SubmissionDetails;

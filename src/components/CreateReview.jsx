import React, { Component } from "react";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";
import DualListBox from "react-dual-listbox";
import "../../node_modules/react-dual-listbox/lib/react-dual-listbox.css";
var i = 0;  

const options = [
    {
      options: [{ value: "Reviewer1", label: "Reviewer1" }],
    },
    {
      options: [{ value: "Reviewer2", label: "Reviewer2" }],
    },
  ];

export default class CreateReview extends Component {
    
  constructor(){
    super();
    this.state = {
        title : "",
        type : "",
        targetDate : "",
        reviewer : [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addValue = this.addValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
  }

  addValue=(event)=> {
    
    // var temp = this.state.reviewer;
    // temp.push(document.getElementById("newText").value);
    // this.setState({reviewer : temp});
    console.log("add");
    event.preventDefault();
  }

  deleteValue=(event)=> {
    
    // var temp = this.state.reviewer;
    // temp.deleteValue(document.getElementById("newText").value);
    // this.setState({reviewer : temp});
    console.log("delete")
    event.preventDefault();
  }

  handleChange=(e)=>{
    this.setState({[e.target.id] : e.target.value});
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(JSON.stringify(this.state))
  }

  render() {
    const { reviewer } = this.state;
    
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">
          <center>
            <b>
              <h2>Create Review</h2>
            </b>
          </center>
          <div className="container">
            <form id="CreateReviewForm">

              <div className="form-row">
                    <div className="col-md-4 mb-3">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title"
                        onChange={this.handleChange}
                        required
                    />
                    </div>

                    <div className="col-md-4 mb-3">
                    <label for="type">Type</label>
                    <select className="form-control" name="type" id="type" onChange={this.handleChange}>
                        <option value="technical">Technical</option>
                        <option value="financial">Financial</option>
                        <option value="management">Management</option>
                    </select>
                    </div>

                    <div className="col-md-4 mb-3">
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

                <div className="form-row">
                <div className="col-12 mb-3">
                  <label>Reviewers</label>
                  <select className="form-control mb-3" name="reviewers" multiple id="reviewers" onchange={this.handleChange}>  
                   {this.state.reviewer.map((item)=>
                     <option value="item">item</option>
                   )

                   }
                  </select>
                    <div className="row mb-3">
                    <div className="col-md-6 mb-3"><input className="form-control" name="newText" id="newText" type="text" /></div>
                    <div className="col-md-2 mb-3">
                      <button onclick={this.addValue} className="m-1"><i className="fa fa-plus fa-lg m-1" id="add"></i></button>
                      <button onclick={this.deleteValue} className="m-1"><i className="fa fa-minus fa-lg m-1" id="delete"></i></button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-md-3 mb-2"></div>
                <div className="col-md-6 mb-3">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.handleSubmit}
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
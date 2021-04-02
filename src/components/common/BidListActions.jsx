import React, { Component } from 'react';
import ReactTooltip from "react-tooltip";


class BidListActions extends Component {
    state = {  }
    render() { 
        return (  <React.Fragment>
            <a href="/actionPlan">
                  <button className="btn btn-success btn-sm">
                    <i
                      className="fa fa-sticky-note-o"
                      aria-hidden="true"
                      data-tip="Action Plan"
                      data-for="ActionPlan"
                      data-place="top"
                    ></i>
                    <ReactTooltip id="ActionPlan" />
                  </button>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href ="/actionPlan">
                  <button className="btn btn-primary btn-sm">
                    <i
                      className="fa fa-user-o"
                      aria-hidden="true"
                      data-tip="Bid Team Members"
                      data-for="teamMembers"
                      data-place="top"
                    ></i>
                    <ReactTooltip id="teamMembers" />
                  </button>
                </a>
                <span>&nbsp;&nbsp;</span>
                <button
                  //    onClick={() => this.handleDeleteMovie(bid)}
                  className="btn btn-success btn-sm"
                >
                  <i
                    className="fa fa-question-circle-o"
                    aria-hidden="true"
                    data-tip="Questionnaire"
                    data-for="Questionnaire"
                    data-place="top"
                  ></i>
                  <ReactTooltip id="Questionnaire" />
                </button>
                <span>&nbsp;&nbsp;</span>
                <a href="/draftResponse">
                <button
                  //   onClick={() => this.handleDeleteMovie(bid)}
                  className="btn btn-danger btn-sm"
                >
                  <i
                    className="fa fa-reply"
                    aria-hidden="true"
                    data-tip="Draft Response"
                    data-for="BidResponse"
                    data-place="top"
                  ></i>
                  <ReactTooltip id="BidResponse" />
                </button>
                </a>
                <span>&nbsp;&nbsp;</span>
                <a href="/review">
                  <button className="btn btn-primary btn-sm">
                    <i
                      className="fa fa-eye"
                      aria-hidden="true"
                      data-tip="Review"
                      data-for="Review"
                      data-place="top"
                    ></i>
                    <ReactTooltip id="Review" />
                  </button>
                </a>
                <span>&nbsp;&nbsp;</span>
                <button
                  // onClick={() => this.handleDeleteMovie(bid)}
                  className="btn btn-success btn-sm"
                >
                  <i
                    className="fa fa-upload"
                    aria-hidden="true"
                    data-tip="Upload"
                    data-for="Upload"
                    data-place="top"
                  ></i>
                  <ReactTooltip id="Upload" />
                </button>
                <span>&nbsp;&nbsp;</span>
                <button
                  //  onClick={() => this.handleDeleteMovie(bid)}
                  className="btn btn-primary btn-sm"
                >
                  <i
                    className="fa fa-check-square-o"
                    aria-hidden="true"
                    data-tip="Submit"
                    data-for="Submit"
                    data-place="top"
                  ></i>
                  <ReactTooltip id="Submit" />
                </button>
        </React.Fragment>);
    }
}
 
export default BidListActions;
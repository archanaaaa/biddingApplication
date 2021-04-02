import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div id="sideBar">
          <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark">
              <i className="fa fa-bars"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a>BidTora</a>
                  <div id="close-sidebar">
                    <i className="fa fa-times"></i>
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img
                      className="img-responsive img-rounded"
                      src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture"
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      Test
                      <strong>User</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle"></i>
                      <span>Online</span>
                    </span>
                  </div>
                  <span className="user" style={{ float: "right" }}>
                    <a href="/signout" style={{ color: "white" }}>
                      <i className="fa fa-power-off"></i>
                    </a>
                  </span>
                </div>

                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <span>General</span>
                    </li>
                    {/* <li className="sidebar-dropdown">
                    <a >
                      <i className="fa fa-tachometer"></i>
                      <span>Dashboard</span>
                      <span className="badge badge-pill badge-warning">
                        New
                      </span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a>
                            Dashboard 1
                            <span className="badge badge-pill badge-success">
                              Pro
                            </span>
                          </a>
                        </li>
                        <li>
                          <a>Dashboard 2</a>
                        </li>
                        <li>
                          <a>Dashboard 3</a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                    <li className="sidebar-dropdown">
                      <a>
                        <i className="fa fa-dashboard"></i>
                        <span>DashBoard</span>
                        {/* <span className="badge badge-pill badge-danger">3</span> */}
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/bids">Bids</Link>
                          </li>
                          <li>
                            <a href="/actionPlan">Action Plan</a>
                          </li>
                          <li>
                            <a href="/assignTeamMembers">Team Members</a>
                          </li>
                          <li>
                          <a href="/questionnaire">Questionnaire</a>
                          </li>
                          <li>
                            <a href="/draftResponse">Draft Response</a>
                          </li>
                          <li>
                            <a href="/review">Review </a>
                          </li>
                          <li>
                            <a>Upload</a>
                          </li>
                          <li>
                            <a>Submit</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* <li className="sidebar-dropdown">
                    <a >
                      <i className="far fa-gem"></i>
                      <span>Components</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a >General</a>
                        </li>
                        <li>
                          <a >Panels</a>
                        </li>
                        <li>
                          <a >Tables</a>
                        </li>
                        <li>
                          <a >Icons</a>
                        </li>
                        <li>
                          <a >Forms</a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                    <li className="sidebar-dropdown">
                      <a>
                        <i className="fa fa-globe"></i>
                        <span>Eagle View</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a>Response View </a>
                          </li>
                          <li>
                            <a>RFP (Request) View </a>
                          </li>
                          <li>
                            <a>Bid Process Workflow </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <a>
                        <i className="fa fa-bar-chart"></i>
                        <span>Spy Glass</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="/pieChart">Pie chart</a>
                          </li>
                          <li>
                            <a>Line chart</a>
                          </li>
                          <li>
                            <a>Bar chart</a>
                          </li>
                          <li>
                            <a>Histogram</a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="header-menu">
                      <span>Utilities</span>
                    </li>

                    <li>
                      <a>
                        <i className="fa fa-book"></i>
                        <span>Master Data</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-file"></i>
                        <span>Templates</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="fa fa-users"></i>
                        <span>Users</span>
                      </a>
                    </li>
                    {/*  <li>
                    <a >
                      <i className="fa fa-book"></i>
                      <span>Documentation</span>
                       <span className="badge badge-pill badge-primary">
                        Beta
                      </span> 
                    </a>
                  </li>*/}
                  </ul>
                </div>
              </div>

              {/* <div className="sidebar-footer">
              <a >
                <i className="fa fa-bell"></i>
                <span className="badge badge-pill badge-warning notification">
                  3
                </span>
              </a>
              <a >
                <i className="fa fa-envelope"></i>
                <span className="badge badge-pill badge-success notification">
                  7
                </span>
              </a>
              <a >
                <i className="fa fa-cog"></i>
                <span className="badge-sonar"></span>
              </a>
              <a >
                <i className="fa fa-power-off"></i>
              </a>
            </div> */}
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;

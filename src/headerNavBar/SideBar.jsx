import React, { Component } from "react";
import "./sideBar.css";
import SelectProject from "../components/SelectProject";
import { getCookie ,getBidName,getBidOwner,getClientName,getExpectedDate } from "../utils/cookies";
import { Card, CardBody, Col, Row } from "reactstrap";
import {faGavel,faUserTie,faStopwatch,} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class SideBar extends Component {

  state = {};
  
  render() {
    let userName = getCookie("token");
    var bidName = getBidName(),bidOwner = getBidOwner(),clientName = getClientName(),expectedDate = getExpectedDate();


    return (
      <React.Fragment>
        <div className="header">
          <div className="header-menu">
            <div className="title">
              Bid <span>Tora</span>
              <span className="button-wrapper">
                <SelectProject />{" "}
              </span>
            </div>
            <div className="sidebar-btn">
              <i className="fa fa-bars"></i>
            </div>

            <div  className="header-card">
                  <Row>
                    <Col md={4}>
                    <div><FontAwesomeIcon icon={faGavel} color="#ccffff" size="lg"/></div>
                    <div><p style={{color:"#ccffff"}}>{bidOwner}</p></div>
                    </Col>
                    <Col md={4}>
                    <div><FontAwesomeIcon icon={faUserTie} color="#99ff99" size="lg"/></div>
                    <div><p style={{color:"#99ff99"}}>{clientName}</p></div>
                    </Col>
                    <Col md={4}>
                    <div><FontAwesomeIcon icon={faStopwatch} color="#ff3300" size="lg"/></div>
                    <div><p style={{color:"#ff3300"}}>{expectedDate}</p></div>
                    </Col>
                  </Row>
            </div>

            <span
              className="user-wrapper"
              style={{
                color: "white",
                marginRight: "-50%",
                fontSize: "20px",
                paddingTop: "1%",
              }}
            >
              <p>Welcome {userName}</p>
            </span>
            <ul style={{ paddingTop: "1%" }}>
              {/*	 <li><a href="#"><i className="fa fa-search" onHover></i></a></li>
						<li><a href="#"><i className="fas fa-bell"></i></a></li> */}
              <li>
                <a href="/signout">
                  <i className="fa fa-sign-out"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-menu">
            <li className="item" id="dashboard">
              <a href="#dashboard" className="menu-btn">
                <i className="fa fa-dashboard"></i>
                <span>
                  Dashboard <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="/bids">
                  <i className="fa fa-gavel"></i>
                  <span>Response</span>
                </a>
                <a href="/actionPlan">
                  <i className="fa fa-tasks"></i>
                  <span>Action Plan</span>
                </a>
                <a href="/assignTeamMembers">
                  <i className="fa fa-users"></i>
                  <span>Team Members</span>
                </a>
                <a href="/questionnaire">
                  <i className="fa fa-question"></i>
                  <span>Questionnaire</span>
                </a>
                <a href="/draftResponse">
                  <i className="fa fa-edit"></i>
                  <span>Draft Response</span>
                </a>
                <a href="/effortDocuments">
                  <i className="fa fa-upload"></i>
                  <span>Effort / Resourcing</span>
                </a>
                <a href="/review">
                  <i className="fa fa-eye"></i>
                  <span>Review</span>
                </a>
                <a href="/updateOutcomes">
                  <i class="fa fa-plus-square"></i>
                  <span>Update Outcomes</span>
                </a>
              </div>
            </li>
            <li className="item" id="eagleView">
              <a href="#eagleView" className="menu-btn">
                <i className="fa fa-globe"></i>
                <span>
                  Eagle View <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="#">
                  <i className="fa fa-image"></i>
                  <span>Response View </span>
                </a>
                <a href="#">
                  <i className="fa fa-address-card"></i>
                  <span>RFP (Request) View</span>
                </a>
                <a href="#">
                  <i className="fa fa-image"></i>
                  <span>Bid Process Workflow</span>
                </a>
              </div>
            </li>
            <li className="item" id="spyGlass">
              <a href="#spyGlass" className="menu-btn">
                <i className="fa fa-bar-chart"></i>
                <span>
                  Spy Glass <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="/pieChart">
                  <i className="fa fa-pie-chart"></i>
                  <span>Insight</span>
                </a>
                {/* <a href="/pieChart">
                  <i className="fa fa-pie-chart"></i>
                  <span>Pie Chat</span>
                </a>
                
                <a href="#">
                  <i className="fa fa-line-chart"></i>
                  <span>Line Chart</span>
                </a>
                <a href="#">
                  <i className="fa fa-bar-chart"></i>
                  <span>Bar Chart</span>
                </a>
                <a href="#">
                  <i className="fa fa-area-chart"></i>
                  <span>Histogram </span>
                </a> */}
              </div>
            </li>
            <li className="item" id="masterData">
              <a href="#masterData" className="menu-btn">
                <i className="fa fa-file"></i>
                <span>
                  Master Data <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="/supportingDocument">
                  <i class="fa fa-binoculars"></i>
                  <span>View all documents </span>
                </a>
                <a href="/editDropDownValues">
                  <i class="fa fa-caret-square-o-down"></i>
                  <span>Edit dropdown values</span>
                </a>
              </div>
            </li>
            <li className="item" id="templates">
              <a href="#templates" className="menu-btn">
                <i className="fa fa-book"></i>
                <span>
                  Templates <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="/downloadTemplates">
                  <i class="fa fa-download"></i>
                  <span>Download templates </span>
                </a>
              </div>
            </li>
            {/* <li className="item">
              <a href="#" className="menu-btn">
                <i className="fa fa-book"></i>
                <span>Master Data</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="menu-btn">
                <i className="fa fa-book"></i>
                <span>Template</span>
              </a>
            </li>
            <li className="item">
              <a href="#" className="menu-btn">
                <i className="fa fa-file"></i>
                <span>Users</span>
              </a>
            </li>
            <li className="item" id="settings">
              <a href="#settings" className="menu-btn">
                <i className="fa fa-cog"></i>
                <span>
                  Settings <i className="fa fa-chevron-down drop-down"></i>
                </span>
              </a>
              <div className="sub-menu">
                <a href="#">
                  <i className="fa fa-lock"></i>
                  <span>Password</span>
                </a>
                <a href="#">
                  <i className="fa fa-language"></i>
                  <span>Language</span>
                </a>
              </div>
            </li>
             <li className="item">
						<a href="#" className="menu-btn">
							<i className="fa fa-info-circle"></i><span>About</span>
						</a>
					</li> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;

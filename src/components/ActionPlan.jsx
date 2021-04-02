import React, { Component } from "react";
import MaterialDatatable from "material-datatable";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import config from "../config.json";
import SideBar from "../headerNavBar/SideBar";
import { Link } from "react-router-dom";
import SimpleUploadComponent from "./Upload/SimpleUploadComponent.js";
import { getBidId } from "../utils/cookies";

class ActionPlan extends Component {
  state = {
    actionPlans: [],
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let bidId = getBidId();

    let url = config["baseHost"] + "/actionplan/";
    if (bidId != 0) {
      url = config["baseHost"] + "/actionplan/" + bidId;
    }
    
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          actionPlans: result,
        })
      )
      .catch((error) => console.log("error", error));
  }

  render() {
    const { length: count } = this.state.actionPlans;
    const { actionPlans } = this.state;

    // if (count === 0) return <p>There are no Action Plan in the database</p>;
    const columns = [
      {
        name: "Activity Headline",
        field: "activityHeadline",
      },
      {
        name: "Description",
        field: "activityDescription",
      },
      {
        name: "Assigned Department",
        field: "assignedDepartment",
      },
      {
        name: "Assigned Owner",
        field: "assignedIndividualId",
      },
      {
        name: "Target Date",
        field: "targetDate",
      },
      {
        name: "Status",
        field: "status",
      },
    ];

    const options = {
      filterType: "checkbox",
      sortColumnIndex: 0,
      sortColumnDirection: "asc",
    };

    return (
      <React.Fragment>
        <div className="wrapper">
          <SideBar />
          <div className="main-container">
            <div className="row">
              <div className="col-12 col-lg-5 p-1">
                <p>Showing {count} Action Plans in the database</p>
              </div>
              <div className="col-7 col-lg-4 p-1">
                <SimpleUploadComponent />
              </div>
              <div className="col-4 col-lg-2 p-1">
                <Link to="/addActionPlan">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Action Plan{" "}
                  </button>
                </Link>
              </div>
            </div>

            <MaterialDatatable
              title={"Action Plan"}
              data={actionPlans}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ActionPlan;

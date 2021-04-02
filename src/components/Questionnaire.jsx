import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialDatatable from "material-datatable";
import SideBar from "../headerNavBar/SideBar";
import config from "../config.json";
import SimpleUploadComponent from "./Upload/SimpleUploadComponent.js";
import { getBidId } from "../utils/cookies";

class Questionnaire extends Component {
  state = {
    questionnaire: [],
  };

  async componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let bidId = getBidId();

    let url = config["baseHost"] + "/questionnaire/";
    if (bidId != 0) {
      url = config["baseHost"] + "/questionnaire/" + bidId;
    }
    // alert(url);
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          questionnaire: result,
        })
      )
      .catch((error) => console.log("error", error));
  }

  render() {
    const { length: count } = this.state.questionnaire;
    const { questionnaire } = this.state;
    const columns = [
      {
        name: "Reference Section",
        field: "referenceSection",
      },
      {
        name: "Comment",
        field: "comment",
      },
      {
        name: "Category",
        field: "category",
      },
      {
        name: "Raised By",
        field: "raisedBy",
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
            <div className="row mb-3">
              <div className="col-12 col-lg-6 p-1">
                <p>Showing {count} Queries in the database</p>
              </div>
              <div className="col-8 col-lg-4 p-1">
                <SimpleUploadComponent />
              </div>
              <div className="col-4 col-lg-2 p-1">
                <Link to="/addQuestionnaire">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Question{" "}
                  </button>
                </Link>
              </div>
            </div>

            <MaterialDatatable
              title={"Questionnaire"}
              data={questionnaire}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Questionnaire;

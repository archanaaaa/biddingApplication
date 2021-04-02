import React, { Component } from "react";
import { Link } from "react-router-dom";
import MaterialDatatable from "material-datatable";
import SimpleUploadComponent from "./Upload/SimpleUploadComponent.js";
import SideBar from "../headerNavBar/SideBar";
import "./style.css";
import config from "../config.json";
import { getBidId } from "./../utils/cookies";

class Review extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let bidId = getBidId();

    let url = config["baseHost"] + "/reviewrecord/";
    if (bidId != 0) {
      url = config["baseHost"] + "/reviewrecord/" + bidId;
    }

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({ reviews: result });
      })
      .catch((error) => console.log("error", error));
  }

  render() {
    const { length: count } = this.state.reviews;
    const reviews = this.state.reviews;
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
    ];

    const options = {
      filterType: "checkbox",
      scrollBar: true,
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
                <p>Showing {count} review comments in the database</p>
              </div>

              <div className="col-7 col-lg-4 p-1">
                <SimpleUploadComponent />
              </div>
              <div className="col-4 col-lg-2 p-1">
                <Link to="/addReview">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Add Review{" "}
                  </button>
                </Link>
              </div>
            </div>
            <br />

            <MaterialDatatable
              title={"Review Comments"}
              data={reviews}
              columns={columns}
              options={options}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Review;

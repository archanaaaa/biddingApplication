import React, { Component } from "react";
import Pagination from "./common/pagination";
import PaginationValue from "./common/paginationValue";
import { paginate } from "../utils/paginate";
import SideBar from "../headerNavBar/SideBar";
import config from "../config.json";
import BidListTable from "./BidListTable";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import SelectProject from "./SelectProject";

class BidList extends Component {
  constructor() {
    super();
    this.state = {
      // bids: getBids(),
      pageSize: 5,
      currentPage: 1,
      bids: [],
      sortColumn: { path: "title", order: "asc" },
    };
    this.getBids = this.getBids.bind(this);
  }
  componentDidMount() {
    this.getBids();
  }
  getBids() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
    try {
      fetch(config["baseHost"] + "/bids", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result !== null) {
            this.setState({
              bids: result,
            });
          } else {
          }
        })
        .catch((error) => {
          console.log("Fetching Bid List failed error", error);
          this.setState({
            isError: true,
          });
        });
    } catch (err) {
      console.log(err);
      this.setState({
        isError: true,
      });
    }
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePageRowCount = (e) => {
    this.setState({ pageSize: e });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: count } = this.state.bids;
    const { pageSize, currentPage, bids: allBids, sortColumn } = this.state;
    if (count === 0) {
      return (
        <div className="wrapper">
          <SideBar />

          <div className="main-container">
            <center>
              <p>There are no Bids in the database</p>
            </center>
          </div>
        </div>
      );
    }
    const sorted = _.orderBy(allBids, [sortColumn.path], [sortColumn.order]);
    const bids = paginate(sorted, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="wrapper">
          ReactDOM.render(
          <SideBar />, document.getElementById('root') );
          <div className="main-container">
            <div className="row">
              <div className="col-4">
                <p>Showing {count} Bids in the database</p>
              </div>

              <div className="col-6">
                <a href="/CreateResponse">
                  <button
                    className="btn btn-primary"
                    style={{ float: "right" }}
                  >
                    Create Response{" "}
                  </button>
                </a>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col">
                <BidListTable
                  bids={bids}
                  onSort={this.handleSort}
                  sortColumn={sortColumn}
                />

                <div className="row">
                  <div className="col-8">
                    <Pagination
                      itemsCount={count}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                  <div className="col-4">
                    <p>
                      Show{"  "}
                      <span>
                        {"  "}
                        <PaginationValue
                          onSelectRowsToDisplay={this.handlePageRowCount}
                        />
                      </span>
                      per page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BidList;

import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "./ModalStyle.css";
import { setBidId, getBidId, setBidName, getBidName ,setBidOwner,setClientName,setExpectedDate} from "../utils/cookies";
import config from "../config.json";

class SelectProject extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      bidTitle: "",
      bidOwner : "",
      clientName : "",
      expectedDate : "",
      bids: [],
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.getBids = this.getBids.bind(this);
  }
  componentDidMount() {
    let bidTitle = getBidName();
    if (bidTitle == undefined || bidTitle == "") bidTitle = "Select Bid";
    this.setState({
      bidTitle: bidTitle,
    });
    this.getBids();
  }

  handleClose = () =>
    this.setState({
      show: false,
    });
  handleShow = () =>
    this.setState({
      show: true,
    });

  handleRowClick = (bidId, bidName,bidOwner,clientName,expectedDate) => {
    this.setState({
      show: false,
      bidTitle: bidName,
      bidOwner : bidOwner,
      clientName : clientName,
      expectedDate : expectedDate
    });
    setBidId("BidId", bidId, 1);
    setBidName("BidName", bidName, 1);
    setBidOwner("BidOwner", bidOwner, 1);
    setClientName("ClientName",clientName, 1);
    setExpectedDate("ExpectedDate", expectedDate, 1);
  };

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
            //console.log(this.state.bids);
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
  render() {
    const { bidTitle, show: showModal, bids } = this.state;
    const { length: count } = bids;

    return (
      <React.Fragment>
        <button type="button" class="btn-wrapper" onClick={this.handleShow}>
          {bidTitle} <i className="fa fa-angle-down"></i>
        </button>
        <Modal
          show={showModal}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {count == 0 ? (
                  <p>No Data Found</p>
                ) : (
                  bids.map((bid) => (
                    <tr
                      onClick={() =>
                        this.handleRowClick(bid.bidId, bid.bidName,bid.bidOwner,bid.clientName,bid.expectedDate)
                      }
                    >
                      <td>{bid.bidName}</td>
                      <td>{bid.bidOwner}</td>
                    </tr>
                  ))
                )}
                <tr onClick={() => this.handleRowClick("Test")}>
                  <td>Test</td>
                  <td>2332</td>
                </tr>
                <tr onClick={() => this.handleRowClick("Bidtora")}>
                  <td>Bidtora</td>
                  <td>233112</td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default SelectProject;

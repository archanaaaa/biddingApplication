import React, { Component } from 'react';
import { Container, Row, Col, Dropdown } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import "../style.css";
import MaterialDatatable from "material-datatable";
import UploadComponent from './UploadComponent';
import config from "../../config.json";
import { getBidId } from "../../utils/cookies"

export default class EffortDocuments extends Component {

  constructor() {
    super();
    this.state = {
      effortDocs: [],
      page: 'supportingDoc'
    }
  }

  componentDidMount() {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let bidId = getBidId();

    let url = config["baseHost"] + "/supportingdoc/";
    if (bidId != 0) {
      url = config["baseHost"] + "/supportingdoc/" + bidId + "/finance";
    }
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ effortDocs: result });
      })
      .catch(error => console.log('error', error));

  }

  render() {

    const { length: count } = this.state.effortDocs;
    const { effortDocs } = this.state;

    const columns = [
      {
        name: 'Attachment Type ',
        field: 'attachmentType'
      },
      {
        name: 'Document Name',
        field: 'attachmentName'
      },
      {
        name: 'Version',
        field: 'version'
      },
      {
        name: 'Updated by',
        field: 'lastChangedBy'
      },
      {
        name: 'Updated date',
        field: 'lastChangedDate'
      },
    ];

    const options = {
      filterType: 'checkbox',
      sortColumnIndex: 0,
      sortColumnDirection: "asc",
    };

    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-container">

          <div className="row">
            <UploadComponent options={"finance"} />
          </div>

          <MaterialDatatable
            title={"Effort / Resourcing documents"}
            data={effortDocs}
            columns={columns}
            options={options}
          />


        </div>
      </div >
    );
  }
}
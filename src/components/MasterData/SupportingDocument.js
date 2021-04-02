import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Card, CardTitle, CardHeader, CardBody } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import "../style.css";
import MaterialDatatable from "material-datatable";
import UploadComponent from '../Upload/UploadComponent';
import config from "../../config.json";
import {faCodeBranch,faUserTag,faCalendarDay,faFile} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Popover, Tooltip } from '@material-ui/core';

export default class SupportingDocument extends Component {
  constructor() {
    super();
    this.state = {
      financeData: [],
      nonFinanceData: [],
      allData: [],
      page: 'supportingDoc',
      dataType: "all"
    }
  }

  showMore=(item)=>{
    return(
    <Popover>
      <ul>
        <li>Created by : {item.createdBy}</li>
        <li>Creation on : {item.creationDate}</li>
        <li>Attachment Type : {item.attachmentType}</li>
        <li>File Type : {item.fileType}</li>        
      </ul>
    </Popover>);
  }

  componentDidMount() {

    var data = []
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(config["baseHost"] + "/supportingdoc/12/finance", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        data.push(...result);
        this.setState({ financeData: result });
      })
      .catch(error => console.log('error', error));

    fetch(config["baseHost"] + "/supportingdoc/12/nonfinance", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        data.push(...result);
        this.setState({ nonFinanceData: result });
      })
      .catch(error => console.log('error', error));

    this.setState({ allData: data });
  }


  handleChange = (e) => {
    this.setState({
      dataType: e.target.value
    })
  }
 
  cardDisplay = () => {
    var data = [];
    if (this.state.dataType == 'finance') {
      data = this.state.financeData
    }
    else if (this.state.dataType == 'nonfinance') {
      data = this.state.nonFinanceData
    }
    else {data = this.state.allData}
    var toolTipText = "";
    return(
      <Container>
        <Row>
        {data.map((item)=>
          <Col md={6}>
          
            <Card body outline color="info" className="card-style shadow text-center"  onMouseEnter={this.showMore(item)}>
               <CardBody>
               <CardTitle tag="h5" style={{color:"blue"}}><FontAwesomeIcon icon={faFile} color="blue" size="lg"/> {item.attachmentName}</CardTitle>
                <Row className="mt-4">
                <Col md={4}>
                <div className="mt-2"><FontAwesomeIcon icon={faCodeBranch} color="green" size="lg"/></div>
                <div className="mt-2"><p style={{color:"green"}}>{item.version}</p></div>
                </Col>
                <Col md={4}>
                <div className="mt-2"><FontAwesomeIcon icon={faUserTag} color="#ff9900" size="lg"/></div>
                <div className="mt-2"><p className="ml-3" style={{color:"#ff9900"}}>{item.lastChangedBy}</p></div>
                </Col>
                <Col md={4}>
               <div className="mt-2"> <FontAwesomeIcon icon={faCalendarDay} color="#993366" size="lg"/></div>
               <div className="mt-2"><p className="ml-4" style={{color:"#993366"}}>{item.lastChangedDate}</p></div>
                </Col>
                </Row>
              </CardBody>
            </Card>
            
          </Col>)}
        </Row>
      </Container>
    );

  }

  tableData = () => {
    const { length: count } = this.state.allData;
    let data = this.state.allData;


    // if (count === 0) return <p>There are no Action Plan in the database</p>;
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

    if (this.state.dataType == 'finance') {
      data = this.state.financeData
    }
    else if (this.state.dataType == 'nonfinance') {
      data = this.state.nonFinanceData
    }
    else {

    }

    return (
      <>
        <Container>
          <Row>
            <Col>
              <p>Showing {count} rows in the table</p>

              <MaterialDatatable
                title={"Supporting documents"}
                data={data}
                columns={columns}
                options={options}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <SideBar />
          <div className="main-container">
            <Container>
              <Row className="d-flex h-100">
                <div className="col-md-3">
                  <label>Select Document List to View</label>
                </div>
                <div className="col-md-4" >
                  <select className="select-box" name="options" id="options" onChange={this.handleChange}>
                    <option value="all">All</option>
                    <option value="finance">Finance</option>
                    <option value="nonfinance">Non Finance</option>
                  </select>
                </div>
                <br />
                <br />
              </Row>
              <Row>
                {this.cardDisplay()}
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
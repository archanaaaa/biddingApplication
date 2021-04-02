import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Col, Container, Row, Button, CardText } from 'reactstrap';
import "../style.css";
import config from "../../config.json";
import { uploadFile } from "../../utils/fileUpload"



export default class UploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      dataForDropDown: [],
      dropDownValue: '',
      financeData: [],
      nonfinanceData: [],
      allData: []
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ dropDownValue: (e.target.value) });
    //console.log(this.state.value);
  };


  async componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    var tempAllData = [];
    await fetch(config["baseHost"] + "/attachmenttype/finance", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({ financeData: result })
        console.log(this.state.financeData)
      })
      .catch(error => console.log('error', error));
    console.log(this.state.financeData)

    await fetch(config["baseHost"] + "/attachmenttype/nonfinance", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({ nonfinanceData: result })
        console.log(this.state.nonfinanceData)
      })
      .catch(error => console.log('error', error));
    console.log(this.state.nonfinanceData)

    console.log(...this.state.financeData)
    tempAllData.push(...this.state.financeData, ...this.state.nonfinanceData)
    this.setState({ allData: tempAllData });
    console.log(this.state.allData);
  }

  onFileChange = event => {

    this.setState({ selectedFile: event.target.files[0] });

  };

  onFileUpload = (e) => {

    e.preventDefault()
    //uploadFile(file,bucketName)->passing file and bucketName as paramaters
    uploadFile(this.state.selectedFile, "bidtora-csv-uploads")

    var formData = new FormData();
    formData.append("file", this.state.selectedFile);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", config["baseHost"] + "/upload2S3");
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    //xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-type")
    
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.status == 200) {
            console.log("Uploaded successfully")
            alert("Uploaded successfully")
        } else {
          console.log("Some Error Occurred in Upload")
          alert("Some Error Occurred in Upload")  
        }
     }

    xhr.send(formData);

    /*
    $.ajax({
      method: 'POST',
      url: config["baseHost"] + "/upload2S3",
      headers: {
          //Authorization: authToken,
          "Accept": "**"
      },
      contentType: 'multipart/form-data',
      data: formData,
      dataType: "json",
      processData: false,
      success: completeRequest,
      error: function ajaxError(jqXHR, textStatus, errorThrown) {
          console.error('Error: ', textStatus, ', Details: ', errorThrown);
          console.error('Response: ', jqXHR.responseText);
          console.log("Status: " + jqXHR.status);
          if (jqXHR.status == 401 || jqXHR.status == 403) {
              //redirectToLogin();
          } else {
              alert('An error occured:\n' + jqXHR.responseText);
          }
      }
  });
  */

  };

  uploadSingleFile(file,criteria) {
    var formData = new FormData();
    alert("criteria=="+criteria);
    formData.append("file", file);
    formData.append("criteria", criteria);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", config["baseHost"] + "/upload2S3");

    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.status == 200) {
            console.log("Uploaded successfully")
            alert("Uploaded successfully")
        } else {
          console.log("Some Error Occurred in Upload")
          alert("Some Error Occurred in Upload")  
        }
     }

    xhr.send(formData);
}

  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <CardHeader>File Details</CardHeader>
          <CardText>
            <ul>
              <li>File Name : {this.state.selectedFile.name}</li>
              <li>File Type : {this.state.selectedFile.type}</li>
              <li>Last Modified : {" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}</li>
            </ul>
          </CardText>
        </div>
      );
    }
  };

  render() {

    let temp = [];
    if (this.props.options === 'finance') {
      console.log("finance")
      temp = this.state.financeData
    }
    else if (this.props.options === 'nonfinance') {
      console.log("nonfinance")
      temp = this.state.nonfinanceData
    }
    else if (this.props.options === 'all') {
      console.log("all")
      temp = this.state.allData
    }


    return (
      <React.Fragment>
        <Container style={{ margin: "auto", width: "100%", padding: "1px" }}>
          <Row className="justify-content-center align-items-center mb-3">

            <Col md={4}>
              <select className="select-box form-control" name="attachmentType" id="attachmentType" onChange={this.handleChange}>
                {temp.map((item) =>
                  <option id={item.id} value={item.value}>{item.value}</option>)}
              </select>
            </Col>

          </Row>

          <Row className="justify-content-center align-items-center">

            <Col md={3} m={2}>
              <input type="file" onChange={this.onFileChange} />
            </Col>
            <Col md={1} m={2}>
              <Button onClick={this.onFileUpload}>Upload</Button>
            </Col>

          </Row>

        </Container>
      </React.Fragment>
    );
  }
} 
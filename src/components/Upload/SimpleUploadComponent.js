import React, { Component } from 'react';
import { Col, Container, Row, } from 'reactstrap';
import "../style.css";

export default class SimpleUploadComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileChange = event => {

    this.setState({ selectedFile: event.target.files[0] });
    console.log(event.target.files[0].name);

  };

  onFileUpload = (e) => {
    e.preventDefault()
    
    var myHeaders = new Headers();
    myHeaders.append("fileName", "ActionUpload1.csv");
    myHeaders.append("attachmentType", "Effort");

    var formdata = new FormData();
    formdata.append("file", this.state.selectedFile);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://hwt2nt6a7i.execute-api.us-east-1.amazonaws.com/dev/upload2S3", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  };


  render() {
    return (

      <Container className="d-flex h-100 w-150">

        <Row className="justify-content-center align-self-center">
          <Col md={12}>
            {this.state.selectedFile == null &&
              <div>
                {/*<label id="upload_file_text" for="upload_file">Browse...</label>*/}
                <input type="file" onChange={this.onFileChange} id="upload_file" />
              </div>
            }
            {this.state.selectedFile != null &&
              <p style={{ color: "blue" }}>{this.state.selectedFile.name}</p>
            }
            <button className="mt-2 btn btn-primary" style={{height: '50%'}} onClick={this.onFileUpload}>Upload</button>
          </Col>
          
        </Row>

      </Container>

    );
  }
}

import React, { Component } from "react";
import ReactQuill from "react-quill";
import QuillToolbar, { modules, formats } from "./DraftResponseToolbar";
import "react-quill/dist/quill.snow.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Form,
  FormGroup,
  Container,
  Col,
} from "reactstrap";
import content from "./content";
// import SideBar from "../../headerNavBar/SideBar";
// import config from "../../config.json"

export default class DraftResponse extends Component {
  constructor(props) {
    super(props);
    var tile1 =
      '<div class="content">' +
      "<h1>This is a heading</h1>" +
      "<p>This is a paragraph of text.</p>" +
      "<p><strong>Note:</strong>This is tile1.</p>" +
      "</div>";
    var tile2 =
      '<div class="content">' +
      "<h1>This is a heading</h1>" +
      "<p>This is a paragraph of text.</p>" +
      "<p><strong>Note:</strong>This is tile2.</p>" +
      "</div>";
    var tile3 =
      '<div class="content">' +
      "<h1>This is a heading</h1>" +
      "<p>This is a paragraph of text.</p>" +
      "<p><strong>Note:</strong>This is tile3.</p>" +
      "</div>";
    var tile4 =
      '<div class="content">' +
      "<h1>This is a heading</h1>" +
      "<p>This is a paragraph of text.</p>" +
      "<p><strong>Note:</strong>This is tile4.</p>" +
      "</div>";

    this.state = { text: "", tiles: [tile1, tile2, tile3, tile4] };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onPDFClick = this.onPDFClick.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }

  // onPDFClick(event) {
  //   fetch(config["baseHost"]+"export2pdf/b2-example.html");
  //   event.preventDefault();
  // }

  handleChange = (value) => {
    this.setState({ text: value });
  };

  handleSubmit = (event) => {
    let arr = this.state.tiles;
    arr.push(this.state.text);
    content.push(this.state.text);
    this.setState({ text: "", tiles: arr });
    event.preventDefault();
    console.log("Post Created!");
    alert("Post Created!");
  };

  handleUpload = (event) => {};

  handleEditClick = (e) => {
    const x = e.target.nextSibling.nextSibling.innerHTML;
    console.log(e.target.nextSibling.nextSibling.innerHTML);
    let arr = this.state.tiles;
    arr.splice(this.state.tiles.indexOf(x), 1);
    this.setState({
      text: e.target.nextSibling.nextSibling.innerHTML,
      tiles: arr,
    });
  };

  handleViewClick = (e) => {
    var newWindow = window.open();
    newWindow.document.body.innerHTML = `<html><head></head><body>${e.target.nextSibling.innerHTML}</body></html>`;
  };

  render() {
    const renderCard = content.map((content) => {
      return (
        <Card>
          <CardBody>
            <div style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </CardBody>
        </Card>
      );
    });

    return (
      <div className="wrapper">
        {/* <SideBar /> */}

        <div className="main-container">
          <Container>
            <Row>
              <Col sm={8} style={{ height: 150, overflowX: "auto", margin: 2 }}>
                <Container>
                  <Row>
                    {this.state.tiles.map((item) => {
                      let i = 0;
                      return (
                        <Col sm={4}>
                          <Card
                            className=""
                            style={{
                              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                              padding: "3px",
                              textAlign: "center",
                              fontSize: "9px",
                              textOverflow: "inherit",
                              whiteSpace: "pre-wrap",
                              overflow: "hidden",
                              width: "100%",
                              height: "140px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <button
                              onClick={(e) => this.handleEditClick(e)}
                              data-user={i++}
                              style={{
                                width: "fit-content",
                                marginTop: "20px",
                              }}
                            >
                              Edit
                            </button>
                            <button
                              onClick={(e) => this.handleViewClick(e)}
                              data-user={i++}
                              style={{ width: "fit-content", marginTop: "5px" }}
                            >
                              View
                            </button>
                            <CardBody
                              dangerouslySetInnerHTML={{
                                __html: item,
                              }}
                            ></CardBody>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Col>
              <Col md={1}>
                <center>
                  <Button onClick={this.handleUpload} color="info">
                    Upload
                  </Button>
                </center>
              </Col>
              <Col>
                <center>
                  <Button onClick={this.onPDFClick} color="info">
                    Export to PDF
                  </Button>
                </center>
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <Form>
                  <FormGroup row>
                    <div className="col-11">
                      <div className="text-editor" aria-rowcount="10">
                        <ReactQuill
                          style={{ height: 400 }}
                          theme="snow"
                          value={this.state.text}
                          onChange={this.handleChange}
                          placeholder={"Here you go..."}
                          modules={modules}
                          formats={formats}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup row>
                    <div className="col-11 mt-1">
                      <QuillToolbar />
                    </div>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={3} className="offset-lg-3">
                      <Button
                        type="submit"
                        onClick={this.handleSubmit}
                        className="offset-md-5"
                        color="info"
                      >
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Col>

              {content.size !== 0 && (
                <Col
                  md={3}
                  style={{ height: 500, overflowY: "scroll", marginTop: 2 }}
                >
                  <div>{renderCard}</div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

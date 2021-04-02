import React, { Component } from 'react';
import { CardBody, CardHeader, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col, Button, Form, FormGroup, Card, Input, Label } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import { checkCookie } from '../../utils/cookies';
//import comment from './comment';
import "../style.css";
import config from "../../config.json";
import { getBidId } from "../../utils/cookies"


export default class UpdatingOutcomes extends Component {
    constructor() {
        super();
        this.state = {
            status: "",
            lostToCompetitor: "",
            additionalComments: "",
            clientFeedback: "",
            selectedFile: null,
            comment: [],
            bidId: getBidId()
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
        
    }

    getCurrentDate(separator = '') {
        let newDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date())
        return newDate;
    }

    formattedDate() {
        let today = new Date();
        let formattedDate = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear()
        //new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date());
        //console.log(formattedDate);
        return formattedDate;
    }


    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    };

    componentDidMount() {
        this.fetchComments();
    }

    handleSubmit = (e) => {
        const user = checkCookie();
        // const comment = this.state.comment

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        //  var newComment = { bidId: this.state.bidId, status: "open", updateNotes: this.state.additionalComments, updatedBy: user, updatedDate: this.formattedDate(), clientFeedback: this.state.clientFeedback }
        var toPost = JSON.stringify(this.state)

        console.log(toPost)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: this.state,
            redirect: 'follow'
        };

        fetch(config["baseHost"] + "/bidstatus", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        this.fetchComments();
    }

    fetchComments() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        let bidId = getBidId();

        let url = config["baseHost"] + "/bidstatus/";
        if (bidId != 0) {
            url = config["baseHost"] + "/bidstatus/" + bidId;
        }
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({ comment: result });
            })
            .catch(error => console.log('error', error));
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: [e.target.value] });
    }


    render() {
        var status = "";
        const comment = this.state.comment;
        comment.sort(function(a, b)
                    {
                    if (a.updatedDate < b.updatedDate) return 1;
                    if (a.updatedDate > b.updatedDate) return -1;
                    })
        console.log(comment)
        comment.map((comment)=>{status=comment.status;return;})
        const renderCard = comment.map((comment) => {
            return (
                <div>
                    <li key={comment.id}>
                        <p>{comment.clientFeedback}<br />
                            {comment.updateNotes}<br />
                            <i><b>--{comment.updatedBy},{comment.updatedDate}</b></i></p>
                    </li>
                </div>
            );
        })
        //status = "Won"
        console.log(status);
        return (
            <>
                <div className="wrapper">
                    <SideBar />
                    <div className="main-container">

                        <div className="page-content">
                        <div className="container ">
                        <div className="row">
                        {status === "In progress" || status === "On hold" ?
                        <div className="col-12 col-md-7 pl-4">
                            <Card className="card-style">
                                <CardHeader style={{ backgroundColor: "aliceblue" }}><center><h4>Status</h4></center></CardHeader>
                                        <CardBody>
                                            <Form id="UOForm">
                                                <Container className="mb-3">
                                                    <Row className="mb-2">
                                                        
                                                        <Col md={6}>   
                                                        <FormGroup tag="fieldset">
                                                        <Card>
                                                        <CardBody style={{overflow: "auto"}}>
                                                        <FormGroup check>
                                                            <Label check>
                                                            <Input type="radio" value="Won" name="status" onClick={this.handleInputChange} />{' '}
                                                                Won
                                                            </Label>
                                                                            </FormGroup>
                                                                            <FormGroup check>
                                                                                <Label check>
                                                                                    <Input type="radio" value="PartiallyWon" name="status" onClick={this.handleInputChange} />{' '}
                                                            Partially Won
                                                            </Label>
                                                                            </FormGroup>
                                                                            <FormGroup check>
                                                                                <Label check>
                                                                                    <Input type="radio" value="Lost" name="status" onClick={this.handleInputChange} />{' '}
                                                            Lost
                                                            </Label>
                                                                            </FormGroup>
                                                                            <FormGroup check>
                                                                                <Label check>
                                                                                    <Input type="radio" value="Scrapped by client" name="status" onClick={this.handleInputChange} />{' '}
                                                            Scrapped by client
                                                            </Label>
                                                                            </FormGroup>
                                                                            <FormGroup check>
                                                                                <Label check>
                                                                                    <Input type="radio" value="Scrapped by Bid Owner" name="status" onClick={this.handleInputChange} />{' '}
                                                            Scrapped by Bid Owner
                                                            </Label>
                                                                            </FormGroup>
                                                                        </CardBody>
                                                                    </Card>
                                                                </FormGroup>
                                                            </Col>

                                                        <Col md={6}>
                                                        <FormGroup tag="fieldset">
                                                        <Card>
                                                        <CardBody style={{overflow: "auto"}}>
                                                        <FormGroup check>
                                                            <Label check>
                                                            <Input defaultChecked type="radio" value="In Progress" name="status" onChange={this.handleInputChange} />{' '}
                                                            In progress
                                                            </Label>
                                                                            </FormGroup>
                                                                            <FormGroup check>
                                                                                <Label check>
                                                                                    <Input type="radio" value="On hold" name="status" onChange={this.handleInputChange} />{' '}
                                                            On hold
                                                            </Label>
                                                                            </FormGroup>
                                                                        </CardBody>
                                                                    </Card>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                    </Container>
                                                    {this.state.status == 'Lost' || this.state.status == 'PartiallyWon' ?
                                                        <FormGroup row id='lostToCompetitor'>
                                                            <Label for="lostToCompetitor" sm={12}>Lost to Competitor</Label>
                                                            <Col sm={12}>
                                                                <Input onChange={this.handleInputChange} type="text" name="lostToCompetitor" id="lostToCompetitor" />
                                                            </Col>
                                                        </FormGroup>
                                                        :
                                                        <div>

                                                        </div>}
                                                     
                                                    <div>
                                                    <FormGroup row id="additionalComments">
                                                        <Label for="additionalComments" sm={12}>Additional Comments</Label>
                                                        <Col sm={12}>
                                                            <Input onChange={this.handleInputChange} type="textarea" name="additionalComments" id="additionalComments"/>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row id="clientFeedback">
                                                        <Label for="clientFeedback" sm={12}>Client Feedback</Label>
                                                        <Col sm={12}>
                                                            <Input onChange={this.handleInputChange} type="textarea" name="clientFeedback" id="clientFeedback"/>
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row >
                                                        <Col className="d-flex h-100">
                                                            <div className="m-1 justify-content-center align-self-center">
                                                                <input type="file" onChange={this.onFileChange} />
                                                            </div>
                                                        </Col>
                                                    </FormGroup>
                                                    </div>
                                                     
                                                    <FormGroup row className="d-flex h-100">
                                                        <Col className="justify-content-center align-self-center">

                                                            <Button style={{ float: "right" }} onClick={this.handleSubmit}>Submit</Button>

                                                        </Col>
                                                    </FormGroup>


                                                </Form>
                                            </CardBody>
                                        </Card>

                                    </div>
                                    :
                                    <div></div> }
                                    
                                    <div className="col-auto pl-4">
                                        {comment.length !== 0 &&
                                            <Card className="card-style">
                                                <CardHeader style={{ backgroundColor: "aliceblue" }}><center><h4>Status updates</h4></center></CardHeader>
                                                <CardBody style={{ overflow: "auto", height: "610px" }} >
                                                    <CardText className="mt-3">

                                                        <ul>

                                                            {renderCard}

                                                        </ul>

                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
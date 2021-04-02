import React,{Component} from 'react';
import { CardBody, Card, CardTitle } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./style.css";

import SideBar from "../headerNavBar/SideBar";
import config from "../config.json";


export default class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            toDisplay : [],
            onhold : "",
            won : "",
            inprogress : "",
            scrapped : "",
            completed : "",
            priority : "",
        }
        
    }

    componentDidMount(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(config["baseHost"] + "/dashboard", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({
                    onhold : result.onhold,
                    won : result.won,
                    inprogress : result.inprogress,
                    scrapped : result.scrapped,
                    completed : result.completed,
                    priority : result.priority,
                })
                
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const total = this.state.onhold + this.state.inprogress + this.state.scrapped + this.state.completed
        console.log(total)
        
        const won = this.state.won , onhold = this.state.onhold , scrapped = this.state.scrapped ,
        wonPercentage = (won/total)*100, onholdPercentage = (onhold/total)*100 , scrappedPercentage = (scrapped/total)*100,
        wonText = won+"/"+total+" Won", onholdText = onhold+"/"+total+" On hold",  scrappedText = scrapped+"/"+total+" Scrapped";
        console.log(won+wonPercentage+wonText)

        return (
            <div className="wrapper">
            <SideBar />
            <div className="main-container">
                <div className="page-content">
                <div className="container ">
                <div className="row">
                    <div className="col-md-6 m-2">
                        <Card className="card-style shadow">
                        <CardTitle><h5 style={{color : "#008B8B" ,textShadow: "0 0 2px"}}><i style={{color : "lightblue"}} class="fa fa-calendar fa-lg"></i> Overview</h5></CardTitle>
                            <CardBody> 
                                <div className="row">
                                    <div className="col-md-2">
                                    <i style={{color : "green"}} class="fa fa-check-circle fa-5x"></i>
                                    </div>
                                    <div className="col-md-4" style={{color : "green"}}>
                                    <h2>{this.state.completed}</h2>
                                    <h6>Bids completed</h6>
                                    </div>
                                    <div className="col-md-2">
                                    <i style={{color : "#FFBF00"}} class="fa fa-rocket fa-5x"></i>
                                    </div>
                                    <div className="col-md-4" style={{color : "#FFBF00"}}>
                                    <h2>{this.state.inprogress}</h2>
                                    <h6>In Progress</h6>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 m-2">
                        <Card className="card-style shadow">
                        <CardTitle><h5 style={{color : "#008B8B" ,textShadow: "0 0 2px"}}><i style={{color : "lightblue"}} class="fa fa-exclamation-circle fa-lg"></i> Priority</h5></CardTitle>
                            <CardBody>
                                <div className="row">
                                    <div className="col-6">
                                    <i style={{color : "#1E90FF",float : "right"}} class="fa fa-hourglass-half fa-5x"></i>
                                    </div>
                                    <div className="col-6" style={{color : "#1E90FF"}}>
                                    <h2>{this.state.priority}</h2>
                                    <h6>Bids expiring</h6>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <Card className="col-md-11 card-style shadow m-3">
                        <CardTitle><h5 style={{color : "#008B8B" ,textShadow: "0 0 2px"}}><i style={{color : "lightblue"}} class="fa fa-balance-scale fa-lg"></i> Performance</h5></CardTitle>
                            <CardBody>
                                <div className="row">
                                    <div className="col-md-3 m-4" style={{color : "green"}}>
                                    <CircularProgressbar value={wonPercentage} text={`${wonText}`} styles={{ path: {stroke: 'green'},text: {fill: 'green',fontSize: '10px'}}}/>
                                    
                                    </div>
                                    <div className="col-md-3 m-4" style={{color : "#FFBF00"}}>
                                   <CircularProgressbar value={onholdPercentage} text={`${onholdText}`}  styles={{ path: {stroke: 'FFBF00'},text: {fill: 'FFBF00',fontSize: '10px'}}}/> 
                                                                     
                                    </div>
                                    <div className="col-md-3 m-4" style={{color : "red"}}>
                                   <CircularProgressbar value={scrappedPercentage} text={`${scrappedText}`} styles={{ path: {stroke: 'red'},text: {fill: 'red',fontSize: '10px'}}}/>
                                                                       
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                </div>
                </div>
            </div>
            </div>
            </div>

            );
        }
    }
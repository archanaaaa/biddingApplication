import React, { Component } from 'react';
import { Container, Row, Card, CardHeader } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import "../style.css";
import UploadComponent from '../Upload/UploadComponent';

export default class MasterData extends Component {

    constructor() {
        super();
        this.state = {
            page: 'masterData',
            options: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ options: (e.target.value) });
        console.log(this.state.options);
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <SideBar />
                    <div className="main-container">
                        <Container>
                            <Row>
                                <select className="select-box" name="options" id="options" onChange={this.handleChange}>

                                    <option value="finance">Finance</option>
                                    <option value="nonfinance">Non Finance</option>
                                    <option value="all">All</option>

                                </select>
                            </Row>

                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

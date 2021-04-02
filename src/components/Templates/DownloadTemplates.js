import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, Table, Card, CardBody, CardHeader, CardTitle } from 'reactstrap';
import SideBar from "../../headerNavBar/SideBar";
import "../style.css";
import MaterialDatatable from "material-datatable";
import config from "../../config.json";

export default class DownloadTemplates extends Component {
  constructor() {
    super();
    this.state = {
      data : []
    }
  }

  async componentDidMount() {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    await fetch(config["baseHost"] + "/templates", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        //data.push(...result);
        this.setState({ data : result });
      })
      .catch(error => console.log('error', error));

    }
  tableData = () => {
    const { length: count } = this.state.data;
    const { data } = this.state;

    // if (count === 0) return <p>There are no Action Plan in the database</p>;
    const columns = [
      {
        name: 'Name',
        field: 'name'
      },
      {
        name: 'Description',
        field: 'description'
      },
      {
        name: 'Version',
        field: 'version'
      },
      {
        name: 'File Location',
        field: 'fileLocation'
      },
    ];

    const options = {
      filterType: 'checkbox',
    };

    return (
      <>
        <Container>
          <Row>
            <Col>
              <p>Showing {count} rows in the table</p>

              <MaterialDatatable
                title={"Download Templates"}
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
              <Row>
                {/*this.tableData()*/}
                <Card>
                  <CardBody>
                  <CardTitle><center><b><h2>Download Templates</h2></b></center></CardTitle>
                  <Table> 
                    <thead>
                        <tr>
                          <th hidden="true">Template ID</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>Version</th>
                          <th>Download Template </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data.map((item) => 
                        <tr>
                          <th hidden="true" scope="row">{item.templateId}</th>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td>{item.version}</td>
                          <td><a href={item.fileLocation}><i className="fa fa-download fa-lg"></i> {item.name}</a></td>
                        </tr>
                      )}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}


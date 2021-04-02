import React, { Component } from "react";
import { Chart } from "react-google-charts";
import SideBar from "../../headerNavBar/SideBar";
import ".././style.css";

class PieChartSample extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <SideBar />
          <div className="main-container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-5">
                <Chart
                  width={"500px"}
                  height={"400px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Bid Status", "Count"],
                    ["Won", 11],
                    ["Delayed", 5],
                    ["In Progress", 18],
                    ["Not Started", 7],
                  ]}
                  options={{
                    title: "Bid Activities",
                  }}
                  rootProps={{ "data-testid": "1" }}
                />
              </div>
              {/* <div className="col-md-6">
                <Chart
                  width={"800px"}
                  height={"400px"}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Language", "Speakers (in millions)"],
                    ["Assamese", 13],
                    ["Bengali", 83],
                    ["Bodo", 1.4],
                    ["Dogri", 2.3],
                    ["Gujarati", 46],
                    ["Hindi", 300],
                    ["Kannada", 38],
                    ["Kashmiri", 5.5],
                    ["Konkani", 5],
                    ["Maithili", 20],
                    ["Malayalam", 33],
                    ["Manipuri", 1.5],
                    ["Marathi", 72],
                    ["Nepali", 2.9],
                    ["Oriya", 33],
                    ["Punjabi", 29],
                    ["Sanskrit", 0.01],
                    ["Santhali", 6.5],
                    ["Sindhi", 2.5],
                    ["Tamil", 61],
                    ["Telugu", 74],
                    ["Urdu", 52],
                  ]}
                  options={{
                    title: "Bid Category",
                    legend: "none",
                    pieSliceText: "label",
                    slices: {
                      4: { offset: 0.2 },
                      12: { offset: 0.3 },
                      14: { offset: 0.4 },
                      15: { offset: 0.5 },
                    },
                  }}
                  rootProps={{ "data-testid": "5" }}
                />
              </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PieChartSample;

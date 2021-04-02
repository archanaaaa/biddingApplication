import React, { Component } from "react";
class PaginationValue extends Component {
  state = {
    noOfRows: 5,
  };
  handlePageRowCount = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: parseInt(e.target.value) });
    this.props.onSelectRowsToDisplay(parseInt(e.target.value));
  };

  render() {
    return (
      <select name="noOfRows" id="noOfRows" onChange={this.handlePageRowCount}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    );
  }
}
export default PaginationValue;

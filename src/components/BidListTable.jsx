import React, { Component } from "react";
import BidListActions from "./common/BidListActions";
import Table from "./common/table";

class BidListTable extends Component {

  columns = [
    { path: "bidName", label: "Bid Name" },
    { path: "bidOwner", label: "Bid Owner" },
    { path : "cost", label : "Cost" },
    { path: "bidType", label: "Bid Type" },
    { path: "expectedDate", label: "Target Date" },
    { path: "bidStatus", label: "Bid Status" },
    { key: "action", content: <BidListActions />, label: "Actions" },

  ];

  render() {
    const { bids, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={bids}
      />
    );
  }
}

export default BidListTable;

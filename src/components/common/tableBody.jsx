import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content;
    return _.get(item, column.path);
  };

  createKey(column) {
    return column.path || column.content;
  }
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td key={this.createKey(column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

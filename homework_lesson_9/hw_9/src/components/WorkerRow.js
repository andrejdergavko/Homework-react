import React from "react";

function WorkerRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.contractor ? "yes" : "no"}</td>
    </tr>
  );
}

export default WorkerRow;

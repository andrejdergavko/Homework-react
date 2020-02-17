import React from "react";

function WorkerRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.position}</td>
      <td>{props.contractor ? "yes" : "no"}</td>
      <td>
        <button onClick={props.handlers.deleteHandler}>&#10006;</button>
        <button onClick={props.handlers.changeHandler}>&#9998;</button>
      </td>
    </tr>
  );
}

export default WorkerRow;

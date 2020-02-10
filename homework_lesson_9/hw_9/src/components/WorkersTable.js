import React from "react";

import WorkerRow from "./WorkerRow";

function WorkersTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Contractor</th>
        </tr>
      </thead>
      <tbody>
        {props.workers.map((item, i) => {
          return <WorkerRow key={i} name={item.name} position={item.position} contractor={item.contractor} />;
        })}
      </tbody>
    </table>
  );
}

export default WorkersTable;

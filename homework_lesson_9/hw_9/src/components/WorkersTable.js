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
          <th></th>
        </tr>
      </thead>

      <tbody>
        {props.workers.map(worker => {
          return (
            <WorkerRow
              key={worker.id}
              name={worker.name}
              position={
                props.positions.find(position => {
                  return worker.position === position.value;
                }).label
              }
              contractor={worker.contractor}
              handlers={props.handlers[worker.id]}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default WorkersTable;

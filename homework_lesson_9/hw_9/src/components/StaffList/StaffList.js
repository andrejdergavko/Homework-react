import React, { Component } from "react";

import "./StaffList.css";

import WorkersTable from "../WorkersTable";
import WorkerCreator from "../WorkerCreator/WorkerCreator";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: []
    };

    this.addWorker = this.addWorker.bind(this);
  }

  addWorker(worker) {
    this.setState(state => {
      state.workers.push(worker);
      return {
        workers: state.workers
      };
    });
  }

  render() {
    return (
      <div className="staff-list">
        <WorkerCreator addWorker={this.addWorker} />
        <WorkersTable workers={this.state.workers} />
      </div>
    );
  }
}

export default StaffList;

import React, { Component } from "react";

import "./App.css";

import WorkersTable from "./components/WorkersTable";
import WorkerCreator from "./components/WorkerCreator/WorkerCreator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [],
      handlers: {},
      editableWorker: null,
      editorMode: false,
      positions: [
        { value: "junior", label: "junior developer" },
        { value: "middle", label: "middle developer" },
        { value: "senior", label: "senior developer" }
      ]
    };

    this.addWorker = this.addWorker.bind(this);
  }

  addWorker(worker) {
    if (this.state.editorMode) {
      this.setState(state => {
        const workers = [...state.workers];

        this.replaceItemById(workers, worker.id, worker);

        return {
          workers,
          editableWorker: null,
          editorMode: false
        };
      });
    } else {
      this.setState(state => {
        const workers = [...state.workers, worker];
        const handlers = { ...state.handlers };

        handlers[worker.id] = {
          changeHandler: this.changeWorker.bind(this, worker.id),
          deleteHandler: this.deleteWorker.bind(this, worker.id)
        };

        return {
          workers,
          handlers
        };
      });
    }
  }

  changeWorker(id) {
    this.setState(state => {
      return {
        editableWorker: this.findById(state.workers, id),
        editorMode: true
      };
    });
  }

  deleteWorker(id) {
    this.setState(state => {
      const workers = [...state.workers];
      const handlers = { ...state.handlers };

      this.deleteById(workers, id);
      delete handlers[id];

      return {
        workers,
        handlers
      };
    });
  }

  deleteById(container, id) {
    container.forEach((item, i) => {
      if (item.id === id) {
        container.splice(i, 1);
      }
    });
  }

  findById(container, id) {
    return container.find(item => {
      return item.id === id;
    });
  }

  replaceItemById(container, id, element) {
    container.forEach((item, i) => {
      if (item.id === id) {
        container[i] = element;
      }
    });
  }

  render() {
    return (
      <div className="staff-list">
        <WorkerCreator
          addWorker={this.addWorker}
          positions={this.state.positions}
          editorMode={this.state.editorMode}
          editableWorker={this.state.editableWorker}
        />
        <WorkersTable
          workers={this.state.workers}
          positions={this.state.positions}
          handlers={this.state.handlers}
        />
      </div>
    );
  }
}

export default App;

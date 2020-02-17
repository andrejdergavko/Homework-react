import React, { Component } from "react";
import nanoid from "nanoid";

import "./WorkerCreator.css";

class WorkerCreator extends Component {
  constructor(props) {
    super(props);

    this.defaultValues = {
      name: "",
      position: "junior",
      contractor: false
    };

    this.state = {
      name: this.defaultValues.name,
      position: this.defaultValues.position,
      contractor: this.defaultValues.contractor
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.addWorker({
      id: this.props.editorMode ? this.props.editableWorker.id : nanoid(),
      name: this.state.name,
      position: this.state.position,
      contractor: this.state.contractor
    });

    this.setDefaultValues();
  }

  setDefaultValues() {
    this.setState({ ...this.defaultValues });
  }

  componentDidUpdate(prevProps) {
    const { editorMode, editableWorker } = this.props;

    if (prevProps !== this.props && editorMode) {
      this.setState(() => {
        return {
          name: editableWorker.name,
          position: editableWorker.position,
          contractor: editableWorker.contractor
        };
      });
    }
  }

  render() {
    const options = this.props.positions.map(item => {
      return (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      );
    });

    return (
      <form className="worker-creator" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className="form-control"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Position
          <select
            className="form-control"
            name="position"
            value={this.state.position}
            onChange={this.handleInputChange}
          >
            {options}
          </select>
        </label>

        <label>
          Contractor
          <input
            type="checkbox"
            name="contractor"
            checked={this.state.contractor}
            onChange={this.handleInputChange}
          />
        </label>

        <input
          className="btn btn-primary"
          type="submit"
          value={this.props.editorMode ? "Change" : "Add"}
        />
      </form>
    );
  }
}

export default WorkerCreator;

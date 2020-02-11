import React, { Component } from "react";
import nanoid from 'nanoid'

import "./WorkerCreator.css";

class WorkerCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "junior",
      contractor: false,
      positions: ['junior', 'middle', 'senior']
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setDefaultValues = this.setDefaultValues.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addWorker({
      key: nanoid(),
      name: this.state.name,
      position: this.state.position,
      contractor: this.state.contractor
    });

    this.setDefaultValues()
  }

  setDefaultValues() {
    this.setState({
      name: "",
      position: "junior",
      contractor: false
    });
  }

  render() {
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
            {this.state.positions.map((item, i) => {
              return <option key={i} value={item}>{item}</option>
            })}
          </select>
        </label>

        <label>
          Contractor
          <input type="checkbox" name="contractor" checked={this.state.contractor} onChange={this.handleInputChange} />
        </label>

        <input className="btn btn-primary" type="submit" value="Add" />
      </form>
    );
  }
}

export default WorkerCreator;




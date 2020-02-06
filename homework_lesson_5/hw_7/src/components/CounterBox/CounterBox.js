import React, { Component } from "react";
import Counter from "../Counter/Counter";

class CounterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.params.map(item => {
        return item.startCount ? item.startCount : 0;
      })
    };
  }

  hendleChangeCount(id, event) {
    const params = this.props.params[id];
    const action = event.target.dataset.action;

    const stepUp = params.stepUp ? params.stepUp : 1;
    const stepDown = params.stepDown ? params.stepDown : -1;
    const limitUp = params.limitUp ? params.limitUp : Infinity;
    const limitDown = params.limitDown ? params.limitDown : -Infinity;

    const newValue =
      this.state.values[id] + (action === "increase" ? stepUp : stepDown);

    if (this.isValueValid(newValue, limitUp, limitDown)) {
      this.setState(state => {
        state.values[id] = newValue;
        return {
          values: state.values
        };
      });
    }
  }

  isValueValid(value, limitUp, limitDown) {
    return value <= limitUp && value >= limitDown
  }

  render() {
    const counters = this.props.params.map((item, i) => {
      return (
        <Counter
          key={i}
          value={this.state.values[i]}
          hendleChangeCount={this.hendleChangeCount.bind(this, i)}
        />
      );
    });

    const countSum = this.state.values.reduce((previous, current) => {
      return previous + current;
    }, 0);

    return (
      <div>
        <p>{countSum}</p>
        {counters}
      </div>
    );
  }
}

export default CounterBox;

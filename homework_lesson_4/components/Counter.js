

class Counter {
  constructor(props) {
    this.startCount = props.startCount === undefined ? 0 : props.startCount;
    this.stepUp = props.stepUp === undefined ? 1 : props.stepUp;
    this.stepDown = props.stepDown === undefined ? 1 : props.stepDown;
    this.limitUp = props.limitUp === undefined ? Infinity : props.limitUp;
    this.limitDown =
      props.limitDown === undefined ? -Infinity : props.limitDown;

    this.count = this.startCount;
  }

  increaseCounter() {
    const newCount = this.count + this.stepUp;

    if (newCount <= this.limitUp) {
      this.count = newCount;
      this.refreshCount();
    }
  }

  decreaseCounter() {
    const newCount = this.count - this.stepDown;

    if (newCount >= this.limitDown) {
      this.count = newCount;
      this.refreshCount();
    }
  }

  refreshCount() {
    document.getElementById("countBox").innerHTML = this.count;
  }

  render() {
    const buttonUp = document.createElement("button");
    buttonUp.append("+");
    buttonUp.addEventListener("click", this.increaseCounter.bind(this));

    const buttonDown = document.createElement("button");
    buttonDown.append("-");
    buttonDown.addEventListener("click", this.decreaseCounter.bind(this));

    const countBox = document.createElement("div");
    countBox.id = "countBox";
    countBox.append(this.count);

    const wrapper = document.createElement("div");
    wrapper.append(...[buttonUp, countBox, buttonDown]);

    return wrapper;
  }
}

export { Counter };

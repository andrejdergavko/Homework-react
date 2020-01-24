class Counter {
  constructor(props = {}) {
    this.startCount = props.startCount === undefined ? 0 : props.startCount;
    this.stepUp = props.stepUp === undefined ? 1 : props.stepUp;
    this.stepDown = props.stepDown === undefined ? 1 : props.stepDown;
    this.limitUp = props.limitUp === undefined ? Infinity : props.limitUp;
    this.limitDown = props.limitDown === undefined ? -Infinity : props.limitDown;

    this.count = this.startCount;
  }

  increaseCounter(event) {
    const newCount = this.count + this.stepUp;
    const countDisplay = event.target.parentElement.querySelector(".count__count-display");

    if (newCount <= this.limitUp) {
      this.count = newCount;
      this.refreshCount(countDisplay);
    }
  }

  decreaseCounter(event) {
    const newCount = this.count - this.stepDown;
    const countDisplay = event.target.parentElement.querySelector(".count__count-display");

    if (newCount >= this.limitDown) {
      this.count = newCount;
      this.refreshCount(countDisplay);
    }
  }

  refreshCount(elem) {
    elem.innerHTML = this.count;
  }

  render() {
    const buttonUp = document.createElement("button");
    buttonUp.className = "count__button count__button_up";
    buttonUp.append("+");
    buttonUp.addEventListener("click", this.increaseCounter.bind(this));

    const buttonDown = document.createElement("button");
    buttonDown.className = "count__button count__button_down";
    buttonDown.append("-");
    buttonDown.addEventListener("click", this.decreaseCounter.bind(this));

    const countDisplay = document.createElement("div");
    countDisplay.className = "count__count-display";
    countDisplay.append(this.count);

    const wrapper = document.createElement("div");
    wrapper.className = "count";
    wrapper.append(buttonUp, countDisplay, buttonDown);

    return wrapper;
  }
}

export { Counter };

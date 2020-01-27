class Counter {
  constructor(props = {}) {
    this.startCount = props.startCount;
    this.stepUp = props.stepUp === undefined ? 1 : props.stepUp;
    this.stepDown = props.stepDown === undefined ? 1 : props.stepDown;
    this.limitUp = props.limitUp === undefined ? Infinity : props.limitUp;
    this.limitDown = props.limitDown === undefined ? -Infinity : props.limitDown;
    this.onCountChange = props.onCountChange;

    this.count = this.startCount;
  }

  increaseCounter(event) {
    const newCount = this.count + this.stepUp;

    if (newCount <= this.limitUp) {
      const countDisplay = event.target.parentElement.querySelector(".count__count-display");
      this.refreshCount(countDisplay, newCount);
    }
  }

  decreaseCounter(event) {
    const newCount = this.count - this.stepDown;

    if (newCount >= this.limitDown) {
      const countDisplay = event.target.parentElement.querySelector(".count__count-display");
      this.refreshCount(countDisplay, newCount);
    }
  }

  refreshCount(elem, newCount) {
    this.count = newCount;
    elem.innerHTML = this.count;
    this.onCountChange(this.count);
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

export default Counter;

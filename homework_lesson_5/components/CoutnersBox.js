import  Counter from "./Counter.js";

class CoutnersBox {
  constructor() {
    this.counterValues = [0, 5, 7];
    this.sumCounters = this.getSumCounters()
  }

  handleCountChange(i, value) {
    this.counterValues[i] = value;

    this.refreshSumCounters();
  }

  refreshSumCounters() {
    this.sumCounters = this.getSumCounters();

    document.querySelector(".counter-box__sum-counts").innerHTML = this.sumCounters;
  }

  getSumCounters() {
    return this.counterValues.reduce((sum, item) => {
      return sum + item;
    }, 0);
  }

  render() {
    const count1 = new Counter({
      startCount: this.counterValues[0],
      stepUp: 2,
      stepDown: 10,
      limitUp: 20,
      limitDown: -20,
      onCountChange: this.handleCountChange.bind(this, 0)
    });
    const count2 = new Counter({
      startCount: this.counterValues[1],
      stepDown: 10,
      limitDown: -20,
      onCountChange: this.handleCountChange.bind(this, 1)
    });
    const count3 = new Counter({
      startCount: this.counterValues[2],
      onCountChange: this.handleCountChange.bind(this, 2)
    });

    const summCounts = document.createElement("p");
    summCounts.className = "counter-box__sum-counts";
    summCounts.innerHTML = this.sumCounters;

    const counterBox = document.createElement("div");
    counterBox.append(summCounts, count1.render(), count2.render(), count3.render());

    return counterBox;
  }
}

export default CoutnersBox;

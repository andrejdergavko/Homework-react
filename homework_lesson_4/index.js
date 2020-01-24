import { Counter } from "./components/Counter.js";

const count1 = new Counter({
  startCount: 10,
  stepUp: 2,
  stepDown: 10,
  limitUp: 20,
  limitDown: -20
});

const count2 = new Counter({
  startCount: 10,
  stepDown: 10,
  limitDown: -20
});

const count3 = new Counter();

document.getElementById("root").append(count1.render(), count2.render(), count3.render());


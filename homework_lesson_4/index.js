import { Counter } from "./components/Counter.js";
import './components/Counter.css'

const o = new Counter({
  startCount: 10,
  stepUp: 2,
  stepDown: 10,
  limitUp: 20,
  limitDown: -20
});
console.log(o.render());

document.getElementById('root').append(o.render())


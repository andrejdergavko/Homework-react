import React from "react";
import CounterBox from "./components/CounterBox/CounterBox";


function App() {
  return (
    <CounterBox params={[
      {
        startCount: 15,
        stepUp: 1,
        stepDown: -1,
        limitUp: 20,
        limitDown: -20
      },
      {
        startCount: 10,
        stepUp: 2,
        stepDown: -2,
      },
      {}
    ]} />
  )
}

export default App;

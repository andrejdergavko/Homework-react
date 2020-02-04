import React from "react";
import  './Counter.css'

function Counter(props) {
  return (
    <div className='counter' data-id={props.id}>
      <button className='counter__button counter__button_increase' onClick={props.hendleChangeCount} data-action="increase">
        +
      </button>
      <p className='counter__value'>{props.value}</p>
      <button className='counter__button counter__button_decrease' onClick={props.hendleChangeCount} data-action="decrease">
        -
      </button>
    </div>
  );
}

export default Counter;

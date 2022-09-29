import React from 'react';
import { LikeCountOnChangeActionCreator } from '../Redux/ProfileReduser';
const Reduse = "REDUCE";
const Increase = "INCREASE";


function Counter(props) {
    function Increment(e) {
      props.dispatch(LikeCountOnChangeActionCreator(Increase,props.id));
      e.target.disabled=1;
    } 
    function Decrement(e) {
      props.dispatch(LikeCountOnChangeActionCreator(Reduse,props.id));
      e.target.disabled=1;
    } 
    return (
      <div>
        <h3>Лайков {props.like_count}</h3>
        <button onClick={Increment}>increment</button>
        <button onClick={Decrement}>decrement</button>
      </div>
    );
  }
  export default Counter;
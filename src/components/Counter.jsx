import React from 'react';

function Counter(props) {
  
    function Increment() {
      props.dispatch({ type:"LIKE-COUNT-ON-CHANGE", change:"INCREASE", id: props.id});
    } 
    function Decrement() {
      props.dispatch({ type:"LIKE-COUNT-ON-CHANGE", change:"REDUCE", id: props.id});
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
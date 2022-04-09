import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let RenderEntireTree = (state) => {
  ReactDOM.render(
    <App 
    state={state} 
    dispatch={store.dispatch.bind(store)}
       />,
 document.getElementById('root')
);
}
RenderEntireTree(store.getState());

store.subscribe(RenderEntireTree);




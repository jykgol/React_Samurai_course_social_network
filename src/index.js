import store from './Redux/redux-store';
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

store.subscribe(() => {
    let state = store.getState();
    RenderEntireTree(state);
});




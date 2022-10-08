import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext, { Provider } from './StoreContext';


let RenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
RenderEntireTree();

store.subscribe(() => {
    RenderEntireTree();
});




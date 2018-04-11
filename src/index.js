import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todoApp from './reducers';

let preloadedState = { 
    todos: [{}],
    grid: [
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        },
        {
            chars: [
                { text: 'A', confirmed: false, selected: false, hovered: false },
                { text: 'B', confirmed: false, selected: false, hovered: false },
                { text: 'C', confirmed: false, selected: false, hovered: false },
                { text: 'D', confirmed: false, selected: false, hovered: false },
                { text: 'E', confirmed: false, selected: false, hovered: false },
                { text: 'F', confirmed: false, selected: false, hovered: false },
                { text: 'G', confirmed: false, selected: false, hovered: false }
            ]
        }
    ]
}

const logger = createLogger();
const store = createStore(
    todoApp,
    preloadedState,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

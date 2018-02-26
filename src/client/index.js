import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { consolidateStreamedStyles } from 'styled-components'

import App from '../shared/containers/App'
import todoApp from '../shared/reducers'

consolidateStreamedStyles();

const preloadedState = window.__PRELOADED_STATE__
console.log(preloadedState)
delete window.__PRELOADED_STATE__
const store = createStore(todoApp, preloadedState)

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 *
 * @param Component React component that should be rendered
 */
const render = (Component, store) => {
    hydrate(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('react-root')
    );
};

render(App, store);

/**
 * This script provides hot module reloading in development mode.
 */
if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('../shared/containers/App', () => {
        const App = require('../shared/containers/App').default;
        render(App, store);
    });
}

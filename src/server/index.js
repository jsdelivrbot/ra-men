import qs from 'qs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { fetchCounter } from '../shared/counter'

import App from '../shared/App';

/**
 * Provides the server side rendered app. In development environment, this method is called by
 * `react-hot-server-middleware`.
 *
 * This method renders the ejs template `public/views/index.ejs`.
 *
 * @param clientStats Parameter passed by hot server middleware
 */
export default ({ clientStats }) => async (req, res) => {

    var renderFullPage = function (html, preloadedState) {
        return `
          <!doctype html>
          <html>
            <head>
              <title>Redux Universal Example</title>
            </head>
            <body>
              <div id="root">${html}</div>
              <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
              </script>
              <script src="/static/bundle.js"></script>
            </body>
          </html>
          `
      }

    fetchCounter(apiResult => {
        const params = qs.parse(req.query)
        const counter = parseInt(params.counter, 10) || 0
        // Compile an initial state
        let preloadedState = { counter }
     
        // Create a new Redux store instance
        const store = createStore(App, preloadedState)
     
        const appString = ReactDOM.renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Grab the initial state from our Redux store
        const finalState = store.getState()
         
        // Send the rendered page back to the client
        res.send(renderFullPage(html, finalState))

        // const chunkNames = flushChunkNames();
        // const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

        // res.render('index', {
        //     appString,
        //     js,
        //     styles,
        //     cssHash
        // });
    });
};

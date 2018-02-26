import qs from 'qs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToNodeStream } from 'react-dom/server'
import styled, { ServerStyleSheet } from 'styled-components'

import { fetchCounter } from '../shared/counter'
import todoApp from '../shared/reducers'
import App from '../shared/containers/App';

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
          <html lang="en">
            <head>
              <title>word-search</title>
            </head>
            <body>
              <div id="react-root">${html}</div>
              <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
              </script>
              <script src="bootstrap.js"></script>
              <script src="app.client.js"></script>
            </body>
          </html>
          `
      }

    const params = qs.parse(req.query)
    fetchCounter(params.id, apiResult => {

        // Compile an initial state
        let preloadedState = { 
            todos: apiResult,
            grid: [
                {
                    chars: [
                        { text: 'A', confirmed: true, selected: false, hovered: false },
                        { text: 'B', confirmed: false, selected: false, hovered: false },
                        { text: 'C', confirmed: false, selected: true, hovered: false },
                        { text: 'D', confirmed: false, selected: false, hovered: true }
                    ]
                }
            ]
        }
     
        // Create a new Redux store instance
        const store = createStore(todoApp, preloadedState)

        // Grab the initial state from our Redux store
        const finalState = store.getState()
         
        // Send the rendered page back to the client
        // res.send(renderFullPage(appString, finalState))

        // streaming response
        res.write('<!DOCTYPE html><html lang="en"><head><title>word-search</title></head><body><div id="react-root">')
        const sheet = new ServerStyleSheet()
        const jsx = sheet.collectStyles(<Provider store={store}><App /></Provider>)
        // Interleave the HTML stream with <style> tags
        const stream = sheet.interleaveWithNodeStream(
          renderToNodeStream(jsx)
        )
        stream.pipe(res, { end: false })
        stream.on('end', () => res.end(`</div><script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}
            </script>
            <script src="bootstrap.js"></script>
            <script src="app.client.js"></script>
            </body>
        </html>`));

    });
};

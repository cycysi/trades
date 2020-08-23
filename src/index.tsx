import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, StateMachineProvider } from 'little-state-machine'
import { Global } from '@emotion/core'
import { css } from 'twin.macro'
import App from 'App'
import * as serviceWorker from './serviceWorker'

import 'tailwindcss/dist/base.min.css'

import csgo from 'data/high-csgo.json'
import dota from 'data/high-dota.json'
import tf2 from 'data/high-tf2.json'

createStore({
  selectedItem: [],
  csgo,
  dota,
  tf2,
  all: [],
})

ReactDOM.render(
  <React.Fragment>
    <Global
      styles={css`
        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #0b171b;
        }
      `}
    />
    <BrowserRouter>
      <StateMachineProvider>
        <App />
      </StateMachineProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

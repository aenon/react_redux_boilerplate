import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import store from './stores'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

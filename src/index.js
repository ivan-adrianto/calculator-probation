import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import globalStore from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

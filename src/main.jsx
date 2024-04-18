import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider, useDispatch } from 'react-redux'
import { fetchUsers } from './components/Users/features/userSlice.js'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

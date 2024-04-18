import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider, useDispatch } from 'react-redux'
import { fetchUsers } from './components/Users/features/userSlice.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

store.dispatch(fetchUsers())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </Router>
  </Provider>
)
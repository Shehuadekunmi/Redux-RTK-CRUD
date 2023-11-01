import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './App/Store.jsx';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './Features/Posts/PostSlice.jsx';
import { usersApiSlice } from './Features/Users/Userslice.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>

  </React.StrictMode>,
)

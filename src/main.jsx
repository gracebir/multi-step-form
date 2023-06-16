import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppProviver } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProviver>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviver>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Productprovider } from './Context/Productcontext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Productprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Productprovider>
    
    
  </React.StrictMode>,
)

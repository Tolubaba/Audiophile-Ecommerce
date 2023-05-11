import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Productprovider } from './Context/Productcontext'
import { CartProvider } from './Context/cartcontext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Productprovider>
      <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
    </Productprovider>
    
    
  </React.StrictMode>,
)

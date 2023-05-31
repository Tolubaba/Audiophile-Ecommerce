import React from 'react'
import { Route,Routes } from 'react-router-dom'  
import Navbar from './Component/Navbar';
import { Home,Headphones,Speakers,Earphones, Singleproductdetail,Checkout} from './Pages'
import { Cart } from './Component';
import Mypage from './Pages/Mypage'
import { useState } from 'react';
import { useCartContext } from './Context/cartcontext';






const App = () => {

  const  { cartopen,opencart}=useCartContext()

  
  return (
    
  <>
  <Navbar cartopen={cartopen}/>
  {opencart && <Cart/>}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/headphones' element={<Headphones/>}/>
    <Route path='/earphones' element={<Earphones/>}/>
    <Route path='/speakers' element={<Speakers/>}/>
    <Route path='/product/:id' element={<Singleproductdetail/>}/>
    <Route path='/checkout' element={<Checkout/>}/>


  </Routes>


  </>    
  
  )
}

export default App

import React from 'react'
import { Route,Routes } from 'react-router-dom'  
import Navbar from './Component/Navbar';
import { Home,Headphones,Speakers,Earphones, Singleproductdetail,Checkout} from './Pages'
import { Cart,Thankyou } from './Component';
import Mypage from './Pages/Mypage'
import { useState,useEffect } from 'react';
import { useCartContext } from './Context/cartcontext';
import { useProductContext } from './Context/Productcontext';
const App = () => {

  const  { cartopen,opencart,cart}=useCartContext();
  const {thanks}=useProductContext();
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  };

  
  return (
    
  <>
  <ScrollToTop/>
  <Navbar cartopen={cartopen}/>
  {opencart && <Cart/>}
   {(thanks && <Thankyou/>) }
  
  
  
  
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

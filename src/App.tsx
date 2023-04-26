import React from 'react'
import { Route,Routes } from 'react-router-dom'  
import Navbar from './Component/Navbar'
import { Home,Headphones,Speakers,Earphones, Singleproductdetail} from './Pages'






const App = () => {
  return (
    
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/headphones' element={<Headphones/>}/>
    <Route path='/earphones' element={<Earphones/>}/>
    <Route path='/speakers' element={<Speakers/>}/>
    <Route path='/product/:id' element={<Singleproductdetail/>}/>


  </Routes>


  </>    
  
  )
}

export default App

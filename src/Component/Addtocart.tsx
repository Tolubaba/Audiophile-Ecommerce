import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Globalstyles'
import { useState } from 'react';
import Amountbuttons from './Amountbuttons';
import { Product } from '../Interface';
import { useCartContext } from '../Context/cartcontext';


  export interface SingleProduct{
  id: string | undefined
  img:string
  price:string
  name: string
}


const Addtocart = ({id,img,price,name}:SingleProduct) => { 

  const {addtocart}=useCartContext()




const open=()=>{
  console.log(id,img,price,name,amount)
}

const [amount,setamount]=useState<number>(1) 

const increase=():void =>{
     setamount((oldamount:number):number=>{
        let tempamount =oldamount +1;
        return tempamount

     })

    }


const decrease=():void=>{
    setamount((oldammount:number):number=>{
        let tempamount= oldammount-1;
        if(tempamount<1){
            tempamount=1
        }
        return tempamount

    })

    }




  return (
    <Wrapper>
        <GlobalStyles/>
    <Amountbuttons increase={increase} decrease={decrease} amount={amount}  width={`150px`} height={`35px`} font_Size={`12.5px`} fontsize={`10px`}/>
    <div className='addtocart'>
      <p onClick={()=>addtocart(id,name,img,price,amount)}> add to cart</p>
    </div>
    </Wrapper>
  )
}


const Wrapper=styled.section`
font-family:var(--fontfamily);
display:flex;
justify-content:space-between;
max-width:300px;
cursor: pointer;

.addtocart{
  text-transform:uppercase;
  background: #D87D4A;
  width:140px;
  height:35px;
  color:white;
  font-weight:700;
  letter-spacing:2px;
  font-size:13px;
  display:flex;
  justify-content:center;
  align-items:center;
}
    
`
export default Addtocart

import React, { useContext } from 'react'
import { useReducer, useEffect } from 'react';
import { useState } from 'react'
import { createContext } from 'react'
import { context, ReducerAction } from './Productcontext';
import { Product } from '../Interface'
import reducer from './Reducer/Cartreducer'
import { SingleProduct } from '../Component/Addtocart';

interface Amount extends SingleProduct{
  amount:number;
}

interface cartcontext {

  addtocart:(id:string|undefined,img:string ,name:string ,price:string ,amount:number)=>void;
  cart:Amount[];
 removeall: () => void,
 toggleamount: (id:string|undefined, value: string) => void
 totalamount:number,
 totalitems:number,
 opencart:boolean,
 setopencart: React.Dispatch<React.SetStateAction<boolean>>,
 cartopen: () => void








}


 export interface Stateprops{
 cart:Amount[]
 totalamount:number
 shippingfee:number
 totalitems:number

}


const initialstate={
  cart:[],
  totalamount:0,
  shippingfee:50,
  totalitems:0
}


const Cartcontext=React.createContext( {} as cartcontext) 

export const enum Reducer_action_cart_type{
 ADDTOCART,
 REMOVEALL,
 TOGGLE_CART_ITEM_AMOUNT,
 TOTALAMOUNT

}

export type ReducerActioncart={
  type:Reducer_action_cart_type
  payload?:any
}

 export const CartProvider = ({children}:context) => {
  const [opencart,setopencart]=useState<boolean>(false)

  const cartopen=()=>{
      setopencart(!opencart)
  }
  

  const addtocart=(id:string|undefined ,name:string ,img:string ,price:string,amount:number)=>{
    dispatch({type:Reducer_action_cart_type.ADDTOCART, payload:{id,name,img,price,amount}})

  }

  const removeall=()=>{
  dispatch({type:Reducer_action_cart_type.REMOVEALL})

  }

  const toggleamount=(id:string |undefined ,value:string)=>{
    dispatch({type:Reducer_action_cart_type.TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
  
    }

  
   

  const [state,dispatch]=useReducer(reducer,initialstate)

  useEffect(()=>{
    dispatch({type:Reducer_action_cart_type.TOTALAMOUNT})
  
  },[state.cart])

  



  return (
    <Cartcontext.Provider value={{...state,addtocart,removeall,toggleamount,cartopen,opencart,setopencart}}>
      {children}
    </Cartcontext.Provider>
  )
}


export const useCartContext=(): cartcontext =>{
  return useContext(Cartcontext)
}


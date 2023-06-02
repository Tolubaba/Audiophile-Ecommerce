import React, { ReactNode, useContext } from 'react'
import { useState,useEffect } from "react";
import { createContext } from "react";
import { products } from '../Data';
import { Product } from '../Interface';
import { useReducer } from 'react';
import reducer from './Reducer/Productreducer';


 export interface context {
    children:ReactNode
}



interface productcontex{
getproductall :()=>void
product:Product[];
getproduct:(name:string)=>void;
featuredproduct:Product[]
getsingleproduct:(id:string|undefined)=> void;
singleproduct?:Product
thanks:Boolean
setthanks:React.Dispatch<React.SetStateAction<Boolean>>



}


 export interface stateprops{

    product:Product[],
    featuredproduct:Product[]
    singleproduct?:Product

}

const  ProductContext= createContext({} as productcontex);


 export const enum Reducer_action_tpe{
    GETPRODUCTALL,
    GETPRODUCT,
    GETSINGLEPRODUCT

    
}

 export type ReducerAction={
    type:Reducer_action_tpe
    payload:any
}





 export const Productprovider = ({children}:context) => {
    const initialState: stateprops = {
        product: [],
        featuredproduct: [],
        singleproduct: {
          id: 0,
          name: "",
          Category: "",
          description: "",

          img: "",
          newproduct:null,
          images: {
            image1: "",
            image2: "",
            image3: "",
          },
          price: "",
          text: "",
          data: "",
          size: [],
          item: [],
        },
      };
      

    const [state,dispatch]=useReducer(reducer,initialState)

    const [thanks,setthanks]=useState<Boolean>(false)

    
    const getproductall=()=>{
    dispatch({type:Reducer_action_tpe.GETPRODUCTALL, payload:products})
    }

    const getproduct=(name:string)=>{
        dispatch({type:Reducer_action_tpe.GETPRODUCT,payload:name})
    }

    const getsingleproduct=(id:number|string|undefined)=>{
        dispatch({type:Reducer_action_tpe.GETSINGLEPRODUCT ,payload:id})
 }

    useEffect(()=>{
        getproductall();
    },[])
    


  return (
    <ProductContext.Provider value={{ ...state,getproductall,getproduct, getsingleproduct,thanks,setthanks}}>
        {children}


    </ProductContext.Provider>
    
      
    
  )
}



export const useProductContext=() :productcontex =>{
    return useContext(ProductContext)
}


import React, { ReactNode, useContext } from 'react'
import { useState,useEffect } from "react";
import { createContext } from "react";
import { products } from '../Data';
import { Product } from '../Interface';
import { useReducer } from 'react';
import reducer from './Reducer/Productreducer';


interface context {
    children:ReactNode
}



interface productcontex{
getproductall :()=>void
product:Product[];
getproduct:(name:string)=>void;
featuredproduct:Product[]
getsingleproduct:(id:number |string|undefined)=> void;
singleproduct:Product []|undefined


}


 export interface stateprops{

    product:Product[],
    featuredproduct:Product[]
    singleproduct:Product[] |undefined

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
    const initialstate:stateprops={
        product:[], 
        featuredproduct:[],
        singleproduct:[]
    
        
    
    }

    const [state,dispatch]=useReducer(reducer,initialstate)

    
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
    <ProductContext.Provider value={{ ...state,getproductall,getproduct, getsingleproduct,}}>
        {children}


    </ProductContext.Provider>
    
      
    
  )
}



export const useProductContext=() :productcontex =>{
    return useContext(ProductContext)
}


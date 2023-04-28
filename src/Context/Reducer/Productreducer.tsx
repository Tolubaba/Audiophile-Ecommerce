import React from 'react';
import {ReducerAction,Reducer_action_tpe} from'../Productcontext';
import { stateprops, } from '../Productcontext';
import { Product } from '../../Interface';
const Productreducer = (state:stateprops,action:ReducerAction):stateprops => {
    
    if(action.type===Reducer_action_tpe.GETPRODUCTALL){

        return{...state, product:action.payload}

    }

    if(action.type===Reducer_action_tpe.GETPRODUCT){
        let temproduct:Product[]=[];
    temproduct = state.product.filter((item)=> item.Category===action.payload)
        return {...state, featuredproduct:temproduct}
    }

    if(action.type===Reducer_action_tpe.GETSINGLEPRODUCT){
        
    return {...state,singleproduct:state.product.find((item)=>item.id==action.payload)}
    

    }

    return state;
  

}

export default Productreducer

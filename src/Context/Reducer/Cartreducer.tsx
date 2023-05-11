import React from 'react'
import { Stateprops } from '../cartcontext';
import { ReducerActioncart } from '../cartcontext';
import { Reducer_action_cart_type } from '../cartcontext';
const Cartreducer = (state:Stateprops,action:ReducerActioncart) => {

  if(action.type===Reducer_action_cart_type.ADDTOCART){
    console.log(state.cart)
      const {id,name,img,price,amount}=action.payload;
      const tempitem=state.cart.find((i)=>i.id===id)

      if(tempitem){
      const tempcart=state.cart.map((cartitem)=>{
          
        if(cartitem.id===id){
          let newamount=cartitem.amount+amount
          return {...cartitem,amount:newamount}
          }
          else {
            return cartitem;
          }


        })

        return {...state,cart:tempcart}

      }
      else {
        const newitems={id,name,price,amount,img
        }
        console.log(newitems)
        return {...state,cart:[...state.cart,newitems]}
      }
  }

  if(action.type===Reducer_action_cart_type.REMOVEALL){

    return {...state,cart:[]}
  }

  if(action.type===Reducer_action_cart_type.TOGGLE_CART_ITEM_AMOUNT){

    const {id,value}=action.payload
    const tempcart=state.cart.map((item)=>{
      if(item.id===id){
if(value==='inc'){
  let newamount=item.amount+1
  return {...item,amount:newamount}
}
if(value==='dec'){
  let newamount=item.amount-1;
  if(newamount<1){
    newamount=1
  }
  return{...item,amount:newamount}
}
      }
      
        return item
    
    })
    return {...state,cart:tempcart}


  }

    if (action.type === Reducer_action_cart_type.TOTALAMOUNT) {
      const { totalitems, totalamount } = state.cart.reduce(
        (total: { totalitems: number; totalamount: number }, cartitem) => {
          const { amount, price } = cartitem;
          total.totalitems += amount;
          let newprice=parseInt(price)
          total.totalamount += newprice * amount;
          return total;
        },
        {
          totalitems: 0,
          totalamount: 0,
        }
      );
    
      return { ...state, totalamount, totalitems };
    }
    

  


  return state;
}

export default Cartreducer

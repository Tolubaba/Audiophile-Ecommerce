import React from 'react'
import { useEffect,useState } from 'react'
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { useCartContext } from '../Context/cartcontext';
import Amountbuttons from './Amountbuttons';
import { formatPrice } from '../helpers';
import { Price } from '../helpers';
import Button from './Button';
import { Link } from 'react-router-dom';
import { formatPricee } from '../helpers';

const Cart = () => {

  const {cart,removeall,toggleamount,totalamount,cartopen}=useCartContext()
  return (
    <Wrapper>
      <GlobalStyles/>
        <div className='maincart'>

          {cart.length>=1?
          <><div className='carttop'>

            <p className='cartcount'> cart ({cart.length})</p>
            <p className='removeall' onClick={removeall}> Remove all</p>
          </div><div className='cart'>



              {cart.map((item) => {
                let numberprice = parseInt(item.price);
                const newprice: Price = {
                  newprice: numberprice,
                };


                    const increase=()=>{
                   toggleamount(item.id,'inc')
                                 }
                  const decrease=()=>{
                toggleamount(item.id,'dec')
  
                      }

                return <div className='cartbox'>
                  <div className='cartboxfirst'>
                    <div className='cartimage'>
                      <img src={item.img} />
                    </div>

                    <div className='cartfirst'>
                      <h3 className='cartname'>{item.name}</h3>
                      <h1 className='cartprice'>{formatPrice(newprice)}</h1>

                    </div>
                  </div>
                  <Amountbuttons amount={item.amount} width={`70px`} height={`25px`} font_Size={`10px`} increase={increase} decrease={decrease } fontsize='8px' />

                </div>;
              })}
            </div>
            
            <div className='carttotaldiv'>

              <p className='total'> Total</p>

              <p className='totalprice'> { formatPricee(totalamount)}</p>
            </div>
            <div>
           <Link to={`/checkout`} onClick={cartopen}>   <button className='cartbutton'>checkout </button></Link>
            </div>
            
            </>:<h1 className='emptycart'> cart is empty</h1>

          }

            
            

        </div>


      
    </Wrapper>
  )
}

const Wrapper=styled.section`
font-family:var(--fontfamily);
width:100%;
height:100vh;
position:fixed;
top:66px;
left:0;
background-color:rgba(0,0,0,0.6);
z-index:100;


.maincart{

    width:90%;
    padding:20px 10px;
    background-color:white;
    border-radius:4px;
    color:black;
    z-index:1;
    margin:0 auto;
    margin-top:20px;
    overflow-y:auto;
    max-height:50vh;
    display:flex;
    flex-direction:column;
  }

.cartcount{
  text-transform:capitalize;
  font-weight:700;
  font-size:14px;
}

.carttop{
   display:flex;
   justify-content:space-between;
   
  
}


.cart{
  margin-top:20px;
}

.cartboxfirst{
  display:flex;
  align-items:center;
  gap:10px;
}

.removeall{
  font-weight:500;
  font-size:12px;
  cursor: pointer;
}

.cartbox{
  display:flex;
  align-items:center;
  margin-bottom:10px;
  justify-content:space-between;
  height:50px;

}

.cartname{
  width:80%;
  line-height:15px;
  font-size:11.5px;
  text-transform:uppercase;
  font-family:var(--fontfamily);
  font-weight:700;
}
.cartprice{
  font-size:12px;
  font-weight:700;
  opacity:0.5;
}
.cartimage{
  
  background: #F1F1F1;
  width:50px;
  height:50px;
  display:flex;

  justify-content:center;
  align-items:center;
  img{
    width:50%;
  }
}

.cartfirst{
  display:flex;
  flex-direction:column;
  gap:4px;
}

.carttotaldiv{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:15px;

}

.cartbutton{
  
background-color:#D87D4A;
display:inline-block;
height:30px;
width:100%;
border:none;
text-transform:uppercase;
color:white;
margin-top:15px;
font-size:14px;
font-weight:500;
cursor: pointer;

}
.total{
  opacity:0.5;
  text-transform:uppercase;
  font-size:13px;
  font-weight:700;
}
.totalprice{
  text-transform:uppercase;
  font-size:13px;
  font-weight:700;
}

.emptycart{
  font-size:20px;
  text-transform:uppercase;
  display:flex;
  justify-content:center;
}


@media screen and (min-width:400px) {

  .maincart{

    max-width:300px;
    margin:0;
    position:absolute;
    top:30px;
    right:30px;
  }
  
}

@media screen and (min-width: 800px) {
  .maincart{

max-width:350px;
margin:0;
position:absolute;
top:30px;
right:30px;
max-height:60vh;
padding:20px;
}

}
`

export default Cart

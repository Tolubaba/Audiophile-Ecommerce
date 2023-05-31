import React from 'react'
import styled from 'styled-components'
import  audiophile from '../images/audiophile 2.png'
import { Link } from 'react-router-dom'
import  group from '../images/Group.png'
import  cart from '../images/cart.png'
import { useState,useEffect } from 'react'
import GlobalStyles from './Globalstyles'
import { useCartContext } from '../Context/cartcontext'

interface open {
    cartopen :()=>void;
}


import { links } from '../Data'

const Navbar = ({cartopen}:open) => {
    const { totalitems}=useCartContext();

 

   
    
  return <Wrapper>

    <GlobalStyles/>
    <header className='header'>

   
<nav>
    
    <img src ={group} className='group'/>

 <img src={audiophile} className='audophile'/>
 
 <ul className='linksul'>
    {links.map((item)=>{
        return <li key={item.id} className='links'><Link to={item.url}> {item.text}</Link></li>
    })}
 </ul>
 <div className='cartcontainer' onClick={cartopen}>
 <img src={cart} />
 { totalitems>=1?<span className='cartvalue'>
    {totalitems}
     </span>:null }
 
 </div>
 
 
 
</nav>

</header>


  </Wrapper>
}

const Wrapper=styled.header`
font-family:var(--fontfamily);
position:sticky;
top:0;
width:100%;
z-index:100;
    nav{
        
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px 0px;
        border-bottom:1px solid white;
        width:90%;
        margin:0 auto;

        .group{
            display:block;
        }


        .audophile{
            display:block;
        }

        .links{
            color:white;
        }
        
    }
    .linksul{
        display:none;
    }

    .header{
        
        background-color:black;
        
    }
    .cartcontainer{
        position:relative;
        cursor:pointer;
    }

    .cartvalue{
        color:white;
        height:20px;
        width:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#D87D4A;
        font-size:11px;
        position:absolute;
        border-radius:100%;
        top:-12px;
        right:-10px;
    }

    @media screen and (min-width: 1000px) {

        nav{

            .group{
                display:none;
            }
        }
        .linksul{
            display:block;
            display:flex;
            list-style:none;
            margin-right:10%;
            font-weight:700;
            gap:20px;
            
        

            a{
                color:white;
                text-transform:uppercase;
                text-decoration:none;

                &:hover{
                    color:#D87D4A;

                }
            }
        }


    }

    
`


export default Navbar

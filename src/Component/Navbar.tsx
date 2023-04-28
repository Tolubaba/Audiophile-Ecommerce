import React from 'react'
import styled from 'styled-components'
import  audiophile from '../images/audiophile 2.png'
import { Link } from 'react-router-dom'
import  group from '../images/Group.png'
import  cart from '../images/cart.png'
import { useState,useEffect } from 'react'

interface Navprops{
    navbarisFixed:boolean;
}

import { links } from '../Data'
const Navbar = () => {

   
    
  return <Wrapper>
    <header className='header'>

   
<nav>
    
    <img src ={group} className='group'/>

 <img src={audiophile} className='audophile'/>
 
 <ul className='linksul'>
    {links.map((item)=>{
        return <li key={item.id} className='links'><Link to={item.url}> {item.text}</Link></li>
    })}
 </ul>
 <img src={cart}/>
 
 
</nav>
<hr></hr>
</header>


  </Wrapper>
}

const Wrapper=styled.header`
position:sticky;
top:0;
width:100%;
z-index:100;
    nav{
        
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:10px;
        padding:10px 0;

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
        padding:3px 20px ;
        background-color:black;
    
        
    

        hr{
            opacity:0.8;
            color:white;
        }
    }

    
`


export default Navbar

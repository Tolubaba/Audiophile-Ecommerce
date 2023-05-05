import React from 'react'
import styled from 'styled-components'
import  audiophile from '../images/audiophile 2.png'
import { Link } from 'react-router-dom'
import  group from '../images/Group.png'
import  cart from '../images/cart.png'
import { useState,useEffect } from 'react'
import GlobalStyles from './Globalstyles'

interface Navprops{
    navbarisFixed:boolean;
}

import { links } from '../Data'
const Navbar = () => {

   
    
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
 <img src={cart}/>
 
 
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
            }
        }


    }

    
`


export default Navbar

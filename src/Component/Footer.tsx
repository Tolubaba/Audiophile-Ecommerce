import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Globalstyles';
import  audiophile from '../images/audiophile 2.png'
import { links } from '../Data'
import { Link } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';





const Footer = () => {
  return (
    <Wrapper>
        <GlobalStyles/>
        <div className='audophile'>

        <div className='underline'>
            
        </div>




    
    <img src={audiophile}/>
    <ul>
        {links.map((item)=>{
            return <li key={item.id}> <Link to={item.url}>
                {item.text}
            </Link> </li>
        })}
    </ul>


        </div>
        <div className='footerword'>
            <p className='word'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div  className='footerend'>
            <p>
            Copyright  {new Date().getFullYear()}. All Rights Reserved
            </p>
            <div className='logos'>

        <FaFacebookSquare style={{color:'white', fontSize:'24px'}}/>
        <FaTwitter style={{color:'white',fontSize:'24px'}}/> 
        <FaInstagram style={{color:'white',fontSize:'24'}}/>
            </div>

        </div>

        </div>
        


    </Wrapper>
  )
}

const Wrapper=styled.section`
font-family:var(--fontfamily);
text-align:center;
margin-top:35px;
padding-bottom:30px;

background-color:black;
img{
    width:150px;
}
a{
text-decoration:none;
color:white;
text-transform:uppercase;
font-size:13px;
opacity:0.9;


}
ul{
    display:flex;
    flex-direction:column;
    margin-top:20px;
    gap:10px;
}

.underline{
    width:120px;
    height:2px;
    background-color:#D87D4A;
    margin:0 auto;
    margin-bottom:45px;
}
.word{
    color:white;
    opacity:0.65;
    
    width:90%;
    margin:0 auto;
    margin-top:40px;
    font-weight:400;
    line-height:27px;
    
}

.footerend{
color:white;

font-weight:400;
margin-top:30px;
P{
    opacity:0.65;

}

}

.logos{
    display:flex;
    justify-content:center;
    margin-top:20px;
    gap:10px;
}

`

export default Footer

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
        <section className='section'>
        <div className='audophile'>

        <div className='underline'>
            
        </div>
    {/* <img src={audiophile}/> */}

    <div className='audiolink'>
    <h2 style={{color:'white'}}> audiophile</h2>
    <ul>
        {links.map((item)=>{
            return <li key={item.id}> <Link to={item.url}>
                {item.text}
            </Link> </li>
        })}
    </ul>
    </div>


        </div>
        <div className='footerword'>

            <div className='footerwordlogo'>
            <p className='word'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div className='logoss'>

<FaFacebookSquare className='logo' style={{color:'white', fontSize:'20px'}}/>
<FaTwitter style={{color:'white',fontSize:'20px'}}/> 
<FaInstagram style={{color:'white',fontSize:'20px'}}/>
    </div>


        </div>
        <div  className='footerend'>
            <p>
            Copyright  {new Date().getFullYear()}. All Rights Reserved
            </p>
            <div className='logos'>

        <FaFacebookSquare className='logo' style={{color:'white', fontSize:'20px'}}/>
        <FaTwitter className='logo' style={{color:'white',fontSize:'20px'}}/> 
        <FaInstagram className='logo' style={{color:'white',fontSize:'20px'}}/>
            </div>

        </div>
       

        </div>

        </section>
        


    </Wrapper>
  )
}

const Wrapper=styled.section`
font-family:var(--fontfamily);
text-align:center;
margin-top:35px;
padding-bottom:80px;

background-color:black;
img{
    width:150px;
}
a{
text-decoration:none;
color:white;
text-transform:uppercase;
font-size:15px;

&:hover{
    color: #D87D4A;
;
}


}

.logo{
    &:hover{
        color:#D87D4A;
    }
}
ul{
    display:flex;
    flex-direction:column;
    margin-top:20px;
    gap:15px;
    text-decoration:none;
    color:white;
    font-weight:700;

    
}
h2{
    font-weight:700;
    font-size:30px;
}

.underline{
    width:120px;
    height:3px;
    background-color:#D87D4A;
    margin:0 auto;
    margin-bottom:40px;
}
.word{
    color:white;
    opacity:0.5;
    
    width:80%;
    margin:0 auto;
    margin-top:40px;
    font-weight:400;
    font-size:14.5px;
    line-height:27px;
    
}

.footerend{
color:white;

font-weight:400;
margin-top:30px;
P{
    opacity:0.5;
    font-size:14.5px;

}

}

.logos{
    display:flex;
    justify-content:center;
    margin-top:20px;
    gap:10px;
}
.logoss{
    display:flex;
    justify-content:center;
    margin-top:20px;
    gap:10px;
    display:none;
}
li{
    list-style:none;
    
}


@media screen and (min-width:690px) {

    text-align:initial;

    ul{
        flex-direction:row;
    }

    .word{
        width:100%
    }
    
    .footerend{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .logos{
        margin:0;
    }

    .underline{
        margin:0;
        margin-bottom:40px;
    }
}

@media screen and (min-width:1000px) {
    
    .audiolink{
        display:flex;
        justify-content:space-between;
        align-items:center;
        
    }
    ul{
        margin:0;
    }

    .word{
        max-width:500px;
        margin:0;
        margin-top:40px;
 
 
    }

    .logos{
    display:flex;
    justify-content:center;
    margin-top:20px;
    gap:10px;
    display:none;
}
.logoss{
    display:flex;
    justify-content:center;
    margin-top:20px;
    gap:10px;
    width:fit-content;
    align-self:flex-end;

}
    

    .footerend{
display:flex;
    }

    .footerwordlogo
    {
        display:flex;
        justify-content:space-between;
        
    }
}


`

export default Footer

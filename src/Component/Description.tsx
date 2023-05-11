import React from 'react'
import styled from 'styled-components'
import mobile from '../images/user.png'
import tablet from '../images/user-tab.png'
import GlobalStyles from './Globalstyles'

const Description = () => {
  return (
    <Wrapper>
        <GlobalStyles/>
        <div className='description'>
            <img src={mobile} className='mobile'/>
            <img src={tablet} className='tablet'/>
            <div className='descriptionword'>
                <h3>
                Bringing you the <span> best</span>  audio gear
                </h3>
                <p>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>


        </div>


    </Wrapper>
      
    
  )
}

const Wrapper=styled.section`

.description{
    font-family:var(--fontfamily);
width:100%;
min-height:50vh;
margin:0 auto;
margin-top:30px;
display:flex;
flex-direction:column;
margin-bottom:50px;
gap:30px;
}
    .tablet{
        display:none;
    }

    .mobile{

        height:60vh;
        width:100%;
        display:block;
    }
    h3{
        text-transform:uppercase;
        width:100%;
        margin:0 auto;
        line-height:25px;
        font-weight:700;
        letter-spacing:5px;
        margin-bottom:15px;
        max-width:300px;
        line-height:30px;
        span{
            color: #D87D4A;
        }
    }

    p{
        width:90%;
        margin:0 auto;
        opacity:0.7;
        font-size:15px;
    
        line-height:25px;
        font-weight:500;
    }
    .descriptionword{
        text-align:center;
    }

    @media screen and (min-width:690px) {
        .mobile{
            display:none;
        }
        
        .tablet{
            display:block;
        }

        h3{
             font-size:30px;
             width:100%;
             max-width:500px;
             line-height:35px;
             margin-top:20px;
             margin-bottom:20px;
        }
    }

    @media screen  and (min-width:1000px){
    .description{
        flex-direction:row;
        margin-bottom:70px;
    }
        
    .descriptionword{
        order:1;
        text-align:initial;
        width:90%;
        display:flex;
        justify-content:center;
        flex-direction:column;
        gap:20px;
}
    .tablet{
        order:2;
        display:none;
    }

    .mobile{
        order:2;
        width:90%;
        display:block;
        height:70vh;
    }

    h3{
        margin:0;
        width:400px;
        line-height:40px;
    }
    p{
        margin:0;
        max-width:430px;
    }
    }
`

export default Description

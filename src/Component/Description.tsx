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
width:90%;
min-height:50vh;
margin:0 auto;
margin-top:30px;
display:flex;
flex-direction:column;
gap:30px;
}
    .tablet{
        display:none;
    }

    .mobile{
        width:100%;
        height:60vh;

        display:block;
    }
    h3{
        text-transform:uppercase;
        width:80%;
        margin:0 auto;
        line-height:25px;
        font-weight:700;
        letter-spacing:5px;
        margin-bottom:15px;
        span{
            color: #D87D4A;
        }
    }

    p{
        width:100%;
        margin:0 auto;
    
        line-height:25px;
        font-weight:500;
    }
    .descriptionword{
        text-align:center;
    }
`

export default Description

import React from 'react'
import mobile from '../images/earpod-mobile.png'
import tablet from '../images/earpod-tablet.png'
import styled from 'styled-components'
import Button from './Button';
import GlobalStyles from './Globalstyles';
import { Home } from '../Interface';

const Earphone = ({id}:Home) => {
  return (
    <Wrapper>
        <GlobalStyles/>
        <div className='earphone'>
            <img src={mobile} className='mobile'/>
            <img src={tablet} className='tablet'/>
            <div className='earphoneword'>
                <h1>
                YX1 EARPHONES
                </h1>
                <Button  url={`/product/${id}`} color='black' background='transparent'  border='1.4px solid black'/>

            </div>
        </div>




    </Wrapper>
  )
}


const Wrapper=styled.section`
margin-top:20px;
.earphone{
    display:flex;
    flex-direction:column;
    gap:20px;
    font-family:var(--fontfamily);
    width:90%;
    margin:0 auto;
    
}
    
    .mobile{
        width:100%;
        display:block;
        margin:0 auto;
        min-height:30vh;

    }

    .tablet{
        display:none;
    }
    .earphoneword{
        background: #F1F1F1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        width:100%;
        margin:0 auto;
        min-height:30vh;
        padding-top:30px;
        padding-left:30px;
        display:flex;
        flex-direction:column;
        gap:20px;

    }
    button{
font-weight:700;
    }



`

export default Earphone

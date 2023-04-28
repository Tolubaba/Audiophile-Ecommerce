import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Globalstyles'
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

interface Count{
  increase:()=>void
  decrease:()=>void
  amount:number
}

const Amountbuttons = ({increase,decrease,amount}:Count) => {
  return (
    <Wrapper>
      <GlobalStyles/>
      <button type='button' className='amount-btn' onClick={decrease}><FaMinus/> </button>
      <h4 className='amount'>{amount}</h4>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus/>

      </button>

    </Wrapper>
  )
}

const Wrapper=styled.section`
background: #F1F1F1;
height:35px; 
font-family:var(--fontfamily);
border-radius:2px;

padding: 0 10px;
display:flex;
justify-content:space-between;
align-items:center;
width:140px;
    button{
      background-color:transparent;
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      width:10px;
      opacity:0.4;
    
    }
    h4{
      font-size:12.5px;
      font-weight:700;
    }
`
export default Amountbuttons

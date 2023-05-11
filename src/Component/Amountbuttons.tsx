import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Globalstyles'
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

interface Count extends AmountButtonProps{
  increase:()=>void
  decrease:()=>void
  amount:number
}

interface AmountButtonProps {
  height: string;
  width: string;
  font_Size: string;
  fontsize:string;
  
}




const Amountbuttons = ({increase,decrease,amount,height,width,font_Size,fontsize}:Count) => {
  return (
    <Wrapper height={height} width={width} fontsize={font_Size}>
      <GlobalStyles/>
      <button type='button' className='amount-btn' onClick={decrease}><FaMinus style={{ fontSize:fontsize}} />
 </button>
      <h4 className='amount'>{amount}</h4>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus style={{ fontSize:fontsize }}
        />

      </button>

    </Wrapper>
  )
}

const Wrapper=styled.section<{height:string, width:string,fontsize:string}>`
background: #F1F1F1;
height:${({height})=>height}; 
font-family:var(--fontfamily);
border-radius:2px;

padding: 0 10px;
display:flex;
justify-content:space-between;
align-items:center;
width:${({width})=> width};
    .amount-btn{
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
      font-size:${({fontsize})=>fontsize};
      font-weight:700;
    }
`
export default Amountbuttons

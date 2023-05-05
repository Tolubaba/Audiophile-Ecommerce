import React from 'react'
import { Description } from '../Component'
import styled from 'styled-components'
import { useEffect } from 'react';
import { useProductContext } from '../Context/Productcontext';
import { Link } from 'react-router-dom';
import GlobalStyles from '../Component/Globalstyles';
import { formatPrice } from '../helpers';
import { Price } from '../helpers';
import Addtocart from '../Component/Addtocart';
import {Footer} from '../Component';

const Mypage = () => {
  return (
    <Wrapper>
        <Description/>
    </Wrapper>
      
    
  )
}


const Wrapper=styled.section`
width:90%;
margin:0 auto;
    
`

export default Mypage

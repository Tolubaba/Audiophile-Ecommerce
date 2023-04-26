import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';
import { useProductContext } from '../Context/Productcontext';

interface ButtonProps {
  url: string;
  color: string;
  background: string;
  border:string;
}

const Button = ({ url, color, background,border}: ButtonProps) => {

  const {getsingleproduct}=useProductContext()
  return (
    <Wrapper background={background} color={color} border={border}>
      <GlobalStyles/>
      <Link to={url} >
        SEE PRODUCT
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.button<{background:string, color:string, border:string}>`
  width: 150px;
  display: block;
  
  padding: 12px;
  font-weight: 500;
  background: ${({ background }) => background};
  
  border: ${({border})=>border};
  letter-spacing: 2px;
  font-family:var(--fontfamily);
  a {
    text-decoration: none;
    color: ${({color}) => color};
  }
`

export default Button

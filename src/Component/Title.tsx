import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './Globalstyles';

interface Word{

    title:string;
}


const Title = ({title}:Word) => {
  return (
    <Wrapper>
        <GlobalStyles/>
        <h1>
            {title}

        </h1>

    </Wrapper>

  )
}

const Wrapper= styled.section`
    
    background-color:black;
    color:white;
    font-family:var(--fontfamily);
    text-transform:uppercase;
    font-weight:700;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:25px;
    min-height:20vh;

`

export default Title

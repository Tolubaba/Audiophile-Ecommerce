import React from 'react'
import styled from 'styled-components'
import mobile from '../images/mobile.png'
import Button from './Button'
import GlobalStyles from './Globalstyles'
import { Home } from '../Interface'

const Speakerzx7 = ({id}:Home) => {
  return (
    <Wrapper>
        <GlobalStyles/>
        <div className='speaker'>

            <div className='speakerdiv'>
                 <h1>
            ZX7 SPEAKER
            </h1>
            <Button url={`/product/${id}`} color='black' background='transparent' border=' 1.4px solid black'/>
            

            </div>
        </div>
      
    </Wrapper>
  )
}


const Wrapper=styled.section`

.speaker{
    background-image:url(${mobile});
    background-position:center;
    background-repeat:no-repeat;
    background-size: cover; 
    width:90%;
    min-height:50vh;
    margin:0 auto;
    margin-top:20px;
    border-radius:5px;
    font-family:var(--fontfamily);
    display:flex;
    justify-content:center;
    align-items:center;
    

    .speakerdiv{
        width:65%;
        display:flex;
        gap:25px;
        flex-direction:column;
        
        margin-right:10%;
    }


    h1{
        font-weight:700;
        font-size:30px;
    }
    button{
        font-weight:700;
        display:block
    }
    
}
`

export default Speakerzx7

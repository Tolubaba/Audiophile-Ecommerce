import React from 'react'
import { Link } from 'react-router-dom'
import speaker from '../images/zx9-speaker.png'
import styled from 'styled-components'
import Button from './Button'
import GlobalStyles from './Globalstyles'
import { Home } from '../Interface'




const Speakerzx9 = ({id}:Home) => {
    
    
  return (

    

    <Wrapper>
        <GlobalStyles/>
        
        <div className='circle'>
            <div className='circle1'>
                <img src={speaker} />

</div>

        </div>

            <div className='speaker'>
                <h1>
                    ZX9 SPEAKER
                </h1>
                <p>
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                
                </p>
                <Button url={`/product/${id}`} color='white' background='black' border='none'/>



            </div>
        


    </Wrapper>
    
  )
}


const Wrapper=styled.section`
background-color: #D87D4A;
width:90%;
margin:0 auto;
border-radius:5px;

.circle{
    width:310px;
    height:310px;
    border-radius:100%;
    border:1px solid;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid rgba(255, 255, 255,0.4);

    margin:0 auto;
    position:relative;
    
    
}
.circle1{
    width:250px;
    height:250px;
    border-radius:100%;
    border:1px solid;
    border: 1px solid rgba(255, 255, 255,0.4);

    margin:0 auto;


    
}
img{
    position:absolute;
    top:30px;
    left:50px;
    width:180px;
}
.speaker{
    text-align:center;
    position:relative;
    top:-30px;
    display:flex;
    flex-direction:column;
    gap:20px;
    font-family:var(--fontfamily);
    
    h1{
        color:white;
        font-size:30px;
        
        width:50%;
        margin:0 auto;
        line-height:35px;
        font-weight:700;
         
    }
    p{
        color:white;
        opacity:0.85;
        font-weight:400;
        width:95%;
        margin:0 auto;
    }

    button{
        margin: 0 auto;
    }

}

    

`
export default Speakerzx9

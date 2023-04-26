import React from 'react' 
import styled from 'styled-components'
import backgroundimage from '../images/earphone-bg-small2.png'
import bitmap from '../images/Bitmap (1).png'
import earphone from '../images/cart.png'
import { Link } from 'react-router-dom';
import Button from './Button';



const Hero = () => {
  return (
    <Wrapper >
    <section className='Hero'>
      <div className='Herodiv'> 
      <p className='newproduct'>
    NEW PRODUCT 
      </p>
          <h1>
      XX99 MARK II HEADPHONES
      </h1>
      <p className='experience'>
        Experience natural, life like audio and exceptional build quality made for the passionate music enthusiast.
      </p>


      <Button url='/' color='white' background='#D87D4A' border='none' />

    

      </div>

      

    </section>
        


    </Wrapper>
      
    
  )
}

const Wrapper= styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');

 .Hero{
   background-image:url(${backgroundimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width:100%;
  height: 80vh;


  text-align:center;
  padding-top:7rem;


}

.Herodiv{
  color:white;
  font-family: 'Manrope', sans-serif;
  display:flex;
  flex-direction:column;
  gap:1.5rem;

  .newproduct{
    opacity:0.5;
    font-weight:400;
    letter-spacing:5px;
    
  }
  h1{

    font-size:35px;
    width:85%;
    margin:0 auto;
    font-weight:700px;
    word-spacing:10px;
  }

  .experience{
    opacity:0.8;
    width:85%;
    margin:0 auto;
    font-weight:500;
    word-spacing:3px;
    font-size:18px;
    line-height:25px;
    

  }
  button{
    margin: 0 auto;
  }
 
}






    
`

export default Hero

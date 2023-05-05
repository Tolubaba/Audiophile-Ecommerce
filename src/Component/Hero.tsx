import React from 'react' 
import styled from 'styled-components'
import backgroundimage from '../images/earphone-bg-small2.png'
import backgroundimage2 from '../images/earphone-bg.png'
import bitmap from '../images/Bitmap (1).png'
import earphone from '../images/cart.png'
import { Link } from 'react-router-dom';
import Button from './Button';
import { Home } from '../Interface'




const Hero = ({id}:Home) => {
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


      <Button url={`/product/${id}`} color='white' background='#D87D4A' border='none' />

    

      </div>

      <div className='divheroimage'>
      <img className='heroimage' src={bitmap}/>

      </div>
      
      

      

    </section>
        


    </Wrapper>
      
    
  )
}

const Wrapper= styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');
  width:100%;

 .Hero{
   background-image:url(${bitmap});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color:black;
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
    max-width:300px;
    margin:0 auto;
    font-weight:700;
    line-height:40px;
  }

  .experience{
    opacity:0.7;
    width:85%;
    margin:0 auto;
    font-weight:400;
    word-spacing:1px;
    font-size:16px;
    line-height:25px;
    max-width:300px;
    

  }
  button{
    margin: 0 auto;
  }

 
}

.heroimage{
  display:none;
}




@media screen and (min-width:690px) {
  .Hero{
    background-image:url(${backgroundimage});
  background-repeat: no-repeat;
  background-position:center;
  background-size:100% 100%;
  height:100vh;
  


  text-align:center;
  padding-top:7rem;

  }
  .Herodiv{
    gap:2rem;
    h1{
font-size:45px;
max-width:320px;
line-height:50px;
    }

    .experience{
      width:100%;
      max-width:380px;
      

    }
  }
  
}

@media screen and (min-width:1000px) {

  .Hero{
    background-image:none;
    text-align:initial;
    display:flex;
    padding:0;
    justify-content:space-between;
  }
  
  .Herodiv{
    width:70%;
    
    padding-top:90px;
    height:80vh;
    padding-left:80px;
    gap:20px;
    .experience{
      margin:0;
    }

    h1{
      margin:0;
      font-size:50px;
      width:100%;
      max-width:350px;
      line-height:70px;
    }

    button{
      margin:0;
    }
  }

  .heroimage{
    display:block;
    width:100%;
    height:90vh;
  }

  .divheroimage{
    width:90%;
    height:100vh;
  }
}






    
`

export default Hero

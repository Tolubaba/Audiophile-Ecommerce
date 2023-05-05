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
        <div className='bigcircle'>
        
        <div className='circle'>
            <div className='circle1'>
                <img src={speaker} />

</div>

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
width:100%;
margin:0 auto;
border-radius:5px;
padding-bottom:30px;
font-family:var(--fontfamily);

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
    top:40px;
    left:60px;
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
        max-width:200px;
        margin:0 auto;
        line-height:35px;
        font-weight:700;
         
    }
    p{
        color:white;
        opacity:0.85;
        font-weight:400;
        width:95%;
        max-width:300px;
        line-height:25px;
        margin:0 auto;
    }

    button{
        margin: 0 auto;
    }

}

@media screen and (min-width:690px) {
    .speaker{

        h1{
            font-size:35px;
            line-height:40px;
            width:100%;
            max-width:220px;
        }
        p{
            font-size:16px;
            line-height:30px;
            max-width:310px;
        }
    }
    
}

@media screen and (min-width: 1000px) {
    display:flex;
    margin:0;
    padding-left:4rem;
    padding-top:20px;
    gap:2%;


    .circle{

        width:350px;
        height:350px;
        margin:0;
        
    }

    .circle1{
        width:300px;
        height:300px;
        margin:0;
    
    }

    .speaker{
        top:0;
        text-align:initial;
        padding-top:70px;
        

        h1{
    margin:0;
    font-size:45px;
    line-height:50px;
}

p{
    
}


button{
    margin:0;
}
    }
    img{
        width:95%;
        top:-50px;
        left:10px;
    }


    .bigcircle{
    width:510px;
    height:510px;
    border-radius:100%;
    border:1px solid;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid rgba(255, 255, 255,0.4);

    position:relative;
    
    
}
padding-bottom:0;
margin-bottom:40px;



    
}

@media screen and (min-width:1200px) {
    .speaker{
        top:0;
        text-align:initial;
        padding-top:70px;
        left:10%;
    }


    
}

    

`
export default Speakerzx9

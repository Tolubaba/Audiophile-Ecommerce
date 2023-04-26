import React from 'react'
import styled from 'styled-components'
import GlobalStyles from './Globalstyles'
import Button from './Button'
import { useProductContext } from '../Context/Productcontext'
import { useEffect } from 'react'

interface Productlist{
    id:number
    name:string
    Category:string
    description:string
    img:string

}

const Product = ({id,name, Category,description,img}:Productlist) => {
    const {getsingleproduct}=useProductContext()


  return (
    
    <Wrapper>
        <GlobalStyles/>

        <div className='imagediv'>
            <img src={img}/>
        </div>
        <div className='productword'>
            <h1> new product</h1>
            <h2> {name}</h2>
            <p>{description}</p>
            <Button  url={`/product/${id}`} color='white' background='#D87D4A' border='none' />


        </div>
        

    </Wrapper>
  )
}


const Wrapper= styled.section`

display:flex;
flex-direction:column;
font-family:var(--fontfamily);
width:90%;
margin:0 auto;
margin-bottom:100px;

.imagediv{
    background: #F1F1F1;
    display:flex;
    justify-content:center;
    align-items:center;
    height:40vh;

    img{
        width:150px;
        display:inline-block;
    }

    

}

.productword{
        text-align:center;
        display:flex;
        flex-direction:column;
        gap:15px;
        margin-top:30px;

    }button{
        margin:0 auto;
    }


    h1{
        text-transform:uppercase;
        color:#D87D4A;
        letter-spacing:3.5px;
    }
    h2{
        text-transform:uppercase;
        font-size:25px;
        width:50%;
        max-width:200px;
        margin:0 auto;
        line-height:35px;
    }
    p{
        width:84%;
        margin:0 auto;
        line-height:25px;
        opacity: 0.8;
    }
`
export default Product

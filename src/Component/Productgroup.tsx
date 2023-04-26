import React from 'react'
import {useEffect} from 'react';
import { useProductContext } from '../Context/Productcontext';
import Product from './Product';
import styled from 'styled-components';


interface  Word {
    name:string
}

const Productgroup = ({name}:Word) => {
const {getproduct,featuredproduct,product}=useProductContext();

 useEffect(()=>{
        getproduct(name)
    },[])



    

  return (
     <Wrapper>
        {featuredproduct.map((item)=>{
             return <Product key={item.id} {...item}/>
       })}

    </Wrapper>


   )
 }
    
const Wrapper=styled.section`
margin-top:40px;
    
`

export default Productgroup

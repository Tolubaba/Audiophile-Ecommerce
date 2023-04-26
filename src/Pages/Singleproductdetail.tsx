import React from 'react'
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/Productcontext';
import styled from 'styled-components'

const Singleproductdetail = () => {
    const {id}=useParams();
    const {getsingleproduct,singleproduct}=useProductContext()
    let single_product
    

    useEffect(()=>{
        getsingleproduct(id)

    },[id])

    if(singleproduct){
     single_product=Object.values(singleproduct)
    }


    if(singleproduct){
      return (
        <Wrapper>
            <h1> toluwase</h1>
            {single_product?.map((item)=>{
              console.log(item.name)
    
                return <div key={item.id}>
                    {item.Category} </div>
            })}
    
        </Wrapper>
      )
    }

  
}

const Wrapper=styled.section`
    
`

export default Singleproductdetail

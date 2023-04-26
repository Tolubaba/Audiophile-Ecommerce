import React from 'react'
import { Title } from '../Component';
import styled from 'styled-components';
import {List,Footer,Description,Productgroup} from '../Component';
import { useProductContext } from '../Context/Productcontext';
import { products } from '../Data';
const Headphones = () => {
  const {getproductall,product}=useProductContext();

  return (
    <Wrapper>
      <Title title='headphone'/>
      <Productgroup name='headphones'/>
      <List/>
      
      <Description/>
      <Footer/>
      

    </Wrapper>
  )
}



const Wrapper= styled.section`

`

export default Headphones

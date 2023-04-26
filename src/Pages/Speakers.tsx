import React from 'react'
import { Title } from '../Component';
import styled from 'styled-components';
import {List,Footer,Description,Productgroup} from '../Component';
import { useProductContext } from '../Context/Productcontext';
import { products } from '../Data';

const Speakers = () => {
  const {getproductall,product}=useProductContext();

  return (
    <Wrapper>
      <Title title='speaker'/>
      <Productgroup name='speakers'/>
      <List/>
      
      <Description/>
      <Footer/>
      

    </Wrapper>
  )
}



const Wrapper= styled.section`

`

export default Speakers

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
      <Title title='speakers'/>
      <section className='section'>

      
      <Productgroup name='speakers'/>
      <List/>
      
      <Description/>
      
      </section>
      <Footer/>
      

    </Wrapper>
  )
}



const Wrapper= styled.section`
.section{
  width:85%;
  margin:0 auto;
}

`

export default Speakers

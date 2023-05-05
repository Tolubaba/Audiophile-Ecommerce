import React from 'react'
import { Hero ,List,Speakerzx9,Speakerzx7,Earphone, Description,Footer} from '../Component'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <Hero id={1}/>
      <section className='section'>
    <List/>
    <Speakerzx9 id={4}/>
    <Speakerzx7 id={5}/>
    <Earphone id={6}/>
    <Description/>
    
    </section>
    <Footer/>
    </Wrapper>
  )
}


const Wrapper=styled.section`

.section{
  width:85%;
margin:0 auto;
}

  

`
export default Home

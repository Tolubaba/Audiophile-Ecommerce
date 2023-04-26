import React from 'react'
import { Hero ,List,Speakerzx9,Speakerzx7,Earphone, Description,Footer} from '../Component'

const Home = () => {
  return (
    <>
    <Hero/>
    <List/>
    <Speakerzx9 id={4}/>
    <Speakerzx7 id={5}/>
    <Earphone id={6}/>
    <Description/>
    <Footer/>
    </>
  )
}

export default Home

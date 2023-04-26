import React from 'react'
import { shop } from '../Data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa';




const List = () => {
  return (
    <Wrapper>
        <div className='list'>
            {
                shop.map((item)=>{
                    return <div key={item.id} className='shoplist'>
                        <img  src={item.img}/>
                        <h5>{item.name}</h5>
                        <p>
                    <Link to={item.url}> shop </Link>
                    <span ><FaAngleRight style={{color:'#D87D4A' , width:'8px'}}/></span>
                                </p>

                        {/* <p><Link to={item.url}> shop <span><FaAngleRight style={{color:'#D87D4A' , width:'8px'}}/> </span> </Link> </p> */}
                        
                    </div>
                })
            }

        </div>

    </Wrapper>
    
  )
}

const Wrapper= styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');


.list{
 width:90%;
 margin:0 auto;
 margin-top:50px;
}

.shoplist{
    background-color: #F1F1F1;
    display:flex;
    flex-direction:column;
    justify-content:center;
align-items:center;
border-radius:5px;
padding:20px 20px;
position:relative;
font-family: 'Manrope', sans-serif;


    
    margin-bottom:40px;
    img{
        width:55px;
        display:block;
       
        position:absolute;
        top:-20px;
    }
    
    h5{
        text-transform:uppercase;
        font-weight:700;
        margin-top:45px;


    }

    p{
        display:flex;
        align-items:center;
        gap:5px;
    opacity:0.75;
        margin-top:15px;
        font-weight:700;
        font-size:14px;
        text-transform:uppercase;

        a{
            text-decoration:none;
            color:black;
        }
    }

}

`

export default List

import React from 'react'
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/Productcontext';
import styled from 'styled-components'
import GlobalStyles from '../Component/Globalstyles';
import { formatPrice } from '../helpers';
import { Price } from '../helpers';
import Addtocart from '../Component/Addtocart';

const Singleproductdetail = () => {
    const {id}=useParams();
    const {getsingleproduct,singleproduct}=useProductContext();

    useEffect(()=>{
      getsingleproduct(id)
    },[id])


    if(singleproduct){
      const {id,name,Category,description,img,images,price,newproduct,text,data,size,item}=singleproduct
      let numberprice= parseInt(price)
      
      console.log(singleproduct)
      console.log(newproduct)
      console.log(numberprice)
      const newprice: Price = {
        newprice: numberprice, // Your numeric value representing the price
      };
      
  
      

      return <Wrapper>
        <GlobalStyles/>
        <div className='goback'>
        <Link to='/'> Go Back</Link>

        </div>

        <article>
          <div className='firstimage'>
            <img src={img}/>

          </div>
  


          <div className='second'>
          
          {
            newproduct && <p className='newproduct'> new product</p>
  
          }
          <h2>
          {name}  
          </h2>
          <p className='description'>{description}</p>
        
          <p className='price'>{formatPrice(newprice)}</p>
          <Addtocart/>

          <div className='featureword'>


            <div className='featurefirst'>

              <h3> features</h3>
              <p>{text}</p>
              <p>{data}</p>
            </div>

            <div className='box'>
              <h2> in the box</h2>
              <div className='sizebox'> 
            <span className='sizes'> {size.map((item)=>{
              return <p className='word'>
              {item}
              </p>
            })}</span>
            <span className='list'> {item.map((item)=>{
              return <p className='word'>
              {item}
              </p>
            })}</span>

              </div>

            </div>


          </div>



          </div>



        </article>

    </Wrapper>
    }

   
}

const Wrapper=styled.section`
font-family:var(--fontfamily);
width:90%;
margin:0 auto;
margin-bottom:100px;

.goback{
  padding:10px 0;
  a{
    text-decoration:none;
    color:black;
    opacity:0.7;
  }
  
  
}

.firstimage{
  background: #F1F1F1;
  display:flex;
  justify-content:center;
  align-items:center;
  height:50vh;
  img{
    width:180px;
  }
}

.second{
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap:25px;
}
.newproduct{
    text-transform:uppercase;
   color:#D87D4A;
    letter-spacing:3.5px;
    font-weight:700;
    
}

.price{
  font-weight:700;
  letter-spacing:2px;
}

.description{
  width:85%;
  line-height:25px;
  opacity:0.7;

}

.featureword{
  margin-top:50px;

  h3{
    text-transform:uppercase;
    letter-spacing:3px;
    font-weight:700;
  }
}

.featurefirst{
   display:flex;
   flex-direction:column;
   gap:25px;
   p{
    line-height:25px;
    opacity:0.7;
   }
}

.box{
  margin-top:40px;
  h2{
    text-transform:uppercase;
  }
}

.sizebox{
  display:flex;
  gap:20px;
  margin-top:20px;
  .word{
    margin-bottom:8px;

  }
  .sizes{

    font-weight:700;
    color:#D87D4A;

  }
  .list{
    opacity:0.7;
  }

}

    
`

export default Singleproductdetail

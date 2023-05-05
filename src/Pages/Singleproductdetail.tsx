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
import { Description } from '../Component';
import {Footer} from '../Component';
import {List} from '../Component';
import { useNavigate } from 'react-router-dom';


const Singleproductdetail = () => {
    const {id}=useParams();
    const navigate = useNavigate();

  const {getsingleproduct,singleproduct}=useProductContext();

    useEffect(()=>{
      getsingleproduct(id)
    },[id])

    if(!singleproduct){
      return null
    }

    const {name,Category,description,img,images,price,newproduct,text,data,size,item}=singleproduct
    let numberprice= parseInt(price)
    
    console.log(singleproduct)
    console.log(newproduct)
    console.log(numberprice)
    const newprice: Price = {
      newprice: numberprice, // Your numeric value representing the price
    }


      return <Wrapper>
        <GlobalStyles/>
        <section className='section'>

        
        <div className='goback'>
        <button className='btngoback' onClick={() => navigate(-1)}>Go Back</button>

        

        </div>

        <article>

          <div className='first'>
          <div className='firstimage'>
            <img src={img}/>

          </div>
  


          <div className='second'>
          
          {
            newproduct && <p className='newproduct'> new product</p>
  
          }
          <h2 className='name'>
          {name}  
          </h2>
          <p className='descriptions'>{description}</p>
        
          <p className='price'>{formatPrice(newprice)}</p>
          <Addtocart/>
          </div>
          </div>
          

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
          <div className='images'>
            <div className='images1'>
            <img className='img' src={images.image1}/>
            <img  className='img' src={images.image3}/>
            </div>

            <div className='divbigimg'>
              <img className='bigimg' src={images.image2}/>

            </div>

          </div>



          
          



        </article>
        <List/>
        <Description/>
          
           </section>

          
           <Footer/>
           

    </Wrapper>
    
    

   
}

const Wrapper=styled.section`
font-family:var(--fontfamily);
.section{
  width:90%;
margin:0 auto;
}



.goback{
  padding:10px 0;
  margin-bottom:20px;
  button{
    text-decoration:none;
    color:black;
    opacity:0.7;
  }
  .btngoback{
    border:none;
    background:transparent;
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
.name{
  font-weight:700;
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
  letter-spacing:1px;
}

.descriptions{
  width:85%;
  line-height:25px;
  opacity:0.7;

}

.featureword{
  margin-top:50px;

  h3{
    text-transform:uppercase;
    letter-spacing:3px;
    font-weight:bold;
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
  margin-top:45px;
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
.images{
  display:flex;
  flex-direction:column;
  gap:10px;
  margin-top:40px;
}

.img{
  width:100%;
  display:inline-block;
  max-height:60vh;
}

.bigimg{
  width:100%;
  max-height:100vh;
  
}

@media screen and (min-width:690px) {

  .first{
    display:flex;
    gap:8%;
  
    
  }

  .firstimage{
    width:80%;
    height:75vh;
    max-width:350px;
    margin:0;
  

  }

  .second{
    padding-top:20px;
    width:100%;
    gap:20px;
    margin:0;
  }

  .name{

    font-size:30px;
    max-width:210px;
    line-height:40px;
  }

  .descriptions{
    width:85%;
    line-height:25px;
  }


  .box{
  display:flex;
  gap:40%;
}
.sizebox{
  margin-top:0;
}
.images{
  flex-direction:row;
  align-items:center;
  max-width:1000px;
  margin: 0 auto;
  margin-top:40px;
  margin-bottom:40px;
  height:75vh;

  .img{
height:34vh;
  }

}
.images1{
  width:100%;
  height:70vh;
}
.divbigimg{
  width:100%;
  
}

.bigimg{
  height:70vh;
}


}


    
`

export default Singleproductdetail

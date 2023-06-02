import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import GlobalStyles from './Globalstyles'
import good from '../images/Group 12.png'
import { useCartContext } from '../Context/cartcontext'
import { formatPrice } from '../helpers'
import { formatPricee } from '../helpers';
import { useProductContext } from '../Context/Productcontext'


const Thankyou = () => {
    let newprice;

    const {cart,totalamount}=useCartContext()
    const {setthanks}=useProductContext()
    const [showallitesm,setshowallitems]=useState(false)
    const handleviewmore =()=>{
        setshowallitems(!showallitesm);
    }

  return (
    <Wrapper>
        <GlobalStyles/>
        <section className='mainbody'>
            <div className='mainfirst'>
                <img src={good}/>
                <p className='thankyouorder'> thank you <br/> for your order</p>
                <p className='thankyouword'> You will  recieve an email conformation shortly</p>
            </div>
            <div className='mainsecondbody'>
                <div className='mainsecondbodyfirst'>
                    {showallitesm ? <div >
                        {cart.map((item)=>{
                        const {img,price,name}=item
                        newprice=parseInt(price)

                            return (
                                <div className='first'>
                                    <img src={img}/>
                                    <div>
                                        <h1 className='thankname'>{name}</h1>
                                        <p className='thankprice'>{formatPricee(newprice)}</p>
                                        
                                        
                                    </div>

                                     </div>
                            )

                    })}

                    { <p className='otheritems' onClick={handleviewmore}> view less</p>}
                    
                    </div>:<div >
                        {cart.slice(0,1).map((item)=>{
                        const {img,price,name}=item
                        newprice=parseInt(price)

                            return (
                                <div className='first'>
                                    <img src={img}/>
                                    <div>
                                        <h1 className='thankname'>{name}</h1>
                                        <p className='thankprice'>{formatPricee(newprice)}</p>
                                        
                                        
                                    </div>

                                     </div>
                            )

                    })}
                    <hr/>

                    { cart.length>1?<p className='otheritems' onClick={handleviewmore}> and {cart.slice(1).length}  other items(s)</p>:null}
                    
                    </div>
}

                    
                </div>
                <div className='grandtotal'>
                    <p className='totalword'> GRAND TOTAL</p>

                    <p className='grandtotalprice'>{formatPricee(totalamount+50)}</p>

                </div>


            </div> 
            <div>
                <Link to='/' onClick={()=>setthanks(false)} > <button type='button'> back to home</button></Link>
            
            </div>
            

        </section>

    </Wrapper>
  )
}


const Wrapper =styled.article `
font-family:var(--fontfamily);
width:100%;
height:100%;
background-color:rgba(0,0,0,0.6);
position:fixed;
z-index:100;


.mainbody{

    max-height:80vh;
    overflow-y:auto;
    width:80%;
    background-color:white;
    margin:0 auto;
    margin-top:30px;
    
    max-width:500px;
    padding-left:20px;
    padding-right:20px;
    padding-top:30px;
    padding-bottom:15px;
    border-radius:8px;

    
    
}

.mainfirst{
    display:flex;
    flex-direction:column;
    gap:10px;
    

    img{
        width:40px;
    }

    .thankyouorder{
        text-transform:uppercase;
        font-size:1.3em;
        font-weight:700;
        width:100%;
        line-height:25px;

    }
    .thankyouword{
        font-size:16px;
    }
}

.mainsecondbody{
    margin-top:15px;
    

}

.mainsecondbodyfirst{
    img{
        width:30px;
    }
    background: #F1F1F1;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    padding-bottom:20px;
    padding-left:20px;
    width:100%;
    
    
}

.first{
    display:flex;
    align-items:center;
    
    gap:10px ;
padding:20px 0;
    
    
}

.thankname{
    font-size:12px;
}

.thankprice{
    font-size:12px;
}

.grandtotal{
    background-color:black;
    color:white;
    padding:20px;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    gap:10px;
    width:100%;
}

.grandtotalprice{
    color:white;
    font-size:15px;
}

.totalword{
    opacity:0.5;
    font-size:15px;
}
    
.otheritems{
    opacity:0.7;
    font-size:12px;
}
button{
    width:100%;
    display:block;
    margin-top:20px;
    height:35px;
    border:none;
    border-radius:5px;
    background-color:#D87D4A;
    color:white;
    text-transform:uppercase;
    font-weight:500;
}
a{
    text-decoration:none;
    color:white;
}
hr{
    width:90%;
    opacity: 0.5;
    display:block;
    margin-bottom:5px;
}

@media screen and (min-width:768px) {
    .mainsecondbody{
        display:flex;
        
    }
    
}
`

export default Thankyou
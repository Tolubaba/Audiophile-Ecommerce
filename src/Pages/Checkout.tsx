import React from 'react'
import styled from 'styled-components'
import { Form, Link } from 'react-router-dom'
import GlobalStyles from '../Component/Globalstyles'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../Context/cartcontext';
import { Price, formatPrice,formatPricee } from '../helpers';

interface Formvalues{
  name:string,
  email:string,
  number:string,
  address:string,
  code:string,
  city:string,
  country:string

}

const Checkout = () => {
  let shippingprice=50;
  const navigate = useNavigate();
  const {cart,totalamount}=useCartContext()
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [isFocused2,setIsFocused2] = useState<Boolean>(false);
  

  const handleDivClick = () => {
    setIsFocused(true);
  };
  const handleDivClick1 = () => {
    setIsFocused2(true)

  };

  const handleDivBlur = () => {
    setIsFocused(false);
  };
  const handleDivBlur1 = () => {
    setIsFocused2(false);
  };

  const initialFormValues: Formvalues = {
    name: '',
    email: '',
    number: '',
    address: '',
    code: '',
    city: '',
    country: ''
  };
  

  const [formvalues,setformvalues]=useState<Formvalues>(initialFormValues)
  const [Error,setError]=useState<Formvalues>({
    name: '',
      email: '',
      number: '',
      address: '',
      code: '',
      city: '',
      country: ''

  });

  const validateform=()=>{
    const {name,city,email,code,country,address,number}=formvalues;
     const newerrors: Formvalues={
      name: '',
      email: '',
      number: '',
      address: '',
      code: '',
      city: '',
      country: ''
    }

    if(!name){
      newerrors.name='Name is required'
      
    }

    if(!email){
      newerrors.email
    }
    else if (! /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.
    test(email)){
      newerrors.email='worng format'
    }

    if(!number){
      newerrors.number='Phone number is required'
    }

    if(!address){
      newerrors.address='address is required'
    }

    if(!city){
      newerrors.city='city is required'
    }
    if(!code){
      newerrors.code='code is required'
    }


setError(newerrors)
  }


  const handlesubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    validateform();

  }

  const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
     const {name,value}=e.target;
     setformvalues({...formvalues,[name]:value})
  }


  return (
    <Wrapper>
    <GlobalStyles/>
    <section className='section'>
    <div className='goback'>
        <button className='btngoback' onClick={() => navigate(-1)}>Go Back</button>
        </div>


        
        <form onSubmit={handlesubmit}>
          <section className='formsection1'>
            <h2> CHECKOUT</h2>
          <div className='divform'> 
            <p> billing Details</p>
             <div className='firstform'>
              <div className='formname'>
                <label className='label'>name{Error.name && <small>{Error.name}</small> }  </label>
              <input className='input' type='text' name='name' value={formvalues.name} onChange={handlechange}/>
              </div>
              
              <div className='formemail'>
                <label className='label'> email address</label>
              <input className='input' name='email' type='email' value={formvalues.email} onChange={handlechange}/>
              </div>
      
              
              </div>

              <div className='formnumber'>
                <label className='label'>phone number </label>
                <input className='input2' name='number' type='tel' value={formvalues.number} onChange={handlechange}/>
              </div>

          </div>

          <div className='divform2'>
            <p>
            shipping info
            </p>

            <div className='formaddress'>
              <label className='label'> Address</label>
              
                <input className='input3' name='address' type='text' value={formvalues.address} onChange={handlechange}/> 
              </div>

            <div className='secondform'>
              <div className='formzip'>
                <label className='label'>zip code </label>
              <input className='input' name='code' type='text' value={formvalues.code} onChange={handlechange}/>
              </div>


              <div className='formcity'>
                <label className='label'> city</label>
              <input className='input' name='city' type='text' value={formvalues.city} onChange={handlechange}/>
              </div>
              
              
              </div>

              <div className='formcountry'>
                <label className='label'>country</label>
                <input className='input2' name='country' type='text' value={formvalues.country} onChange={handlechange}/>
              </div>
              
              </div>

              <div  className='divform3begin'>
                <p className='details'> payment details</p>
                <div className='divform3'>
                <label className='label'> payment method </label>
                <div className='inputdetails'>


                <div className={`${isFocused? 'divradio1focus':'divradio1'}`} tabIndex={0}onClick={handleDivClick} onBlur={handleDivBlur} >
                  <input type='radio' name='options' id='radio1'/>
                  <label htmlFor='radio1'> e-Money</label>
                   </div>

                <div className={`${isFocused2?'divradio2focus':'divradio2'}`} tabIndex={0} onClick={handleDivClick1} onBlur={handleDivBlur1}>
                <input type='radio' name='options' id='radio2'/>
                <label htmlFor='radio2'> Cash on Delivery</label>
                </div>
                

                </div>

                </div>
                

              </div>

              </section>

              <section className='formsection2'>
                <h3> SUMMARY</h3>
                {cart.map((item)=>{
                  let numberprice = parseInt(item.price);
                const newprice: Price = {
                  newprice: numberprice,
                };



                  return <div className='cartcheckbox'> 
                  <div className='cartimage'>
                    <img src={item.img}/>
                    </div>

                    <div className='cartfirst'>
                      <h3 className='cartname'>{item.name} </h3>
                      <h1 className='cartprice'>{formatPrice(newprice)}</h1>

                    </div>

                  </div>
                })}

                <div className='checkoutsummary'> 
                <div className='checkouttotal'>
                <p className='total'> Total</p>

      <p className='totalprice'> { formatPricee(totalamount)}</p>

                </div>

                <div className='checkoutshipping'>
                  <p className='shipping'> shipping </p>
                  { 
                  
                  <p className='shippingprice'>{formatPricee(shippingprice)}</p>}
               

                </div>
                <div className='divgrandtotal'>
                  <p className='grandtotal'>Grand total</p>
                  {  
                  <p className='grandtotalprice'> {formatPricee(totalamount+shippingprice)}</p>
                  
                  }

                </div>


                </div>
                <button className='button' type='submit'> continue & pay </button>

              </section>


        </form>

      

    </section>
        </Wrapper>
  )
}

const Wrapper=styled.article`

font-family:var(--fontfamily);
background: #F2F2F2;
min-height:200vh;
padding-bottom:30px;

.section{
width:90%;
 margin:0 auto;

 }


.goback{
  padding:10px 0;
  margin-bottom:20px;
  display:flex;
  align-items:center;
  & :hover{
    color: #D87D4A;
    font-size:15px;
    font-weight:700;
  }
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

form{

  input{
    padding-left:10px;
    &:focus{
      border: 1.5px solid #D87D4A;
      outline:none;
      
    }
    margin-bottom:20px;
  }
  .input{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
  }

  .input2{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
  
  }

  .input3{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;

  }
}

.firstform{
  display:flex;
  flex-direction:column;
  gap:2%;
  width:100%;
}


.divform{
  width:100%;
p{
  color:#D87D4A;
  font-weight:700;
  text-transform:uppercase;
  font-size:14px;
  margin-bottom:20px;

}

}



.divform2{

  margin-top:30px;
p{
  color:#D87D4A;
  font-weight:700;
  text-transform:uppercase;
  font-size:14px;
  margin-bottom:20px;

}

}

.secondform{
  display:flex;
  flex-direction:column;
  gap:2%;
}

.divform3{
  display:flex;
  flex-direction:column;
align-items:end;
  
  .label{
    align-self:flex-start;
    width:100%;  
  font-weight:700;
  text-transform:capitalize;
  margin-bottom:20px;



  }
  
}
.inputdetails{
  display:flex;
  flex-direction:column;
width:100%;

}

.formname{
  width:100%;
  display:flex;
  flex-direction:column;
}

.formemail{
  width:100%;
  display:flex;
  flex-direction:column;
}
.formnumber{
  display:flex;
  flex-direction:column;

}
.formzip{
  width:100%;
  display:flex;
  flex-direction:column;
}

.formcity{
  width:100%;
display:flex;
flex-direction:column;
}

.formcountry{
  display:flex;
  flex-direction:column;
}

.formaddress{
display:flex;
flex-direction:column;
}

.label{
margin-bottom:10px;
text-transform:capitalize;
font-weight:700;
display:flex;
justify-content:space-between;
}

.divform3begin{
  margin-top:30px;

  .details{
    width:100%;  
  color:#D87D4A;
  font-weight:700;
  text-transform:uppercase;
  font-size:14px;
  margin-bottom:20px;


  }
}

.divradio1{
  width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
    display:flex;
    align-items:center;
    margin-bottom:15px;
    input{
      margin-top:20px;
      margin-left:10px;
  
    }
    label{
      margin-left:10px;
      font-weight:700;
      font-size:14.5px;

    }
    
  
  
}
.divradio1focus{
  width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
    display:flex;
    align-items:center;
    border: 1.5px solid #D87D4A;
    margin-bottom:15px;
    input{
      margin-top:20px;
      margin-left:10px;
  
    }
    label{
      margin-left:10px;
      font-weight:700;
      font-size:14.5px;

    }
  
  
}
.divradio2{
  width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
    display:flex;
    align-items:center;
    input{
      margin-top:20px;
      margin-left:10px;
  
    }
    label{
      margin-left:10px;
      font-weight:700;
      font-size:14.5px;

    }
  
  
  
}
.divradio2focus{
  width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
    display:flex;
    align-items:center;
    border: 1.5px solid #D87D4A;
    input{
      margin-top:20px;
      margin-left:10px;
  
    }
    label{
      margin-left:10px;
      font-weight:700;
      font-size:14.5px;

    }

  }
  .formsection2{
      margin-top:40px;
      padding:30px;
      border-radius:8px;
      background-color:white;

      .cartcheckbox{
        display:flex;
         align-items:center;
        margin-bottom:10px;
        gap:2%;
        margin-top:30px;
      

      }
      .cartimage{
background: #F1F1F1;
  width:70px;
  height:70px;
  display:flex;

  justify-content:center;
  align-items:center;
  img{
    width:60%;
  }
      }

      .cartname{
width:100%;
  line-height:15px;
  font-size:14px;
  text-transform:uppercase;
  font-family:var(--fontfamily);
  font-weight:700;
      }

      .cartprice{
font-size:13px;
  font-weight:700;
  opacity:0.5;
      }

      .checkoutsummary{
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-top:20px;
      }
      .checkouttotal{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .total{
          opacity:0.5;
          font-weight:500;
        }
        .totalprice{
          color:black;
          font-weight:700;
        }
      }


      .checkoutshipping{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .shipping{
           opacity:0.5;
          font-weight:500;
       
        }

        .shippingprice{
          color:black;
          font-weight:700;
        }
      }
      .divgrandtotal{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .grandtotal{
           opacity:0.5;
          font-weight:500;
       
        }

        .grandtotalprice{
          font-weight:700;
          color:#D87D4A;
        }
      }
      
      .button{
        width:100%;
        display:block;
        height:35px;
        background-color:#D87D4A;
        border:none;
        color:white;
        text-transform:uppercase;
        font-weight:500;
        margin-top:20px;
      }
    }

    .formsection1{
      background-color:white;
      padding:30px;
      border-radius:8px;
      h2{
        margin-bottom:20px;
      }
      
    }
  
  
  

 @media screen and (min-width:768px) {

form{

input{
  padding-left:10px;
  &:focus{
    border: 1.5px solid #D87D4A;
    outline:none;
    
  }
  margin-bottom:20px;
}
.input{
  width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;
}

.input2{
  width:49%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;

}

.input3{
  width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;

}
}

.firstform{
display:flex;
flex-direction:row;
gap:2%;
width:100%;
}


.divform{
width:100%;
p{
color:#D87D4A;
font-weight:700;
text-transform:uppercase;
font-size:14px;
margin-bottom:20px;

}

}



.divform2{

margin-top:30px;
p{
color:#D87D4A;
font-weight:700;
text-transform:uppercase;
font-size:14px;
margin-bottom:20px;

}

}

.secondform{
display:flex;
flex-direction:row;
gap:2%;
}

.divform3{
display:flex;
flex-direction:row;
align-items:end;

.label{
  align-self:flex-start;
  width:100%;  
font-weight:700;
text-transform:capitalize;
margin-bottom:20px;



}

}
.inputdetails{
display:flex;
flex-direction:column;
width:95%;

}

.formname{
width:100%;
display:flex;
flex-direction:column;
}

.formemail{
width:100%;
display:flex;
flex-direction:column;
}
.formnumber{
display:flex;
flex-direction:column;

}
.formzip{
width:100%;
display:flex;
flex-direction:column;
}

.formcity{
width:100%;
display:flex;
flex-direction:column;
}

.formcountry{
display:flex;
flex-direction:column;
}

.formaddress{
display:flex;
flex-direction:column;
}

.label{
margin-bottom:10px;
text-transform:capitalize;
font-weight:700;
}

.divform3begin{
margin-top:30px;

.details{
  width:100%;  
color:#D87D4A;
font-weight:700;
text-transform:uppercase;
font-size:14px;
margin-bottom:20px;


}
}

.divradio1{
width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;
  display:flex;
  align-items:center;
  margin-bottom:15px;
  input{
    margin-top:20px;
    margin-left:10px;

  }
  label{
    margin-left:10px;
    font-weight:700;
    font-size:14.5px;

  }
  


}
.divradio1focus{
width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;
  display:flex;
  align-items:center;
  border: 1.5px solid #D87D4A;
  margin-bottom:15px;
  input{
    margin-top:20px;
    margin-left:10px;

  }
  label{
    margin-left:10px;
    font-weight:700;
    font-size:14.5px;

  }


}
.divradio2{
width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;
  display:flex;
  align-items:center;
  input{
    margin-top:20px;
    margin-left:10px;

  }
  label{
    margin-left:10px;
    font-weight:700;
    font-size:14.5px;

  }



}
.divradio2focus{
width:100%;
  height:40px;
  border-radius:5px;
  border: 1px solid gray;
  display:flex;
  align-items:center;
  border: 1.5px solid #D87D4A;
  input{
    margin-top:20px;
    margin-left:10px;

  }
  label{
    margin-left:10px;
    font-weight:700;
    font-size:14.5px;

  }

      
    }

    .formsection2{
      background-color:white;
      padding:30px;
      border-radius:8px;
      .cartcheckbox{
        display:flex;
        align-items:center;
        margin-bottom:10px;
        gap:2%;
        margin-top:30px;
      

      }
      .cartimage{
background: #F1F1F1;
  width:70px;
  height:70px;
  display:flex;

  justify-content:center;
  align-items:center;
  img{
    width:60%;
  }
      }

      .cartname{
width:100%;
  line-height:15px;
  font-size:14px;
  text-transform:uppercase;
  font-family:var(--fontfamily);
  font-weight:700;
      }

      .cartprice{
font-size:13px;
  font-weight:700;
  opacity:0.5;
      }

      .checkoutsummary{
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-top:20px;
      }
      .checkouttotal{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .total{
          opacity:0.5;
          font-weight:500;
        }
        .totalprice{
          color:black;
          font-weight:700;
        }
      }


      .checkoutshipping{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .shipping{
           opacity:0.5;
          font-weight:500;
       
        }

        .shippingprice{
          color:black;
          font-weight:700;
        }
      }
      .divgrandtotal{
        display:flex;
        justify-content:space-between;
        text-transform:uppercase;
        .grandtotal{
           opacity:0.5;
          font-weight:500;
       
        }

        .grandtotalprice{
          font-weight:700;
          color:#D87D4A;
        }
      }
      
      .button{
        width:100%;
        display:block;
        height:35px;
        background-color:#D87D4A;
        border:none;
        color:white;
        text-transform:uppercase;
        font-weight:500;
        margin-top:20px;
      }
    }

    .formsection1{
      background-color:white;
      padding:30px;
      border-radius:8px;
      
    }
  
  
  
}

@media screen and (min-width: 1024px) {
  
  form{
    display:flex;
    width:100%;
    gap:5%;

  }

  .formsection1{
    width:100%;
  }

  .formsection2{
    width:50%;
    margin-top:0;
    align-self:self-start;
  }
}


`

export default Checkout

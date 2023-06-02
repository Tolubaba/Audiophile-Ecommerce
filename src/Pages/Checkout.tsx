import React from 'react'
import styled from 'styled-components'
import { Form, Link } from 'react-router-dom'
import GlobalStyles from '../Component/Globalstyles'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCartContext } from '../Context/cartcontext';
import { Price, formatPrice,formatPricee } from '../helpers';
import { Thankyou,Footer } from '../Component';
import { useProductContext } from '../Context/Productcontext';

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
  const {setthanks,thanks}=useProductContext()
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [isFocused2,setIsFocused2] = useState<Boolean>(false);

  const [radiovalue,setradiovalue]=useState<String>('')
  

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
      newerrors.email='email is required'
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
    if(!country){
      newerrors.country='country is required'
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

  const handleradiochange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    setradiovalue(e.target.value)
  }

  const thankyou=()=>{
    const {name,email,address,city,code,country}=formvalues;
    if(cart.length>0){
      if(name){
        setthanks(true)
      
  
      } 
  
    }
    
    console.log(thanks)

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
              <input className={`${Error.name ? 'inputempty' : 'input'}`} type='text' name='name' value={formvalues.name} onChange={handlechange} placeholder='Alexei Ward'/>
              </div>
              
              <div className='formemail'>
                <label className='label'> email address {Error.email && <small>{Error.email}</small> }</label>
              <input className={`${Error.email ? 'inputempty' : 'input'}`} name='email' type='email' value={formvalues.email} onChange={handlechange} placeholder='alexei@gmail.com'/>
              </div>
      
              
              </div>

              <div className='formnumber'>
                <label className='label'>phone number {Error.number && <small>{Error.number}</small> }</label>
                <input className={`${Error.number ? 'input2empty' : 'input2'}`} name='number' type='tel' value={formvalues.number} onChange={handlechange} placeholder='+1202-555-0136'/>
              </div>

          </div>

          <div className='divform2'>
            <p>
            shipping info
            </p>

            <div className='formaddress'>
              <label className='label'> Address {Error.address && <small>{Error.address}</small> } </label>
              
                <input className={`${Error.address ? 'input3empty' : 'input3'}`} name='address' type='text' value={formvalues.address} onChange={handlechange} placeholder='1137 Williams Avenue'/> 
              </div>

            <div className='secondform'>
              <div className='formzip'>
                <label className='label'>zip code {Error.code && <small>{Error.code}</small> } </label>
              <input className={`${Error.code ? 'inputempty' : 'input'}`} name='code' type='text' value={formvalues.code} onChange={handlechange} placeholder='10001'/>
              </div>


              <div className='formcity'>
                <label className='label'> city {Error.city && <small>{Error.city}</small> }</label>
              <input className={`${Error.city ? 'inputempty' : 'input'}`} name='city' type='text' value={formvalues.city} onChange={handlechange} placeholder='New York'/>
              </div>
              
              
              </div>

              <div className='formcountry'>
                <label className='label'>country {Error.country && <small>{Error.country}</small> }</label>
                <input className={`${Error.country ? 'input2empty' : 'input2'}`} name='country' type='text' value={formvalues.country} onChange={handlechange} placeholder='United States'/>
              </div>
              
              </div>

              <div  className='divform3begin'>
                <p className='details'> payment details</p>
                <div className='divform3'>
                <label className='label'> payment method </label>
                <div className='inputdetails'>


                <div className={`${isFocused? 'divradio1focus':'divradio1'}`} tabIndex={0}onClick={handleDivClick} onBlur={handleDivBlur} >
                  <input type='radio' name='options' id='radio1' value='option1' checked={radiovalue==='option1'} onChange={handleradiochange}/>
                  <label htmlFor='radio1'> e-Money</label>
                   </div>

                <div className={`${isFocused2?'divradio2focus':'divradio2'}`} tabIndex={0} onClick={handleDivClick1} onBlur={handleDivBlur1}>
                <input type='radio' name='options' id='radio2' value='option2' checked={radiovalue==='option2'} onChange={handleradiochange} />

                <label htmlFor='radio2'> Cash on Delivery</label>
                </div>
                

                </div>

                </div>
                { radiovalue==='option1'?
                <div className='radioption1div'>
                  <div className='emoneynumber'>
                    <label className='label'> e-Money Number</label>
                  <input type='text' className='input' placeholder='238521993'/>
                    </div>
                    <div className='emoneypin'>
                      <label className='label'>e-Money PIN</label>
                      <input type='text' className='input' placeholder='6891'/>
                    </div>
                  
                  
                </div>:null }

                

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
                <button className='button' type='submit' onClick={thankyou}> continue & pay </button>

              </section>


        </form>

      

    </section>
    <Footer/>
        </Wrapper>
  )
}

const Wrapper=styled.article`

font-family:var(--fontfamily);
background: #F2F2F2;
min-height:150vh;

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

    &::placeholder{
      opacity:0.8;
      font-weight:500;
    }
  }
  .input{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
  }

  .inputempty{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid red;
  }

  .input2{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;
  
  }

  .input2empty{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid red ; 
  }

  .input3{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid gray;

  }
  .input3empty{
    width:100%;
    height:40px;
    border-radius:5px;
    border: 1px solid red;
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
width:100%;
font-size:14px;
font-family:var(--fontfamily);
justify-content:space-between;
small{
  color:red;
}
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

    input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid gray; /* Change the color here */
  border-radius: 50%;
  outline: none;
  margin-right: 5px;
}

input[type="radio"]:checked {
  background-color:#D87D4A ; /* Change the color here */
}

    .radioption1div{
      margin-top:40px;
      display:flex;
      flex-direction:column;
    }


    .emoneynumber{
      width:100%;
    }
  
    .emoneypin{
      width:100%;
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
width:49%;

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
width:49%;
}

.formaddress{
display:flex;
flex-direction:column;
}

.label{
margin-bottom:10px;
text-transform:capitalize;
font-weight:700;
font-size:14px;
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
  
   

.radioption1div{
  flex-direction:row;
  gap:2%;
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

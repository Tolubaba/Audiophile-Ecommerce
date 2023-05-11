
 export interface Price{
    newprice:number
}
 interface newprice{
    price:string
 }


export const formatPrice = ({newprice}:Price) => {
    const newnumber=Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,


    }).format(newprice)
    return newnumber;
}


  
    
export const formatPricee=(price: number): string =>{
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  


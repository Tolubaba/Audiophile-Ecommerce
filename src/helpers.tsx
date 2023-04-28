
 export interface Price{
    newprice:number
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

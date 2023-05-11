 export interface Links {
    id:number;
    text:string;
    url:string
}

export interface Product {
    id:number;
    name:string;
    Category:string;
    description:string
    img:string;
    newproduct:boolean|null
    images:{
        image1:string;
        image2:string;
        image3:string;
    };

    price:string;
    text:string;
    data:string;
    size:string[];
    item:string[]
}

export interface Shop{

    id:number;
    img:string;
    url:string;
    name:string
  }
 

  export interface Home{
     id:number;
  }

  

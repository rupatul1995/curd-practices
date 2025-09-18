import axios from "axios";
import { useEffect, useState } from "react";


const Fakeproducts=() =>{
const [productData ,setproductData]=useState([]);

async function Getfakeapi(){
    try{
     const result= await axios.get('https://fakestoreapi.com/products')
// console.log(result.data);
setproductData(result.data);
    }catch(error){
        console.log(error,"error");
    }
}

useEffect(()=>{
Getfakeapi();

},[]);

    return(
        <div>
            <h1>hello product</h1>

            {productData.map((product)=>(

                <div>
                    <img src={product.image}/>
      <h1>{product.price}</h1>

      <h1>{product.title}</h1>
      </div>

            ))}
        </div>
    );
}
export default Fakeproducts;

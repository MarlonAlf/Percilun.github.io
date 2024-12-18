import useFetchAwait from "../Common_logic/useFetchAwait";
import Card from "../Shop_page/Card";
import {useState, useEffect } from "react";
import useFetch from "../Common_logic/useFetch";


const New_arrivals = () => {

    // 1. GETTING THE DATA

    // const [products, setProducts ] = useState([]);
      
    const {data: products, isLoading: productsPending, error: productsError} = useFetchAwait("http://127.0.0.1:5000/get_products");
    // console.log("Poducts in New_arrivals", products);


 // he logrado que funcione utilizando useFetchAwait, ahora tengo que completar el error handeling y entender bien porque el React tutorial lo hace diferente.

   

    return ( 
        <section id="products">
            <div className="pdcts-title">
                <h2>New Arrivals</h2>
                <p>Get Your Hands On A Launching Price </p>
            </div>
            {/* Filters the products db by New = true */}
            <div className="pdct-container">
                <div className="pdct-container">
                    {productsError && <div>{ productsError }</div>}
                    {productsPending && <div>Loading....</div>}
                    {products && <Card products = { products.filter((item) => item.isNew ==='true')} />}
                </div>            
            </div>
         </section>
     )
}
 
export default New_arrivals;
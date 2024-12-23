import useFetchAwait from "../Common_logic/useFetchAwait";
import Card from "../Shop_page/Cards";
import {useState, useEffect } from "react";
import useFetch from "../Common_logic/useFetch";


const New_arrivals = () => {

    // GETTING THE DATA
      
    const {data: products, isLoading: productsLoading, error: productsError} = useFetchAwait("http://127.0.0.1:5000/get_products");
    // console.log("Poducts in New_arrivals", products);


   

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
                    {productsLoading && <div>Loading....</div>}
                    {products && <Card products = { products.filter((item) => item.isNew ==='true')} />}
                </div>            
            </div>
         </section>
     )
}
 
export default New_arrivals;
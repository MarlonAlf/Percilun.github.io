import New_arrivals from "../Home_page/New_arrivals";
import Hero_2 from "./Hero_2";
import useFetch from "../Common_logic/useFetch";
import Card from "../Shop_page/Card";
import { useState } from "react";


const Shop = () => {

    // 1. GETTING THE DATA FROM A JSON DATABASE

    // Fetching peoducts from json db using useFetch form Common_logic folder

    const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');

  
    const [selectedCategory, setSelectedCategory] = useState ('All');

    const handleSelect = (event) => {
         setSelectedCategory(event.target.value);
    };

    return ( 
        <div>
            <div id="products">
                <div class="pdct-container">
                <Hero_2 />
                <New_arrivals />
                </div>
            </div>
            
            <div id="products">
                <div className="pdcts-title-select">
                    <h4>Select Category</h4>
                    <select id="select_2" onChange={handleSelect}>
                        <option value='All' selected >All Products</option>
                        <option value='Educational'>Educational</option>
                        <option value='Home'>Home</option>
                        <option value='Kitchen'>Cocina</option>
                        <option value='music'>Musica</option>
                    </select>
                </div>
                {/* All and null are used as a empty values this is because they are no part of the values in the data base */}                
                <div>
                    {productsError && <div>{ productsError }</div>}
                    {productsPending && <div>Loading....</div>}
                    {products && <Card products = { products.filter((item) => item.Category == selectedCategory || selectedCategory === 'All') } />}
                </div>
            </div>
        </div>
     )
}
 
export default Shop;
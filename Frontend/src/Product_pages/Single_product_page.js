import { useEffect, useState } from "react";
import New_arrivals from "../Home_page/New_arrivals";
import Pdct_desc from "./Product_description";
import Select_pdct from "./Select_product";
import Pdct_bullets from "./Product_bullets";
import Pdct_img from "./Product_images";
import useFetch from "../Common_logic/useFetch";
import { useParams } from 'react-router-dom';


const SPP = () => {
    const { cardId } = useParams();
    
   
    // GETTING THE DATA FROM A JSON DATABASE
    
     // Fetching products from json db using useFetch form Common_logic folder

     const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');

     let currentProduct = null;
     if (products !== null) {
            // console.log('products ', products);
            currentProduct = products.filter((item) => item.id == parseInt(cardId));
        
            // console.log('current Product', currentProduct);
            // console.log('cardId', cardId);
            // console.log('Item', item.id);

            var group = currentProduct[0].select_group;
     }
    

    //  THE PRODUCT_SELECT COMPONENT DETERMINES WHAT IMAGE, DESCRIPTION, BULLETS POINT WILL BE DISPLAYED
  
   // State variable to hold the selected value
   const [selectedAnimal, setSelectedAnimal] = useState( cardId );



   //This function is going to be passed as a prop, in order to received the value from the child component Product_select
   const handleSelectAnimal = (value) => {
       setSelectedAnimal(value);
   };


    useEffect(() => {
        setSelectedAnimal(cardId);
    }, [cardId]);

  
    return (       
    <div>
        <div className="listing">

            {productsError && <div>{ productsError }</div>}
            {productsPending && <div>Loading....</div>}

            {/* Display fetched images */}
            {products && <Pdct_img product = { products.filter((item) => item.id == parseInt(selectedAnimal))}/>}            

            <div id="listing-desc"> 
                <span>Percilun</span>
                <div>
                    {/* Display fetched description */}
                    
                    {products && <Pdct_desc product = {products.filter((item) => item.id == parseInt(selectedAnimal))} /> } 
                    {/* filter returns one array, but then when I passed to the child component as a prop, it encapsulates the array inside an object, in order to access it I will need props.arrayname */}   

                    {products !== null && <Select_pdct onSelect={handleSelectAnimal} selected_group = {products.filter((item) => item.select_group == group)} currentProduct = {currentProduct}/> }{/*Pass handleSelectAnimal function as prop */}
            
                </div>                  
                <div> 
                    <input type="number" value="1"  id="quantity" />
                    <input type="submit" value="Add To Cart" autoComplete="off"  id="add" />
                </div>
                    {/* Display fetched details */}
                    {products && <Pdct_bullets product = { products.filter((item) => item.id == parseInt(selectedAnimal))}/>}
                   
                </div>
        </div>

        <div id="products">
            <div class="pdct-container">
                <New_arrivals />
            </div>
        </div>

    </div>
      
     )
    
}


export default SPP;
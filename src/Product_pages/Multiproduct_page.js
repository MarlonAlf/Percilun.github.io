import { useState } from "react";
import useFetch from "../Common_logic/useFetch";
import New_arrivals from "../Home_page/New_arrivals";
import Pdct_desc from "./Product_description";
import Select_pdct from "./Select_product";
import Pdct_bullets from "./Product_bullets";
import Pdct_img from "./Product_images";


const MPP = () => {

    // GETTING THE DATA FROM A JSON DATABASE
    
     // Fetching peoducts from json db using useFetch form Common_logic folder

     const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');
     
    //  THE PRODUCT_SELECT COMPONENT DETERMINE WHAT IMAGE, DESCRIPTION, BULLETS POINT WILL BE DISPLAYED
     
    // State variable to hold the selected value
    const [selectedAnimal, setSelectedAnimal] = useState( 1 );

    //This function is going to be passed as a prop, in order to received the value from the child component Product_select
    const handleSelectAnimal = (value) => {
        setSelectedAnimal(value);
    };


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
                    {/* In JavaScript, values retrieved from HTML elements, such as the value attribute of a <select> option, 
                    are always treated as strings. This behavior ensures consistency in how data is handled, as HTML attributes 
                    and DOM properties are always represented as strings. */}
                    {/* the singular 'product' specifies the name of the prop, and  'products' (the variable) provides the value to be passed to that prop. */}

                    {/* Display fetched description */}
                    {/* HERE THIS ERROR TOOK ME 50 HOURS === has to be with parseInt, otherwise use == */}
                    {products !== null && <Pdct_desc product = {products.filter((item) => parseInt(item.id) === parseInt(selectedAnimal))} /> } 


                    {/* filter returns one array, but then when I passed to the child component as a prop, it emcapsulates the array inside an object, in order to access it I will need props.arrayname */}             
 
                    <Select_pdct onSelect={handleSelectAnimal} /> {/*Pass handleSelectAnimal function as prop */}
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
     );
}


export default MPP;
import { useEffect, useState } from "react";
import New_arrivals from "../Home_page/New_arrivals";
import Pdct_desc from "./Product_description";
import Select_pdct from "./Select_product";
import Pdct_bullets from "./Product_bullets";
import Pdct_img from "./Product_images";
import useFetchAwait from "../Common_logic/useFetchAwait";
import { useParams } from 'react-router-dom';
import Add_cart from "../Cart_page/Add_cart";


const SPP = () => {
    const { cardId } = useParams();
    
   
      // Fetching products from db using useFetchAwait from Common_logic folder
      
     const { data: products, isLoading: productsLoading, error: productsError} = useFetchAwait("http://127.0.0.1:5000/get_products");


    const currentProduct = products?.filter((item) => item.id === parseInt(cardId)) || [];
    const group = currentProduct.length > 0 ? currentProduct[0].group : null;

     if (products !== null && products.leng > 0) {
            currentProduct = products.filter((item) => item.id == parseInt(cardId));
                     
            if(currentProduct.length > 0){
                group = currentProduct[0].group;
            }
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


            {/* Display fetched images */}
            {productsError && <div>{ productsError }</div>}
            {productsLoading && <div>Loading....</div>}
            {products && <Pdct_img product = {products.filter((item) => item.id === parseInt(selectedAnimal))}/>}            

            <div id="listing-desc"> 
                <span>Percilun</span>
                <div>
                    {/* Display fetched description */}
                    {productsError && <div>{ productsError }</div>}
                    {productsLoading && <div>Loading....</div>}
                    {products && <Pdct_desc product = {products.filter((item) => item.id == parseInt(selectedAnimal))} /> } 
                    {/* filter returns one array, but then when I passed to the child component as a prop, it encapsulates the array inside an object, in order to access it I will need props.arrayname */}   

                    {!productsLoading && products &&  <Select_pdct onSelect={handleSelectAnimal} selected_group = {products.filter((item) => item.group == group)} currentProduct = {currentProduct}/> }
                    {/*It passes the handleSelectAnimal function as prop.  In order for the select form to show on the screen, not only products has to be truthful, but inside the Select_product component, products has to be > 1. The var group will filter what item will be display in the select form */}
            
                </div>                  
                <div> 
                  {currentProduct?.length > 0 && <Add_cart currentProduct={currentProduct}/>}
                </div>
                    {/* Display fetched details */}
                    {productsError && <div>{ productsError }</div>}
                    {productsLoading && <div>Loading....</div>}
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
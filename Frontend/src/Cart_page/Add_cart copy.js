import useFetchAwait from "../Common_logic/useFetchAwait";



const Add_cart = (prop) => {
    const product = prop.currentProduct[0];

   

    if(product?.inCart == "true"){
        console.log("true");
        return ( 
            <input type="submit" value="Added!!" autoComplete="off"  className="added_to_cart" />
         );
        
    }else{
        console.log("false");
        return(
        <input type="submit" value="Add To Cart" autoComplete="off"  className="add_to_cart" />
        );
    }
}
 
export default Add_cart;
import useFetchAwait from "../Common_logic/useFetchAwait";
import { useState } from "react";




const Add_cart = (prop) => {
    const product = prop.currentProduct[0];

    const id = product.id;
    
    const [addClicked, setAddClicked] = useState (false);

    //!addClicked flips the boolean value. If it is true, it becomes false, and if it is false, it becomes true.
    const handleClick = () => {
        setAddClicked(!addClicked);

    fetch(`http://localhost:5000/update_product/${id}`, {
        method: "PATCH",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify({inCart: 'true' }) 
    }).then(() => {
        // console.log('post complete'); 
    }) 
}

    return ( 
        <input onClick={handleClick} type="submit" className={`${addClicked ? 'add_to_cart' : 'added_to_cart'}`} value={`${addClicked ? 'Add To Cart' : 'Added!!'}`} autoComplete="off"/>
    );
    
}
 
export default Add_cart;
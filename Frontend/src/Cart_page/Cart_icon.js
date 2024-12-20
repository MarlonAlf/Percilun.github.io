import React, { useState } from 'react';
// This Cart_icon Component will change the in_cart atribute in the db
// The Link component allows for creating navigation links in React applications.
import { Link } from 'react-router-dom';

// FontAwesomeIcon is needed to render Font Awesome icons in React components.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Cart_icon = (props) => {

    const id = props.productId;
    // console.log('id-------------------', id);


    const [cartClicked, setCartClicked] = useState (false);

    //!cartClicked flips the boolean value. If it is true, it becomes false, and if it is false, it becomes true.
    const handleClick = () => {
        setCartClicked(!cartClicked);

       
        fetch(`http://localhost:5000/update_product/${id}`, {
            method: "PATCH",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({inCart: 'true' }) 
        }).then(() => {
            // console.log('post complete'); 
        }) 
    }


    return ( 
        <Link to="#" onClick={handleClick} >
            <FontAwesomeIcon className={`add-to-cart ${cartClicked ? 'cart_clicked' : 'cart_unclicked'}`} icon={`${cartClicked ? 'fa-solid fa-check':'fa-solid fa-cart-shopping'} `}/>
        </Link> 
     );
}
 
export default Cart_icon;
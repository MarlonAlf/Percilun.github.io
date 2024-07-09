import React, { useState } from 'react';

// The Link component allows for creating navigation links in React applications.
import { Link } from 'react-router-dom';

// FontAwesomeIcon is needed to render Font Awesome icons in React components.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Cart_icon = (props) => {

    const id = props.productId;
    // const id = "1";
    console.log('id-------------------', id);


    const [cartClicked, setCartClicked] = useState (false);

    //!cartClicked flips the boolean value. If it is true, it becomes false, and if it is false, it becomes true.
    const handleClick = () => {
        setCartClicked(!cartClicked);

        // console.log('id-----clicked--------------', id);
        fetch(`http://localhost:8000/products/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({in_cart: 'true' }) 
        }).then(() => {
            console.log('post complete'); 
        }) 
    }


    return ( 
        <Link to="#" onClick={handleClick} >
            <FontAwesomeIcon className={`add-to-cart ${cartClicked ? 'cart_clicked' : 'cart_unclicked'}`} icon={`${cartClicked ? 'fa-solid fa-check':'fa-solid fa-cart-shopping'} `}/>
        </Link> 
     );
}
 
export default Cart_icon;
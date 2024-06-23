// The Link component allows for creating navigation links in React applications.
import { Link } from 'react-router-dom';

// FontAwesomeIcon is needed to render Font Awesome icons in React components.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart_pdcts from './Cart_pdcts';
import Cart_totals from './Cart_totals';

// The library object is necessary to add icon sets to the Font Awesome library.
// import { library } from '@fortawesome/fontawesome-svg-core';

// Importing the fas icon set makes solid style Font Awesome icons available for use in the application.
// import { fas } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    return ( 
        <div>
        <div className="shop-hero" id="cart-hero">
            <h1>#cart</h1>
            <p>Add your coupon code & SAVE up to 70%!</p>
        </div>

        <Cart_pdcts />
        </div>   

);
}
 
export default Cart;

// The Link component allows for creating navigation links in React applications.
import { Link } from 'react-router-dom';

// FontAwesomeIcon is needed to render Font Awesome icons in React components.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// The library object is necessary to add icon sets to the Font Awesome library.
import { library } from '@fortawesome/fontawesome-svg-core';

// Importing the fas icon set makes solid style Font Awesome icons available for use in the application.
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);




const Navbar = () => {
    return ( 
        <div>
        <nav className="nav-bar">
            <div>
                <Link to="/">
                    <img id="logo" src="/images/logo_black.png" alt='logo'/>
                </Link>
            </div>
            <div className="nav-links">
                <a href="#" id="close"><i className="fa-solid fa-square-xmark"></i></a>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">
                    <FontAwesomeIcon icon={['fas', 'cart-shopping']} />
                </Link>
            </div>

            <div className="mobile-bar">
                <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
                <i className="fas fa-outdent" id="clickable"></i>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;
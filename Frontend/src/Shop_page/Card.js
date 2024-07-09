//DISPLAYS ALL THE SELECTED CARDS

import Cart_icon from '../Cart_page/Cart_icon.js';

// The Link component allows for creating navigation links in React applications.
import { Link } from 'react-router-dom';

// FontAwesomeIcon is needed to render Font Awesome icons in React components.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Destructured props from Shop component
const Card = ({products}) => {

    return ( 
        <div className="pdct-container">
            
            {products.map((product) =>
                { const imagePath = `${process.env.PUBLIC_URL}/${product.img_1}`;
                    const productId = product.id;
                    console.log('????????????????', productId)
                    return(                                    
                        <Link to={`/SPP/${product.id}`} className='Link_style' > 
                            <div key={product.id} className="pdct-box">
                                <img src={imagePath}/>               
                                <div className="des">
                                    <span>Percilun</span>
                                    <h5>{ product.title }</h5>
                                    <div>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" /> </i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" /> </i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" /> </i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" /> </i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" /> </i>
                                    </div>
                                    <Cart_icon productId = {productId}/>
                                    <h4>€{ product.price }</h4>
                                </div>
                            </div>
                        </Link>
                    );
                }
            )};
            
        </div>
     )
            // The return statement is used within the map function to return JSX elements for each item in the products array. In this specific case, it's returning the JSX elements for each product card, which includes the product image, title, price, etc.

            // Here's why the return statement is used there:

            // Mapping Over Products Array: The map function is used to iterate over each item in the products array.

            // Image Path Generation: Inside the map function, a dynamic imagePath variable is created for each product. This variable concatenates the PUBLIC_URL environment variable with the image path of the current product (product.img_1).

            // Returning JSX Elements: The return statement is used to return JSX elements representing each product card. This includes the product image, title, price, etc. The return statement is necessary to return these JSX elements so that they can be rendered by React.

            // By using return within the map function, you ensure that each product card is correctly generated and included in the final JSX that will be rendered by React.







}
 
export default Card;
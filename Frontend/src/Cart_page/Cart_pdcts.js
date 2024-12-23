import { Link } from "react-router-dom";
import useFetchAwait from "../Common_logic/useFetchAwait";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart_totals from "./Cart_totals";

const Cart_pdcts = () => {

 // Fetching products from db using useFetchAwait form Common_logic folder

 const { data: products, isPending: productsPending, error: productsError} = useFetchAwait('http://localhost:5000/get_products');

 const [quantity, setQuantity] = useState(1);


 const handleQuantityChange = (event, productId) => {
        const newQuantity = (parseInt(event.target.value));

        setQuantity((prevQuantity) => {const updatedQuantities = { ...prevQuantity, [productId]: newQuantity };
            // console.log('updateQuantities',updatedQuantities);
            // console.log('newQuantity',newQuantity);
            return (updatedQuantities);     
     })};

     // DELETE PRODUCTS
     var total = 0;

     const handleDelete = (id) => {
       
        fetch(`http://localhost:5000/update_product/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({inCart: 'false' })
        }).then(() => {
            // console.log('post complete'); 
        })
        setQuantity("0");
        console.log('id-----clicked--------------', id);

    }

 return (    
    <div id="cart">
        <table className="cart-table">
            <thead>
                <tr>
                    <th>REMOVE</th>
                    <th>IMAGE</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                {productsError && <div>{ productsError }</div>}
                {productsPending && <div>Loading....</div>}
                {products && products.filter(product => product.inCart == 'true').map((product) => {
                    const imagePath = `${process.env.PUBLIC_URL}${product.img1}`;

                    const subTotal = Number(quantity[product.id] * product.price || product.price)  // Number will keep the  number an integer
                    total += subTotal;
                    return(
                        <tr>
                            <td>
                                <button  className="delete_button" to="#" onClick={() => handleDelete(product.id)}>
                                        <FontAwesomeIcon icon={['fas', 'fa-times-circle']} />
                                </button>
                            </td>
                            <td><img src={imagePath}/></td>                    
                            <td>{ product.title }</td>
                            <td>€{ product.price }</td>
                            <td>
                            <input
                                type="number"
                                // Below value is equal to a key value pair, which at first does not exist because its value is 0, but after any value has being selected, quantity is been replaced by an object.
                                value={quantity[product.id]|| 1 /* ||: This is the logical OR operator. It returns the value of its first operand if the operand is truthy; otherwise, it evaluates and returns the value of its second operand. */} 
                            
                                onChange={(e) => handleQuantityChange(e, product.id, product.price)}
                                min="0"
                                />

                            </td>
                            <td>€ {subTotal.toFixed(2)}</td> 
                            {/* to.Fixed limits it to two figures retuns a string and  */}
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div>
            {/* <Cart_totals total ={total}/> */}
        </div>
    </div>
    
     );
}

 
export default Cart_pdcts;


// setQuantity updates the state of the component, and the state can hold complex data structures like objects. When you call setQuantity with a new object, IT WILL CREATE AN OBJECT and React will compare this new object with the previous state to determine what parts of the component need to be re-rendered.

// If any part of the new object differs from the corresponding part of the previous state object, React will re-render the component, updating only the parts of the UI that have changed.

// In your case, when you call setQuantity with updatedQuantities, React will compare updatedQuantities with the previous state object. If there are differences, React will re-render the component, updating the UI accordingly.
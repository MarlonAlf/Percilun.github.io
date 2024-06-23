import { Link } from "react-router-dom";
import useFetch from "../Common_logic/useFetch";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart_totals from "./Cart_totals";

const Cart_pdcts = () => {

 // Fetching products from json db using useFetch form Common_logic folder

 const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');

 const [quantity, setQuantity] = useState(1);


 const handleQuantityChange = (event, productId) => {
        const newQuantity = (parseInt(event.target.value));

        setQuantity((prevQuantity) => {//When you call setQuantity with a function as an argument React automatically passes the current state value (prevQuantity) to your function as an argument. This allows you to access the previous state and update it accordingly. In summary, prevQuantity is not a function itself; it's a parameter passed to the function you provide to setQuantity. The name prevQuantity is just a convention, and you can name it whatever you want. It represents the previous state value of the quantity state variable. See more bellow.
            const updatedQuantities = { ...prevQuantity, [productId]: newQuantity };
            console.log('updateQuantities',updatedQuantities);
            console.log('newQuantity',newQuantity);
            return (updatedQuantities);     
     })};

     var total = 0;

     const handleDelete = (id) => {
       

        console.log('id-----clicked--------------', id);
        fetch(`http://localhost:8000/products/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({in_cart: 'false' })
        }).then(() => {
            console.log('post complete'); 
        })
        setQuantity = 0;
 
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

                {/* select the products that have been added to the cart */}
                {products && products.filter(product => product.in_cart == 'true').map((product) => {
                    const subTotal = Number(quantity[product.id] * product.price || product.price)  // Number will keep the integer a number
                    total += subTotal;
                    return(
                        <tr>
                            <td>
                                <Link to="#" onClick={() => handleDelete(product.id)}>
                                        <FontAwesomeIcon icon={['fas', 'fa-times-circle']} />
                                </Link>
                            </td>
                            <td><img src={product.img_1}/></td>
                        
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
            <Cart_totals total ={total}/>
        </div>
    </div>
    
     );
}

 
export default Cart_pdcts;


// setQuantity updates the state of the component, and the state can hold complex data structures like objects. When you call setQuantity with a new object, IT WILL CREATE AN OBJECT and React will compare this new object with the previous state to determine what parts of the component need to be re-rendered.

// If any part of the new object differs from the corresponding part of the previous state object, React will re-render the component, updating only the parts of the UI that have changed.

// In your case, when you call setQuantity with updatedQuantities, React will compare updatedQuantities with the previous state object. If there are differences, React will re-render the component, updating the UI accordingly.
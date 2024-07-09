
const Cart_totals = (props) => {

    const total = props.total;


    // const [total, setTotal] = useState(0);

    // setTotal(totalQuantity);

    return ( 
        <section className="coupon">
            <div className="coupon-apply">
                <h3> Apply Coupon</h3>
                <input type="text" value="Enter Your Coupon"/>
                <button>Apply</button>
            </div>
            <div className="total">
                <table className="total-table">
                    <thead>
                        <h3>Cart Totals</h3>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>€ {total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <th>€ {total.toFixed(2)}</th>
                        </tr>

                    </tbody>

                </table>
                <button>Preceed to checkout</button>
            </div>
        </section>
     );
}
 
export default Cart_totals;
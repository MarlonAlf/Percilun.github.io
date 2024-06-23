import Card from "../Shop_page/Card";
import useFetch from "../Common_logic/useFetch";

const BestSellers = () => {

 // Fetching peoducts from json db using useFetch form Common_logic folder

    const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');


    return ( 
        <section id="products">
        <div className="pdcts-title">
            <h2>Best Sellers </h2>
            <p>See Our Customers Favorites</p>
        </div>
        <div>
    </div>
        <div className="pdct-container">
            {productsError && <div>{ productsError }</div>}
            {productsPending && <div>Loading....</div>}
            {products && <Card products = { products.filter((item) => item.New === 'false')} />}        
        </div>
    </section>
     );
}
 
export default BestSellers;
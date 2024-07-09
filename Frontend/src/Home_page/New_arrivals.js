import useFetch from "../Common_logic/useFetch";
import Card from "../Shop_page/Card";


const New_arrivals = () => {

    // 1. GETTING THE DATA FROM A JSON DATABASE

    // Fetching peoducts from json db using useFetch form Common_logic folder
  

    const { data: products, isPending: productsPending, error: productsError} = useFetch('http://localhost:8000/products');


    return ( 
        <section id="products">
            <div className="pdcts-title">
                <h2>New Arrivals</h2>
                <p>Get Your Hands On A Launching Price </p>
            </div>
            {/* Filters the products db by New = true */}
            <div className="pdct-container">
                <div className="pdct-container">
                    {productsError && <div>{ productsError }</div>}
                    {productsPending && <div>Loading....</div>}
                    {products && <Card products = { products.filter((item) => item.New === 'true')} />}
                </div>            
            </div>
         </section>
     )
}
 
export default New_arrivals;
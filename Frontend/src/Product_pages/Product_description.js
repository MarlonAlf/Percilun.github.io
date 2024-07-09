 //This component template recieves the prop with the ID for already filtered elements
const Pdct_desc = (props) => {
    
    const product = props.product[0];

    // I use props.product[0] because props is an object, inside that product is an array with only one element, previously I was using map but was not strictly nessesary

    return ( 

        <div>
                <div key={product.id}>
                    <h2>{ product.title }</h2>
                    <h1 id="foo"> € { product.price }</h1>
                </div>
        
        </div>
     );
}
 
export default Pdct_desc; 
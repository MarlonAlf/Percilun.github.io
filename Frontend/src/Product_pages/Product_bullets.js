const Pdct_bullets = (props) => {
        const bullet = props.product && props.product[0];
       
        
        if (!bullet) {
            return <div>Loading product details...</div>;
        }

        return ( 
        <div>
                <div>
                    <h3>Product Details</h3>
                        <p>
                            { bullet.bullet1 }
                            <br/>
                            <br/>
                            { bullet.bullet2 }    
                            <br/>
                            <br/>
                            { bullet.bullet3 }
                            <br/>
                            <br/>
                            { bullet.bullet4 }
                            <br/>
                            <br/>
                            { bullet.bullet5 }
                        </p>

                </div>

        </div>
     );
}
 
export default Pdct_bullets;
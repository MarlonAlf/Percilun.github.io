const Pdct_bullets = (props) => {
        const bullet = props.product[0];
        
        return ( 
        <div>
                <div>
                    <h3>Product Details</h3>
                        <p>
                            { bullet.bullet_1 }
                            <br/>
                            <br/>
                            { bullet.bullet_2 }    
                            <br/>
                            <br/>
                            { bullet.bullet_3 }
                            <br/>
                            <br/>
                            { bullet.bullet_4 }
                            <br/>
                            <br/>
                            { bullet.bullet_5 }
                        </p>

                </div>

        </div>
     );
}
 
export default Pdct_bullets;
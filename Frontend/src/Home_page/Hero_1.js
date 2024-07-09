import { Link } from 'react-router-dom';

const Hero1 = () => {
    return ( 
        <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to="/shop">
            Shop now
        </Link>
    </section>
     );
}
 
export default Hero1;
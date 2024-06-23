const Footer = () => {

    const payment_img = `${process.env.PUBLIC_URL}/images/payment-methods.png`;
    const googleplay_img = `${process.env.PUBLIC_URL}/images/google-play.png`;
    const logo_img = `${process.env.PUBLIC_URL}/images/logo_black.png`;
    // These have to be in two steps, because it first have to load this part and then the one inside return()

    return ( 
        <section className="footer2">
        <div id="contact">
            <div> <img id="logo"   src={logo_img}/></div>
            <h5>Contact</h5>
            <h6><span>Address:</span>  Avenida Perez Galdos</h6>
            <h6><span>Phone:</span> 075965952</h6>
            <h6><span>Hours: </span> 10:00 - 18:00 Mon- Sat</h6>
        </div>
        <div id="about">
            <h5> About</h5>
            <h6><a href="about_us.html">About Us</a></h6>
            <h6><a href="#">Delivery Information</a></h6>
            <h6><a href="#">Pricay Policy</a></h6>
            <h6><a href="#">Terms & Conditions</a></h6>
            <h6><a href="#">Contact Us</a></h6>
        </div>
        <div id="account">
            <h5>My Account</h5>
            <h6><a href="#">Sign In</a></h6>
            <h6><a href="#">View Cart</a></h6>
            <h6><a href="#">My Wishlist</a></h6>
            <h6><a href="#">Track My Order</a></h6>
            <h6><a href="#">Help</a></h6>
        </div>
        <div id="install">
            <h5>Install App</h5>
            <h6>From App Store or Google Play</h6>
            <img src={googleplay_img}/>              

        </div>
        <div id="follow">
            <h5>Follow Us</h5>
            <i className=" fab fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-youtube"></i>
        </div>
        <div id="payment">
            <h5>Secured Payment Gateways</h5>
                <img src={payment_img}/>              
        </div>
                {/* Problem solution
                In your first example, ${process.env.PUBLIC_URL}/${'/images/payment-methods.png'}, you're essentially telling JavaScript to concatenate the value of process.env.PUBLIC_URL with the string '/images/payment-methods.png', resulting in a longer string. It's equivalent to process.env.PUBLIC_URL + '/images/payment-methods.png'.

                However, in the correct version, ${process.env.PUBLIC_URL}/images/payment-methods.png, you're correctly using the template literal to interpolate process.env.PUBLIC_URL directly into the string, resulting in a single string that represents the correct path. */}
        <div id="copy">
            <h6>© SOLZENITH LLC. USA</h6>
        </div>


    </section>

     );
}
 
export default Footer;
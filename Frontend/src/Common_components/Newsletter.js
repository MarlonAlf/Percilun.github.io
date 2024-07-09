const Newsletter = () => {
    return ( 
        <section class="newsletter">
        <div>
            <h3>Sign Up For Newsletters</h3>
            <h6> Get E-mail updates about our latest shop and <span>special offers.</span></h6>
        </div>
        <div>
            <form>

               <button class="green-button" type="text" value="Your email address"  id="news-input" ></button>
               <input type="submit" value="Sign Up" autocomplete="off"  id="news-submit" />

            </form>
        </div>
    </section>
     );
}
 
export default Newsletter;
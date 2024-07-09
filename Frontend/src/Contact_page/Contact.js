import MapLink from "../Common_components/Maplink";

const Contact = () => {
    return ( 
        <div>
            <div className="shop-hero" id="contact-hero">
                <h1>#let's talk</h1>
                <p>LLEAVE A MESSAGE, We love to hear from you!</p>
            </div>

            <div className="contact-main">
                <div className="details">
                    <h5>GET IN TOUCH</h5>
                    <h2>Visit us  in Valencia or contact us today</h2>
                    <h5>Head Office</h5>
                    <ul>
                        <li><i className="fa-regular fa-map"></i>Avenida Perez Galdos 66 Valencia</li>
                        <li><i className="fa-regular fa-envelope"></i>contact@percilun.es</li>
                        <li><i className="fa-solid fa-mobile-screen"></i>+44 07596829264</li>
                        <li><i className="fa-regular fa-clock"></i> Monday to Sunday: 9.00 am to 16.00 pm</li>
                    </ul>
                </div>


                <MapLink/>
                I need to lear how to connnect with a API in order to use maps properly
            </div>


            <div className="contact-form">
                <div className="forms">
                    <h5>LEAVE A MESSAGE</h5>
                    <h2>We love to hear from you</h2>
                    <form>
                        <input type="text" placeholder="Your name"/>
                        <input type="text" placeholder="E-mail"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                        <button id="contact-submit" type="submit" value="Submit" autocomplete="off">Submit</button>

                    </form>
                </div>
                <div className="staff">
                    <img src="images/us/mario.png"/>
                    <div>
                        <h3>Mario bros</h3>
                        <h5>Senior Marketing Mananger</h5>
                        <h5>Phone: +44 07596829264</h5>
                        <h5>Email: manager@percilun.es</h5>
                    </div>
                    <img src="images/us/luigi.png"/>
                    <div>
                        <h3>Luigi bros</h3>
                        <h5>Senior Marketing Mananger</h5>
                        <h5>Phone: +44 07596829264</h5>
                        <h5>Email: manager@percilun.es</h5>
                    </div>
                    <img src="images/us/joshi.png"/>
                    <div>
                        <h3>Joshi</h3>
                        <h5>Senior Marketing Mananger</h5>
                        <h5>Phone: +44 07596829264</h5>
                        <h5>Email: manager@percilun.es</h5>
                    </div>
                    <img src="images/us/toad.png"/>
                    <div>
                        <h3>Toad</h3>
                        <h5>Senior Marketing Mananger</h5>
                        <h5>Phone: +44 07596829264</h5>
                        <h5>Email: manager@percilun.es</h5>
                    </div>


                </div>
            </div>

        </div>
     );
}
 
export default Contact;
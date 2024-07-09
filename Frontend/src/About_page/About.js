import Feature from '../Common_components/Mini_features';
import Vid_picklink from '../Common_components/Vid_picklink';


const About = () => {
    return ( 
        <div>
            <div className="shop-hero" id="about-hero">
                <h2>#know Us</h2>
                <p>It all started in beatuful Valencia</p>
            </div>
            <div className="about-top">
                <div>
                    <img src="images/us/familia.jpg"/>

                </div>
                <div >
                    <h1>Who We Are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <abbr title="Abrebiacion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</abbr>   
                    <br/>
                    <br/>
                </div>
            </div>

            <Vid_picklink/>
            <Feature />

         </div>
     );
}
 
export default About;    
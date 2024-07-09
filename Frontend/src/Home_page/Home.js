import Hero1 from './Hero_1';
import Feature from '../Common_components/Mini_features';
import New_arrivals from './New_arrivals';
import Call_to_action_1 from './Call_to_acction_1';
import Banners from './Banners';
import BestSellers from './BestSellers';
const Home = () => {
    return ( 
        <div>
        <Hero1 />
        <Feature />
        <New_arrivals />
        <Call_to_action_1 />
        <BestSellers />
        <Banners />
        </div>
     );
}
 
export default Home;
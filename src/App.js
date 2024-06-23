import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common_components/Navbar';
import Home from './Home_page/Home';
import Shop from './Shop_page/Shop';
import Newsletter from './Common_components/Newsletter';
import Footer from './Common_components/Footer';
import Contact from './Contact_page/Contact';
import About from './About_page/About';
import Cart from './Cart_page/Cart';
import MPP from './Product_pages/Multiproduct_page';
import SPP from './Product_pages/Single_product_page';
import TestPage from './Product_pages/TestProductPage';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
            {/* This is the new way in react router version 6 */}
              <Route path='/' element={< Home />}></Route>          
              <Route path='/Shop' element={< Shop />}></Route>          
              <Route path='/Contact' element={< Contact />}></Route>         
              <Route path='/About' element={< About />}></Route>
              <Route path='/Cart' element={< Cart />}></Route>   
              <Route path='/MPP' element={< MPP />}></Route>
              <Route path='/SPP/:cardId' element={< SPP />}></Route>  
              <Route path='/TestPage' element={< TestPage />}></Route>        
      
          </Routes>
        <Newsletter />
        <Footer />
 
      </div>
    </div>
    </Router>
  )  
} 

export default App;

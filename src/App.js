import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Header from './Components/Header';
import "./index.css";
import Footer from './Components/Footer';
import "./tailwind.css";
import Home from './Components/Views/Home';
import About from './Components/Views/About';
import Product from './Components/Views/Product';


function App() {
  return (
    <div>
      
      <Router>
      <Header/>
        
        <div className='p-3'>
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products/:id" element={<Product/>} />

          </Routes>
        </div>
        <Footer/>
      </Router>
      <Footer/>
    </div>
  );
}

//element={Home}
//

export default App;

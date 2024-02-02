import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import "./index.css";
import Footer from './Components/Footer';
import "./tailwind.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div>
      
      <Router>
      <Header/>
      <HelloWorld name="Quentin"/>
        
        <Routes>
          <Route exact path="/" element={<h1 className='font-bold text-2xl'>This is the home page</h1>}/>
          <Route path="/about" element={<h1 className='font-bold text-2xl'>About us</h1>}/>
          
        </Routes>
        <Footer/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

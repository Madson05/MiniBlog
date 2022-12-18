
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// pages
import About from './pages/About/About';
import Home from './pages/Home/Home';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>

          </Routes>
          
        </div>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;

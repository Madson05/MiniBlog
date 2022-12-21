
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";


// hooks 
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";


// context 
import { AuthProvider } from "./context/AuthContext";


// css 
import './App.css';

// pages
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {

  const [user, setUser] = useState(undefined);
  const auth = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <div className="App">
      

      <AuthProvider value = {user}>
        <BrowserRouter>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>

            </Routes>
            
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

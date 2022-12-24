
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";


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
import Dashboard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/CreatePost/CreatePost";

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user.email)
    });
  }, [auth]);

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
              <Route path='/login' element={!user? <Login/>: <Navigate to = "/"/>}/>
              <Route path='/register' element={!user? <Register/>: <Navigate to = "/"/>}/>
              <Route path='/dashboard' element={user? <Dashboard/>: <Navigate to = "/login"/>}/>
              <Route path='/posts/create' element={user? <CreatePost/>: <Navigate to = "/login"/>}/>

            </Routes>
            
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

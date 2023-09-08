import React from "react";
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Contactus from './components/Contactus';
import BrowseLocation from './components/BrowseLocation';



import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserProvider } from './UserContext';




import { Toaster} from 'react-hot-toast';
import Signup from './components/Signup';
import Addplaces from './components/Addplaces';
import ViewPlaces from "./components/ViewPlaces";



function App() {
  
  return (
    <div >
      <Toaster  position ='top-right' />
      <BrowserRouter>
      <UserProvider>
      

      <Navbar />   
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='Home' />
          <Route element={<Signup />} path='Signup' />
          
          <Route element={<Login />} path='Login' /> 
          <Route element={<Contactus />} path='Contactus' />
          <Route element={<Addplaces />} path='Addplaces' />
          <Route element={<BrowseLocation />} path='Browselocation' />
          <Route element={<ViewPlaces />} path='ViewPlaces/:location' />
          
        </Routes>
        </UserProvider>
      

      </BrowserRouter>


    </div>
  );
}

export default App;



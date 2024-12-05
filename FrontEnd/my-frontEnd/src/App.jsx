import { useState } from 'react'
 
import './App.css'
import Home from './Componets/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Componets/Authorization/Singup'
import Login from './Componets/Authorization/Login'
import Footer from './Componets/Footer/Footer'
import NavBarOne from './Componets/NavBarOne/NavBarOne'
import NavBarTwo from './Componets/NavbarTwo/NavBarTwo'
 

function App() {

  return (
     <>
    <NavBarOne/>
    <NavBarTwo/>
     <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/singup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
 
     </Routes>
     <Footer/>
     </>
  )
}

export default App

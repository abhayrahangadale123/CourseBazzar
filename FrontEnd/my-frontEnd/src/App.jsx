import { useState } from 'react'
 
import './App.css'
import Home from './Componets/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './Componets/Authorization/Singup'
import Login from './Componets/Authorization/Login'
import Footer from './Componets/Footer/Footer'
import NavBarOne from './Componets/NavBarOne/NavBarOne'
import NavBarTwo from './Componets/NavbarTwo/NavBarTwo'
import Forget_Pass from './Componets/Authorization/Forget_Pass'
import Reset_Pass from './Componets/Authorization/Reset_Pass'
import CreateCourse from './Componets/CreateCourse/CreateCourse'
import StoreAll from './Componets/AllSkill_Text/AllCourseDetials/StoreAll'
import AddTocard from './Componets/AllSkill_Text/AddTocard'
import Chatbot from './Componets/Pages/ChatBot'
 

function App() {

  return (
     <>
    <NavBarOne/>
    <NavBarTwo/>
     <Routes>
      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/singup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Forget_pass" element={<Forget_Pass/>}></Route>
      <Route path="/api/reset-password/:token" element={<Reset_Pass/>}></Route>
      <Route path="/CreateCourse" element={<CreateCourse/>}></Route>

        {/* All Course details */}
        <Route path="/Course-detail/:id" element={<StoreAll/>} />
        <Route path="/Add-card" element={<AddTocard/>} />
        <Route path="/Chat" element={<Chatbot/>} />
 
     </Routes>
     <Footer/>
     </>
  )
}

export default App

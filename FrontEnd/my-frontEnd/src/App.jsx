import { useState } from 'react';
import './App.css';
// import Home from './Componets/Home/Home';
import Home from './Componets/Home/UserHome/Home';
import AdminHome from "./Componets/Home/AdminHome/AdminHome"
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './Componets/Authorization/Singup';
import Login from './Componets/Authorization/Login';
import Footer from './Componets/Footer/Footer';
import NavBarOne from './Componets/NavBarOne/NavBarOne';
import NavBarTwo from './Componets/NavbarTwo/NavBarTwo';
import Forget_Pass from './Componets/Authorization/Forget_Pass';
import Reset_Pass from './Componets/Authorization/Reset_Pass';
import CreateCourse from './Componets/Home/AdminHome/CreateCourse/CreateCourse';
import StoreAll from './Componets/AllSkill_Text/AllCourseDetials/StoreAll';
import AddTocard from './Componets/AllSkill_Text/AddTocard';
import Chatbot from './Componets/Pages/ChatBot';
import FileUpload from './Componets/FileUpload/FileUpload';
import PaymentSuccess from './Componets/PaymentStates/SuccessPay';
import CencalPay from './Componets/PaymentStates/CencalPay';
import MangeCourse from "./Componets/Home/AdminHome/MangeCourse"
import UserData from './Componets/Home/AdminHome/UserData';

function App() {
  const [showChat, setShowChat] = useState(false); 

  return (
    <div className="relative">
      <>
        <NavBarOne />
        <NavBarTwo />

        {/* रूट्स */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<AdminHome />} />
          <Route path="/singup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forget_pass" element={<Forget_Pass />} />
          <Route path="/api/reset-password/:token" element={<Reset_Pass />} />
          <Route path="/CreateCourse" element={<CreateCourse />} />
          <Route path="/Course-detail/:id" element={<StoreAll />} />
          <Route path="/Add-card" element={<AddTocard />} />
          <Route path="/UploadFile" element={<FileUpload/>} />
          <Route path="/success" element={<PaymentSuccess/>} />
          <Route path="/cancel" element={<CencalPay/>} />
          <Route path="/MangeCourse" element={<MangeCourse/>} />
          <Route path="/UserData" element={<UserData/>} />

        </Routes>

        {/* Chatbot Icon */}
        <div className="fixed bottom-8 right-8">
          <div
            className="cursor-pointer w-16"
            onClick={() => setShowChat(!showChat)}
          >
            <img
              src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg"
              alt="Chatbot"
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          </div>
        </div>

        {/* Chatbot Window */}
        {showChat && (
          <div className="fixed bottom-24 right-8 w-80 bg-white shadow-lg rounded-lg">
            <Chatbot />
          </div>
        )}

        <Footer />
      </>
    </div>
  );
}

export default App;

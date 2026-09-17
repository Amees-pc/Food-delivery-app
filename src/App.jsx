import { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Offers from "./Components/Offers";
import RestaurauntPage from "./Components/RestaurauntPage"
import RestaurauntList from "./Components/RestaurauntList"
import { LogIn } from "lucide-react";
import Login from "./Auth/LoginPage"
import Profile from "./Profile/Profile"
import { Register } from "./Auth/RegisterPage";
import {EditProfile} from "./Profile/EditProfile"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/details' element={<RestaurauntPage/>} />
            <Route path='/list' element={<RestaurauntList/>} />
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />

        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;

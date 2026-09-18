import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Offers from "./Components/Offers";
import RestaurauntPage from "./Components/RestaurauntPage";
import RestaurauntList from "./Components/RestaurauntList";
import { LogIn } from "lucide-react";
import Login from "./Auth/LoginPage";
import Profile from "./Profile/Profile";
import { Register } from "./Auth/RegisterPage";
import { EditProfile } from "./Profile/EditProfile";
import { Addresses } from "./address/Addresses";
import { AddAddress } from "./address/AddAddresses";
import { EditAddresses } from "./address/EditAddresses";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/details" element={<RestaurauntPage />} />
          <Route path="/list" element={<RestaurauntList />} />
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile/:id" element={<EditProfile />} />
          <Route path="/addresses" element={<Addresses />} />
          <Route path="/address/add" element={<AddAddress />} />
          <Route path="/address/edit/:id" element={<EditAddresses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

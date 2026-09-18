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
import { Dashboard } from "./Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<Dashboard />} />

          <Route path="/details" element={ <><Navbar/><Dashboard/></>} />
          <Route path="/list" element={ <><Navbar/></>} />
          
          <Route path="/home" element={ <Layout><Home /></Layout>} />
          <Route path="/offers" element={<Layout><Offers /></Layout>} />
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

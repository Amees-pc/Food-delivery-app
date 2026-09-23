import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Offers from "./Components/Offers";
import RestaurauntPage from "./Components/RestaurauntPage";
import RestaurauntList from "./Components/RestaurauntList";

import Login from "./Auth/LoginPage";
import Profile from "./Profile/Profile";
import { Register } from "./Auth/RegisterPage";
import { EditProfile } from "./Profile/EditProfile";
import { Addresses } from "./address/Addresses";
import { AddAddress } from "./address/AddAddresses";
import { EditAddresses } from "./address/EditAddresses";
import { Dashboard } from "./Dashboard";
import MyCart from "./Components/MyCart";
import About from "./Components/About";
import Menu from "./Components/Ownerpages/Menu";
import ProfilePage from "./Profile/ProfilePage";
function App() {
  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/profile/edit" element={<EditProfile />} />
          <Route
            path="/addresses"
            element={
              <>
                <Navbar />
                <Addresses />
              </>
            }
          />
          <Route path="/address/add" element={<AddAddress />} />
          <Route path="/address/edit/:id" element={<EditAddresses />} />

          <Route
            path="/details"
            element={
              <>
                <Navbar />
                <RestaurauntPage />
              </>
            }
          />

          <Route
            path="/list"
            element={
              <>
                <Navbar />
                <RestaurauntList />
              </>
            }
          />

          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
           <Route
            path="/Mycart"
            element={
              <>
                <Navbar />
                <MyCart />
              </>
            }
          />

          <Route
            path="/offers"
            element={
              <>
                <Navbar />
                <Offers />
              </>
            }
          />
 
 
          <Route
            path="/myprofile"
            element={
              <>
                <Navbar />
                <ProfilePage />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route path="/register"
            element={
              <>
                <Register />
              </>
            }
          />

          <Route path="/profile" element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />

          <Route path="/menu-management" element={
              <>
                 <Navbar />
                <Menu />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

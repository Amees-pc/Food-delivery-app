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
            path="/offers"
            element={
              <>
                <Navbar />
                <Offers />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <Register />
              </>
            }
          />

          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

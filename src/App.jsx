import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { Profile } from "./Profile/Profile";
import { Navbar } from "./Navbar";
import { EditProfile } from "./Profile/EditProfile";
import { Home } from "./Home";
import { AddAddress } from "./address/AddAddresses";
import { Addresses } from "./address/Addresses";
import { EditAddresses } from "./address/EditAddresses";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/address" element={<Addresses />} />
        <Route path="/address/add" element={<AddAddress />} />
        <Route path="/address/edit/:id" element={<EditAddresses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

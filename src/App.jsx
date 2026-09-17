import { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Navbar/Navbar";
import Offers from "./Components/Offers";
import RestaurauntPage from "./Components/RestaurauntPage"
import RestaurauntList from "./Components/RestaurauntList"

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from '../Home/Home'
import Register from '../RegisterUser/Register'

export default function Routing() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registeration" element={<Register />} />


          
        </Routes>
      </BrowserRouter>
    );
  }
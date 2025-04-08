import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pflogin from '../Pflogin'
import PfHead from '../PfHead'
import SignUpPage from '../SignUpPage'



export default function Routing() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pflogin />} >
      </Route>
      <Route path="/head" element={<PfHead />} >
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      
    </Routes>
  </BrowserRouter>
    </div>
  )
}

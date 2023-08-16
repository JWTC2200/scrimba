import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./pages/Navbar/Navbar"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Footer from "./pages/Footer/Footer"
import Vans from "./pages/Vans/Vans"
import VanPage from "./pages/VanPage/VanPage"
import "./server"

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanPage />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
  )
}


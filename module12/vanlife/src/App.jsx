import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./pages/nav/Navbar"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Footer from "./pages/Footer/Footer"

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
  )
}


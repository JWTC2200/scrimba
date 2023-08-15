import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Links from "./Pages/Links"

function App() {
  return (
    <BrowserRouter>
      <Links/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

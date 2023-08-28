import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./server"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Vans from "./pages/Vans/Vans"
import VanPage from "./pages/VanPage/VanPage"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import Host from "./pages/Host/Host"
import HostVans from "./pages/Host/HostVans"
import HostVanPage from "./pages/Host/HostVanPage/HostVanPage"
import HostVanDetail from "./pages/Host/HostVanPage/HostVanDetail"
import HostVanPricing from "./pages/Host/HostVanPage/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPage/HostVanPhotos"
import Layout from "./pages/Layout"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanPage />}/>
          <Route path="host" element={<Host/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path="vans/:id" element={<HostVanPage/>}>
              <Route index element={<HostVanDetail/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="photos" element={<HostVanPhotos/>}/>
            </Route>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  )
}


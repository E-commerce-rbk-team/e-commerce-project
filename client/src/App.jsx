import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx'
import  Sign  from './components/Sign.jsx'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
function App() {
  return (
    <BrowserRouter>
          <Nav />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
  </BrowserRouter>
  )
}

export default App
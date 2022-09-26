import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Home from './pages/home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </BrowserRouter>
)

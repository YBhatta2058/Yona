import { useState } from 'react'
import './App.css'
import Page from './components/Page.jsx'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BookAppointment from './components/BookAppointment.jsx'
import Gallery from './components/Gallery.jsx'

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path = '/' element = {<Page/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/book' element = {<BookAppointment/>} />
        <Route path = '/gallery' element = {<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

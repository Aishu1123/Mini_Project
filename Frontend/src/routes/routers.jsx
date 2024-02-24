import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import About from '../components/About'
import { Route, Routes } from 'react-router-dom'


const Routers = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<Signup />}/>
   </Routes>

    </div>
  )
}

export default Routers
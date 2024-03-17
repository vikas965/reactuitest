import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login.'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard'
import Profile from './Profile'
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Login/>} />
        
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App

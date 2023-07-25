import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Header from './components/common/Header'
import Calendar from './components/calendar/Calendar'
import EventDetails from './components/calendar/EventDetails'
import EventForm from './components/calendar/EventForm'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import HomePage from './components/calendar/Homepage'
import HomePage1 from './components/calendar/HomePage1'
import './components/calendar/Homepage.css'
import './index.css'




const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const [dark,setDark] = useState(1)

  useEffect(() => {
   
    const authenticated = localStorage.getItem('isAuthenticated')
    if (authenticated === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
   
    setIsAuthenticated(true)
    
    localStorage.setItem('isAuthenticated', 'true')
  }

  const handleLogout = () => {

    setIsAuthenticated(false)
   
    localStorage.removeItem('isAuthenticated')

    navigate('/login')
  }

  const darkmodeToggle = ()=>setDark(prev=>!prev)

  const button = (
    <button onClick={darkmodeToggle} className={dark?"lightTheme":"DarkTheme"}>{dark ? "lightTheme":"darkTheme"}</button>
  )

  return (
    <div className={dark &&"dark-page"}>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} button={button} dark={dark}/>

      <Routes>
        {isAuthenticated ? (
          <>
            <Route index path="/" element={<HomePage1 dark={dark}/>} />
            <Route path="/calendar" element={<Calendar dark={dark}/>} />
            <Route path="/events/:eventId" element={<EventDetails dark={dark}/>} />
            <Route path="/create-event" element={<EventForm dark={dark}/>} />
           
          </>
        ) : (
          <>
            <Route path="/" index element={<HomePage dark={dark}/>} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} dark={dark}/>}
            />
            <Route path="/register" element={<Register dark={dark}/>} />
          </>
        )}
       
      </Routes>
    </div>
  )
}

export default App

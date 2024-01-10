import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ProtectedRoute from './pages/protected-route'
import { MainStore } from './store/store'
import Profile from './pages/profile/Profile'
import PostCard from './components/postCard/post-card'

function App() {
  
  useEffect(()=> {
    const token = MainStore.getState().GetCookies("token")
    MainStore.getState().Validate(token)
  },[])

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<ProtectedRoute>
            <Home />
          
          </ProtectedRoute>}>

              <Route path={"profile"} element={<Profile/>} />
              <Route path={"posts"} element={<PostCard/>} />
            
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

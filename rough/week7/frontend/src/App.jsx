import React,{ Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Topbar } from './components/Topbar'
const Dashboard = React.lazy(()=>import('./components/Dashboard'));
const Landing = React.lazy(()=>import('./components/Landing'));

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Appbar/>
      <Routes>
          <Route path="/Dashboard" element={<Suspense fallback={"...loading"}><Dashboard/></Suspense>} />
          <Route path="/" element={<Suspense fallback={"...loading"}><Landing></Landing></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();

  return <div>
    <button onClick={()=>navigate('/Dashboard')}>Dashboard</button>
    <button onClick={()=>navigate('/')}>Landing</button>
  </div>
}

export default App

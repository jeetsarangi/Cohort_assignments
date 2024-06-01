import React,{ Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Signup = React.lazy(()=>import('./Pages/signup'));
const Signin = React.lazy(()=>import('./Pages/signin'));
const Dashboard = React.lazy(()=>import('./Pages/dashboard'));
const Send = React.lazy(()=>import('./Pages/send'));


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Suspense fallback={"...loading"}><Signup/></Suspense>} />
        <Route path="/signin" element={<Suspense fallback={"...loading"}><Signin/></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard/></Suspense>} />
        <Route path="/send" element={<Suspense fallback={"...loading"}><Send/></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'

export default function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <Shop/>
      <Footer/>
    </div>
  )
}


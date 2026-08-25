// import { useState } from 'react'

import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Work from "./components/work"
import About from "./components/about"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Work/>
      <About/>
      <Footer/>

      {/* <a href="#hero" className="goup">↗</a> */}
    </>
  )
}

export default App

// import { useState } from 'react'
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Project from "./pages/Projects";
import Experience from "./pages/Experiences";

function App() {
  return (
    // <Home/>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
          path="/work/:slug"
          element={<Project />}
      />
      
      <Route
          path="/experience/:slug"
          element={<Experience />}
      />
    </Routes>
  );
}

export default App;
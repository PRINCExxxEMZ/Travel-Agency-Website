import React from 'react'
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Destination from './Component/Destination';
import About from './Component/About';
import Best from './Component/Best';
import Carousel from './Component/Footer';
import Contact from './Component/Contact';

function App() {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Destination/>
        <About/>
        <Best/>
        <Contact/>
        <Carousel/>
      </div>
  );
}

export default App;

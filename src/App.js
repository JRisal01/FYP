import React, {useEffect} from 'react';
import Banner from './component/landing/Banner.js';
import Booking from './component/landing/Booking.js';
import About from './component/landing/about.js';
import Room from './component/landing/room.js';
import Highlite from './component/landing/Highlite.js';
import Gallery from './component/landing/gallery.js';
import Contact from './component/landing/Contact.js';
import MainNav from './component/all/MainNav.js';
import AboutUs from './component/aboutUs/AboutUs.js';
import './App.css';

function App() {

  return (
    <div className="App">
      {/* <Banner />
      <Booking />
      <About />
      <Room />
      <Highlite />
      <Gallery />
      <Contact /> */}
      < AboutUs/>

    </div>
  );
}

export default App;

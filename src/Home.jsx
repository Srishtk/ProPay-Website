import React from 'react';
import Navbar from "./navbar";
import Header from "./Header";
import Service from "./service";
import Work from "./Work";
import Use from "./Use";
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Work/>
        <Use/>
        <Service/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home
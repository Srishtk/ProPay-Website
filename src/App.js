import React from 'react'
import Home from './Home'
import ContactUs from '../src/pages/ContactUs';
import Services from '../src/pages/Services';
import About from '../src/pages/About';
import Error from '../src/pages/Error';
import { Route , Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/contact' element={<ContactUs/>}></Route>
    <Route path='/service' element={<Services/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='*' element={<Error/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
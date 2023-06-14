import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [btn,setBtn]=useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg " id='navbar'>
        <div className="container">
          <NavLink className="navbar-brand active text-uppercase" to="/">Pro Pay</NavLink>
          <button className="navbar-toggler" onClick={()=>{setBtn(!btn)}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${btn?"d-none":" "}`}  id="navbarNav">
            <ul className="navbar-nav ms-lg-auto text-center " >
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">About </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
              <button type="button" className="btn btn-outline-primary nav-item">Log in</button>
              <button type="button" className="btn btn-outline-primary nav-item">Sign up</button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
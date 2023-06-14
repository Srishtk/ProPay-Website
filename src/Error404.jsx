import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';

const Error404 = () => {
  return (
    <>
    <div className="error-container">
      <div className="watermark">
        <h1 className='display-1 text-bold'>404</h1>
      </div>
      <div>
        <h2>Oops! Page not found.</h2>
        <p>The page you are looking for does not exist or an other error occured. </p>
        <NavLink to="/">
        <button className='hero-btn btn btn-info '>Back to Home</button>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Error404;
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='header-container d-flex'>
            <div className="row ">
                <div className="col-lg-6 col-12 left-header d-flex flex-column  justify-content-center align-items-start ">
                    <h2 className='display-5 fw-bold' >Online Payments Made <br />Easy for you </h2>
                    <p className=' mt-1 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, ratione? Veniam ipsa ratione debitis! Non tenetur consectetur ducimus velit alias voluptates sequi ad eaque, culpa error praesentium provident repudiandae rem.</p>
                    <h3 className='mt-3'>Get early access for you </h3>
                    <div className='inputGroup d-flex mt-3'>
                        <input type="text" className=' rounded-4 input-text-group p-1 hero-input' placeholder='Enter Your Email' />
                        <button className='btn btn-info hero-btn w-50' >Get It Now</button>
                    </div>
                 </div>
                <div className="col-lg-6 col-12 right-header d-flex flex-column justify-content-center align-items-start"> 
                    <img src="./images/hero.jpg" alt="Hero "  />
                    <img src="./images/hero2.jpg" id='img2' alt="Another hero " />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;
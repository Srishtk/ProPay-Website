import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="row">
                <div className="col-lg-10 col-12 mx-auto">
                    <div className="row p-3">
                        <div className="col-6 col-lg-3">
                            <h4>Site Links</h4>
                            <ul>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h4>Other Sites</h4>
                            <ul>
                                <li><a href="https://react.dev/" target='_blank'>React</a></li>
                                <li><a href="https://getbootstrap.com/" target='_blank'>Bootstrap</a></li>
                                <li><a href="https://firebase.google.com/docs" target='_blank'>Firebase</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h4>Locations</h4>
                            <ul >
                                <li>Location 1: <br /> Lorem ipsum dolor sit amet.</li>
                              
                                <li>Location 2: <br /> Lorem ipsum dolor sit amet.</li>
                                
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3">
                            <h4>Follow Us</h4>
                            <div className="row footer-follow">
                                <div className="col-3">
                                    <a href="#"><i className='bi bi-instagram'/></a>
                                </div>
                                <div className="col-3">
                                <a href="#"><i className='bi bi-facebook'/></a>
                                </div>
                                <div className="col-3">
                                <a href="#"><i className='bi bi-linkedin'/></a>
                                </div>
                                <div className="col-3">
                                <a href="#"><i className='bi bi-twitter'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-75 mx-auto'/>
            <p className='fs-5 mb-0 text-center'>Copyright ©️ 2023 Pro Pay. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;
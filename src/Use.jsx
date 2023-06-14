import React, { useState } from 'react'
import useApi from './API/useApi';
const Use = () => {
    const [use, setuse] = useState(useApi);
    return (
        <>
            <section>
                <div className="use-container my-5">
                    <div className="row">
                        <div className="col-lg-5 col-12 left-use">
                            <img src="./images/use.jpg" alt="Use" />
                        </div>
                        <div className="col-lg-7 col-12 right-use px-4 ">
                            <p className='fs-4'>Available at Google Play and App Store</p>
                            <p className='fs-2 fw-bold '>How to Use?</p>
                            {
                                use.map((curr) => {
                                    return (
                                        <>
                                            <div className="use-subdiv my-2  row " key={curr.id} >
                                                
                                                <div className="col-1 left-use-subdiv text-primary">
                                                    <h3 className='use-subdiv-index'>{curr.id}</h3>
                                                </div>
                                                <div className="col-10 right-use-subdiv">
                                                    <h3>{curr.title}</h3>
                                                    <p className='w-75'>{curr.info}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            <button className='btn btn-outline-primary nav-item m-2'>Learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* another section */}

            <section>
                <div className="use-container my-5 ">
                    <div className="row">
                        
                        <div className="col-lg-7 col-12 right-support ">
                            <p className='fs-4 ms-5 ps-3'>Support in your Local language</p>
                            <p className='fs-2 fw-bold ms-5 ps-3'>We are available <br />24/7 for you</p>
                            {
                                use.map((curr) => {
                                    return (
                                        <>
                                            <div className="use-subdiv my-2  row " key={curr.id} >
                                            <div className='col-1'></div>
                                                <div className="col-1 left-use-subdiv text-primary">
                                                    <h3 className='use-subdiv-index'>{curr.id}</h3>
                                                </div>
                                                <div className="col-10 right-use-subdiv">
                                                    <h3>{curr.title}</h3>
                                                    <p className='w-75'>{curr.info}</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            <button className='btn btn-outline-primary nav-item ms-5 '>Learn more</button>
                        </div>
                        <div className="col-lg-5 col-12 left-use">
                            <img src="./images/use2.jpg" alt="Use" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Use;
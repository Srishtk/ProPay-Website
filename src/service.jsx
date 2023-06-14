import React, { useState } from 'react'
import serviceApi from './API/serviceApi';
const Service = () => {
    const [service,setService]=useState(serviceApi);
  return (
    <section>
        <div className="service-container">
            <p className='fs-2 fw-bold text-center mb-5'>How to Send Money?</p>
            <div className="row gx-3">
                {
                    service.map( (curr)=>{
                        return(
                            <>
                            <div className=" service-subdiv col-11 col-lg-4" key={curr.id}>
                                <i className={` service-icon ${curr.logo}`}></i>
                                <h3 className='mt-1 mb-3'>{curr.title}</h3>
                                <p className='service-info w-100 '>{curr.info}</p>         
                </div>
                            </>
                        )
                    } )
                }  
            </div>
        </div>
    </section>
  )
}

export default Service
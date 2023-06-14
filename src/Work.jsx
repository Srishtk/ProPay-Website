import React, { useState } from 'react'
import workApi from './API/workApi';

const Work = () => {
    const [work,setwork]=useState(workApi);
  return (
    <>
        <section>
            <div className="work-container">
                <p className='fs-1 fw-bold text-center p-1'>How does it work?</p>
                <div className="row">
                    {
                        work.map( (curr)=>{
                            return(
                                <>
                                <div className="work-subdiv col-lg-4 col-12">
                                <i className={` text-primary p-1  ${curr.logo}`}></i>
                                <h3 className='mt-1 mb-3'> {curr.title}</h3>
                                <p className='text-center'>{curr.info}</p>
                                </div>
                                </>
                            )
                        } )
                    }
                
                </div>
            </div>
        </section>
    </>
  )
}

export default Work;
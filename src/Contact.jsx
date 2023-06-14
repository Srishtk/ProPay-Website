import React, { useState } from 'react'

const Contact = () => {
    const [data,setData]=useState({
        firstName: "",
        lastName: "",
        phone: "",
        email:"",
        address: "",
        msg:"",
    });
    let name,value;
    const postData=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setData({ ...data,[name]:value});

    }
    //connection to firebase
    //table-userData.json
    const submitData=async(e)=>{
        e.preventDefault();
        const {firstName,lastName,phone,email,address,msg}=data;
        if(firstName && lastName && phone && email && address && msg){
        const result=await fetch('https://propay-website-default-rtdb.firebaseio.com/userData.json',
            {method:"POST",
            Headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                firstName , 
                lastName,
                phone,
                email,
                address,
                msg,
            })
            }

        );
        if (result){
            document.getElementById("checkbox").checked=false;
            setData({
                firstName: "",
                lastName: "",
                phone: "",
                email:"",
                address: "",
                msg:"",
            })
            alert("We have received your response.");
        }
        else{
            alert("Some error occured.");
        }
    }
    else{
        alert("Please fill the fields.")
    }

    }

  return (
    <>
    <section>
        <div className="contact-container">
            <div className="row ">
                <div className="col-10 mx-auto">
                    <div className="row align-items-center">
                    <div className="col-12 col-lg-5 left-contact p-4">
                <p className='fs-2 fw-bold text-center'>Connect with our team</p>
                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, placeat!</p>
                <img src="./images/contact.png" alt="ContactUs" className='shadow-none my-1' />
                </div>

                {/* form */}
                <div className="col-12 col-lg-7 right-contact p-5">
                <form method='POST'>
                    <div className="row mb-4 align-items-center g-3">
                        <div className="col-auto">
                        <input type="text" className="form-control"  name="firstName" value={data.firstName} onChange={postData} placeholder="First Name"/>
                        </div>
                        <div className="col-auto">
                        <input type="text" className="form-control" name="lastName" value={data.lastName} onChange={postData} placeholder="Last Name"/>
                        </div>
                    </div>
                    {/* Second row */}
                    <div className="row mb-4 align-items-center g-3">
                        <div className="col-auto">
                        <input type="text" className='form-control'  name="phone" value={data.phone} onChange={postData} placeholder="Phone number"/>
                        </div>
                        <div className="col-auto">
                        <input type="email" className="form-control" name="email" value={data.email} onChange={postData} placeholder="Email Address"/>
                        </div>
                    </div>
                    {/* Third row */}
                    
                    <div className="row mb-4 align-items-center g-3">
                        <div className="col-12">
                        <textarea className="form-control" rows="3" name="address" value={data.address} onChange={postData} placeholder='Address'></textarea>
                        </div>
                    </div>
                    {/* Fourth row*/}
                    <div className="row mb-4 align-items-center g-3">
                        <div className="col-12">
                        <textarea className="form-control" rows="3" name="msg" value={data.msg} onChange={postData} placeholder='Enter your message'></textarea>
                        </div>
                    </div>
                    
                    {/* Checkbox */}
                    <div class="form-check">
                        <input class="form-check-input" id='checkbox' type="checkbox"/>
                        <label class="form-check-label">Notify me about new updates</label>
                    </div>

                    <button type="submit" class="btn btn-primary contact-btn" onClick={submitData}>Send Message</button>
                </form>


                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact;
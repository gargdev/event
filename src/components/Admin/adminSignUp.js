import React from 'react'
import "../../styles/adminSignUp.css";
const adminLogin = () => {
  return (
    <>
        <div className="wrapper3">
            <button className="event">
                Event Management System
            </button>
            <div className='userId'>
                <button className='lb'>User Id</button>
                <button className='rb'>Admin</button>
            </div>
            <div className='password'>
                <button className='lb'>Password</button>
                <button className='rb'>Admin</button>
            </div>
            <div className='footer'>
                <button className='bb'>A</button>
                <button className='bb'>B</button>
            </div>
        </div>
    </>
  )
}

export default adminLogin
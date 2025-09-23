import React, { useState } from 'react'
import Register from '../components/authComponent/Register'
import Login from '../components/authComponent/login'

const AuthLayout = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div className='h-screen w-screen'>
      {toggle?(
        <Login setToggle= {setToggle}/>
      ):(
        <Register setToggle={setToggle} />
      )}
    </div>
  )
}

export default AuthLayout
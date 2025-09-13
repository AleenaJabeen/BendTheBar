import React from 'react'
import LoginForm from '../components/login/LoginForm'
import LoginSideImage from '../components/login/LoginSideImage'

function Login() {
  return (
    <>
  <div className="flex items-stretch justify-between w-full min-h-screen bg-[#010101]">
  <LoginForm />
  <LoginSideImage />
</div>

      
    </>
  )
}

export default Login

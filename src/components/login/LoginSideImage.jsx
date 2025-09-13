import React from 'react'
import { Login ,quoteIcon} from '../../assets'

function LoginSideImage() {
  return (
   <div className="relative w-1/2 flex">
      <img
        src={Login}
        alt="Login"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#00000070]"></div>
      <div className='absolute bottom-15 flex flex-col justify-center items-start lg:px-12 px-6'>
        <img src={quoteIcon} alt="Quotation Mark" />
        <p className='font-[Poppins] lg:text-[30px] text-lg font-medium text-[#FFFFFFCC] lg:px-6 px-4 text-center '>Discover the power of change and adopt a fresh approach to life.</p>
      </div>
    </div>
  )
}


export default LoginSideImage

import React, { useState } from 'react';
import { logo, lockIcon,google,fb,iphone } from '../../assets';
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) return;

    navigate("/dashboard");
  };

  return (
    <div className="w-[50%] font-[Poppins]  h-auto">
      <div className='w-full p-8 flex flex-col items-center  gap-4  relative h-full overflow-hidden'>
<div className="absolute top-[-315px] left-[-305px] w-[365px] h-[365px] bg-[#D5393463] rounded-full shadow-[0_0_171px_90px_#D53934] overflow-hidden"></div>
<div className="absolute bottom-[-315px] right-[-335px] w-[365px] h-[365px] bg-[#D5393463] rounded-full shadow-[0_0_171px_90px_#D53934] overflow-hidden"></div>
      {/* Logo & Heading */}
      <div className="flex flex-col justify-center items-center gap-2 my-6">
        <img src={logo} alt="Logo" className='w-[190px] h-[210px] ' />
        <p className="text-lg text-[#FFFFFF99] font-normal mt-6 text-center">
          Managing made delightful. Login now to experience it.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6 lg:w-[80%] w-full mx-auto mt-12" onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="relative">
          {!email && focusedField !== "email" && (
            <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D93732] text-2xl font-thin pointer-events-none" />
          )}
          <input
            type="email"
            id="email"
            value={email}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField("")}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className={`peer w-full border rounded-lg pl-10 text-[#FFFFFF99] font-medium  pr-3 pt-5 pb-2 text-base focus:outline-none bg-transparent
              ${errors.email ? "border-red-500" : "border-[#D1D1D1] focus:border-[#D93732]"}`}
          />
          <label
            htmlFor="email"
            className="absolute left-10 top-1/2 -translate-y-1/2 text-[#D1D1D1] text-base transition-all 
                       peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#FFFFFF99]
                       peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#D93732] 
                       peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#D93732] 
                       bg-[#010101] px-1"
          >
            Enter Email Address
          </label>
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Password Input */}
        <div className="relative">
          {!password && focusedField !== "password" && (
            <img
              src={lockIcon}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#D1D1D1] pointer-events-none"
              alt="lock"
            />
          )}
          <input
            type="password"
            id="password"
            value={password}
            onFocus={() => setFocusedField("password")}
            onBlur={() => setFocusedField("")}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className={`peer w-full border rounded-lg pl-10 text-[#FFFFFF99] font-medium pr-3 pt-5 pb-2  bg-transparent text-base focus:outline-none 
              ${errors.password ? "border-red-500" : "border-[#D1D1D1] focus:border-[#D93732]"}`}
          />
          <label
            htmlFor="password"
           className="absolute left-10 top-1/2 -translate-y-1/2 text-[#D1D1D1] text-base transition-all 
                       peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#FFFFFF99]
                       peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#D93732] 
                       peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-[#D93732] 
                       bg-[#010101] px-1"
          >
            Password
          </label>
        </div>
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        {/* Remember me */}
        <div className="px-1 flex items-center gap-2 text-[#FFFFFFE5] font-medium mb-12 mt-8">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]  gradient-checkbox rounded-[5px] bg-transparent"
          />
          Remember me
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#D93732] to-[#D93731] text-xl  text-white cursor-pointer font-semibold py-4 rounded-2xl transition"
        >
          Login
        </button>
          <div className='flex justify-between items-center '>
            <hr className='bg-[#DBDBDB] h-[1.5px] max-w-[119px] w-[20%]' />
            <p className='text-[#FFFFFF99] font-[Poppins] text-sm font-normal text-nowrap'>Don’t have an account? <span className='gradient-text font-medium cursor-pointer'>Sign Up</span></p>
             <hr className='bg-[#DBDBDB] h-[1.5px] max-w-[119px] w-[20%]' />
      </div>
      <div className='w-full flex justify-between items-center gap-2 mb-6'>
        <div className='border border-[#FFFFFF33] cursor-pointer rounded-[5px] max-w-[144px] w-[33%] flex justify-center items-center py-3'><img src={google} alt="Google Login" /></div>
        <div className='border border-[#FFFFFF33] cursor-pointer rounded-[5px] max-w-[144px] w-[33%] flex justify-center items-center py-3'><img src={fb} alt="Facbook Login" /></div>
        <div className='border border-[#FFFFFF33] cursor-pointer rounded-[5px] max-w-[144px] w-[33%] flex justify-center items-center py-3'><img src={iphone} alt="Iphone Login" /></div>
      </div>
      </form>


      {/* Footer */}
      <div className="flex w-full items-end justify-center mt-auto pt-8">
        <p className="text-center text-[#FFFFFFCC] font-medium text-lg">
          © 2025 Viva Nail Spa | All Rights Reserved
        </p>
      </div>
      </div>

    
    </div>
  );
}

export default LoginForm;

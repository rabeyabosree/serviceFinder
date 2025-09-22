import React, { useRef, useState } from 'react'

function VerifyOtp() {
  const [otp, setOtp] = useState(new Array(6).fill(""))

  const inpuRef = useRef([])

  const handleChange = (e, i)=>{
    const value = e.value.replace(/[^0-9]/g)
    if(!value) return;

    const newOtp = [...otp]
    newOtp[i] = value
    setOtp(newOtp)

    if(i < 5) inpuRef.current[i + 1].focus()

  }

  const handleKeyDown =(e, index)=>{
    if(e.key === "Backspace" && otp[index] === "" && index > 0){
      inpuRef.current[index - 1].focus()
    }
  }
  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 max-w-2xl rounded-2xl text-center '>

        <form className='flex flex-col' >
          <h1 className='text-2xl font-semibold text-green-800 mb-3'>OTP Verification</h1>
          <p className='text-md font-normal text-gray-400 mb-8'>Enter the 6-digit OTP send to your email</p>

          <div className='flex flex-1 gap-4 mb-4'>
            {otp.map((ot, index) => (
              <input type="text" key={index} ref={(el)=> (inpuRef.current[index] = el)} onChange={(e)=> handleChange(e.target, index)} onKeyDown={(e)=> handleKeyDown(e, index)} maxLength={1} value={otp[index]} className='h-12 w-12 border border-green-400 rounded-xl text-center text-lg focus:outline-none focus:border-green-500' />
            ))}
          </div>

          <button type='button' className='bg-green-500 text-white text-lg w-full px-6 py-2 rounded-2xl hover:bg-green-600 transition'>Verify Otp</button>
        </form>
      </div>
    </div>
  )
}

export default VerifyOtp
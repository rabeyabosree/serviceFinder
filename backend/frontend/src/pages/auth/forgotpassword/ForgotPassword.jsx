import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email })
      setMessage(response.data.message)
      setError("")
      setEmail("")
      navigate("/verify-otp", { state: { email } })
    } catch (error) {
      console.error(error.response?.data?.message || error.message)
      setError(error.response?.data?.message || error.message)
      setMessage("")
    }
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-sm w-full bg-white p-8 rounded-2xl text-center'>
        <h1 className='text-2xl font-bold text-green-800'>Forgot Password</h1>
        <p className='text-md font-normal text-gray-400 mt-2'>Please Enter Your Email</p>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 py-6'>

          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name='email' className='border border-green-300 py-2 px-4 rounded-2xl' />


          <button type='submit' className='bg-green-500 text-white px-4 py-2 w-full rounded-2xl'>Submit</button>
        </form>

        {message && (<p className='text-green-400'>{message}</p>)}
        {error && (<p className='text-red-400'>{error}</p>)}

      </div>
    </div>
  )
}

export default ForgotPassword
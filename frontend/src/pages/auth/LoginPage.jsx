import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    // ekhane API call korte paro
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center bg-white p-12 rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Login Page
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 my-6 text-left"
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Remember Me */}
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="text-gray-600">Remember me</label>
          </div>

          {/* Forgot Password */}
          <a
            href="/forget-password"
            className="text-sm text-green-600 hover:underline self-end"
          >
            Forgot password?
          </a>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-2xl font-bold tracking-wide transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;



// import React from 'react'
// import { useState } from 'react'

// function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [rememberMe, setRememberMe] = useState(false)


//   return (
//     <div className='h-screen flex items-center justify-center mx-auto ' >
//       <div className='max-w-md w-full text-center bg-graay p-12'>
//         <h1 className='text-2xl font-semibold mb-4 text-gray-800 '>Login page</h1>
//         <form className='flex flex-col space-y-4 my-6' >

//           <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}  className='border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300' />
//           <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} className='border-gray-400 border rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300' />

//           <div className='flex flex-row gap-2'>
//             <input type="checkbox" name="remember" value={rememberMe} onChange={(e)=> setRememberMe(e.target.value)}/>
//             <label>Remeber me</label>
//           </div>
//         </form>
//         <a href='/forget-password' className='text-sm text-green-400 hover:underline self-end'>Forgot password?</a>

//         <button className='text-center bg-DustyRose py-4 px-8 rounded-4xl font-bold tracking-wide '>Login</button>
//       </div>
//     </div>
//   )
// }

// export default LoginPage
import React from 'react'

const Login = () => {
  return (
 <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200">
            <div className="w-full max-w-md">
             
             
                <h1 className="text-2xl font-bold mb-6 text-center">Login to your account</h1>
                <h1 className='text-center text-black text-2xl ml-4'>Welcome back</h1>
                <form>
                   
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"  required placeholder="Enter your email address" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  required placeholder="Enter your password" />
                    </div>

                    {/* <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" for="confirm-password">
                            Confirm Password
                        </label>
                        <input className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password"   required placeholder="Confirm your password" />
                    </div> */}
                    <h1 className='ml-[19.8rem] absolute mt-[-1.3rem] text-black hover:cursor-pointer '>forget password?</h1>
                    <h1 className='text-xl font-bold mb-6 ml-6  text-center'>-------------------- OR----------------------</h1>
                    <div className="flex items-center justify-space ml-[7rem]">
                        {/* <button className="hover: border-1  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-800 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Sign Up
          </button> */}
                       
                       
                        <a className="inline-block align-baseline text-2xl ml-2 text-black hover:text-blue-800" href="/">
                            Continue with Google
                        </a>

                    </div>
                </form>
                <button className="hover:bg-blue-200      ml-[9rem] mt-8  bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-black font-bold py-2 px-[5rem] rounded-full focus:outline-none focus:shadow-outline" type="submit ">
                   Log In
                </button>
                <div className="flex items-center justify-space ml-[5rem] mt-6" >
                    <h1 className='text-xl  mb-4 text-center'>Don't have an account?</h1>
                    <h1 className='text-xl font-bold text-blue-800  mb-4 text-center hover:cursor-pointer'>Sign in</h1>
                </div>
            </div>
        </div>

  )
}

export default Login

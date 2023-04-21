import React from 'react'



const Sign = ()=> {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-yellow-20">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Signup </h1>
    <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="name">
          Name
        </label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="confirm-password">
          Confirm Password
        </label>
        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="Confirm your password"/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Signup
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
  )
}




export default Sign

import React from 'react';

const Register = ({setToggle}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 flex-col">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-300 rounded-md shadow-sm">
        
        <h1 className="text-4xl font-cursive text-center mb-4">Instagram</h1>

        <p className="text-center text-gray-600 mb-4">
          Sign up to see photos and videos from your friends.
        </p>

        <button className="w-full flex items-center justify-center bg-blue-600 text-white cursor-pointer font-semibold py-2 rounded-md">
          Log in with Facebook
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-400"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-400"
          />

          <p className="text-xs text-gray-500">
            People who use our service may have uploaded your contact information to Instagram.{" "}
            <a href="#" className="text-blue-600">Learn more</a>
          </p>

          <p className="text-xs text-gray-500">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-600">Terms</a>,{" "}
            <a href="#" className="text-blue-600">Privacy Policy</a> and{" "}
            <a href="#" className="text-blue-600">Cookies Policy</a>.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Moved Login link outside of the form container */}
      <div className="w-full max-w-sm p-4 mt-4 text-center border border-gray-300 bg-white rounded-md">
        <div>
          Have an account?{" "}
          <p onClick={()=>setToggle((prev)=>!prev)} 
          className="text-blue-600 font-medium cursor-pointer">Log in</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
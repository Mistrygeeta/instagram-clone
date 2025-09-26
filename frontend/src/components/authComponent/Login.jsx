import React from "react";

const Login = ({ setToggle }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center py-8">
      <div className="border border-gray-200 px-10 py-8 rounded-md w-full max-w-xs">
        <div className="flex justify-center mb-6">
          <span className="text-5xl font-semibold font-logo select-none" style={{ fontFamily: "'Grand Hotel', cursive" }}>
            Instagram
          </span>
        </div>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Phone number, username or email address"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-500 w-full text-white font-semibold rounded py-2 mt-1 mb-1"
            style={{ backgroundColor: "#6598FB" }}
          >
            Log in
          </button>
          <div className="flex items-center my-3">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-4 text-xs text-gray-400">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <button 
            type="button" 
            className="w-full flex items-center justify-center gap-2 text-blue-600 font-medium text-sm"
          >
            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 20 20">
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H6v4h5v7h4v-7h3l1-4h-4V6a1 1 0 0 1 1-1h3V2z"/>
            </svg>
            Log in with Facebook
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm font-medium text-black">
            Forgotten your password?
          </a>
        </div>
      </div>
      <div className="border border-gray-200 rounded-md w-full max-w-xs mt-4 py-4 bg-white text-center">
        <span className="text-sm text-black">
          Don't have an account?{" "}
        </span>
        <button
          onClick={() => setToggle && setToggle((prev) => !prev)}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;

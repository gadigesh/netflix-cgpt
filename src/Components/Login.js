import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggaleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-[30%] my-[4%] mx-auto right-0 left-0 p-12 bg-black absolute bg-opacity-80 text-white">
        <h1 className="font-bold p-2 text-4xl py-6">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-2 w-[100%] bg-transparent border-white border text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email OR Mobile Number"
          className="p-4 m-2 w-full bg-transparent border-white border "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-[100%] bg-transparent border-white border text-white"
        />

        <button className="p-4 m-2 align-middle rounded-lg w-full text-sm  bg-red-700">
          Sign In
        </button>
        <div className=" text-xl w-full text-center">OR</div>
        <button className="p-2 m-2 w-full text-sm rounded-lg  bg-gray-600 hover:to-gray-400">
          Use a sign-in code
        </button>
        <div className=" w-full p-2">
          <input type="checkbox"></input> Forget password
        </div>
        <p className="py-6 cursor-pointer" onClick={toggaleSigninForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up now"
            : "Already registered ?Sign In now"}
        </p>
        <span className="">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </span>
      </form>
    </div>
  );
};

export default Login;

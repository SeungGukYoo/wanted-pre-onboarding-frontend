import axios from "axios";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isEmailValidate, setIsEamilValidate] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/@/.test(e.target.value)) {
      setIsEamilValidate(false);
      return;
    }
    setIsEamilValidate(true);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 7) {
      setIsPasswordValidate(false);
    }
    setIsPasswordValidate(true);
    setPassword(e.target.value);
  };
  const handleSignUp = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };
  useEffect(() => {
    if (!isEmailValidate || !isPasswordValidate) {
      setEnableButton(false);
      return;
    }
    setEnableButton(true);
  }, [isEmailValidate, isPasswordValidate]);
  return (
    <div className="bg-[#EDF2F7] h-[100vh]  flex justify-center items-center">
      <form className="min-w-[520px] bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4" onSubmit={handleSignUp}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Email</label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              name="email"
              type="text"
              data-testid="email-input"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Password</label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="******************"
              onChange={handlePasswordChange}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="">
            <button
              className={`shadow bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded 
              ${enableButton ? " hover:bg-blue-700" : "opacity-50 cursor-not-allowed"}`}
              type="submit"
              data-testid="signup-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

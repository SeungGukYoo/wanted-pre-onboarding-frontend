import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Vaildate from "../custom/Vaildate";
import { SignInHandle } from "../util/UserUtil";

const SignIn = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, enableButton, handleEmailChange, handlePasswordChange } = Vaildate();

  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enableButton) return;
    try {
      const result = await SignInHandle(email, password);
      if (result.status === 200 && result.data.access_token) {
        alert("환영합니다.");
        localStorage.setItem("jwt_token", result.data.access_token);
        setError("");
        setEmail("");
        setPassword("");
        navigate("/todo");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message);
      } else {
        console.error(err);
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("jwt_token")) navigate("/todo");
  }, [navigate]);

  return (
    <div className="bg-[#EDF2F7] h-[100vh]  flex justify-center items-center">
      <form className="min-w-[520px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignIn}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            data-testid="email-input"
            placeholder="example@email.com"
            onChange={(e) => handleEmailChange(e)}
            value={email}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            data-testid="password-input"
            placeholder="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
        <div className="flex items-center justify-end">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              enableButton ? " hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
            }`}
            data-testid="signin-button"
            type="submit"
            disabled={enableButton ? false : true}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

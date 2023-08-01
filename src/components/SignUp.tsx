import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Vaildate from "../custom/Vaildate";
import { SignUpHandle } from "../util/UserUtil";

const SignUp = () => {
  const navigation = useNavigate();
  const { email, setEmail, password, setPassword, enableButton, handleEmailChange, handlePasswordChange } = Vaildate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enableButton) return;
    try {
      await SignUpHandle(email, password).then((result) => {
        if (result?.status === 201) {
          alert("회원가입이 완료되었습니다");
          navigation("/signin");
          setEmail("");
          setPassword("");
        }
      });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response && err.response.status === 400) {
        alert(err.response.data.message);
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("jwt_token")) navigation("/todo");
  }, [navigation]);

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
              placeholder="example@eamil.com"
              onChange={(e) => handleEmailChange(e)}
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
              onChange={(e) => handlePasswordChange(e)}
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
              disabled={enableButton ? false : true}
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

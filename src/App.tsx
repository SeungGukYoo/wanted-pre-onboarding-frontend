import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center flex-col h-[100vh]">
      <h1 className=" mb-10 text-lg">Wanted Front-end Todo List</h1>

      <div className="flex  justify-center items-center">
        <Link
          to={"/signin"}
          className="mr-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign In
        </Link>
        <Link
          to={"/signup"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default App;

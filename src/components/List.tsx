import React from "react";

const List = () => {
  return (
    <div className="max-w-[1024px] mx-auto flex flex-col justify-center items-center">
      <div className="my-10 flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          ADD
        </button>
      </div>
      <ul className="">
        <li className="flex my-4 py-2 border-y-2 border-gray-700/30 ">
          <input className="mr-4" type="checkbox" name="" id="" />
          <p className=" text-[24px] mr-4 min-w-[250px] line-clamp-1">todo1fadsfasdfsfdsfdasfasdf</p>
          <button className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            수정
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">삭제</button>
        </li>
        <li className="flex my-4 py-2 border-y-2 border-gray-700/30 ">
          <input className="mr-4" type="checkbox" name="" id="" />
          <p className=" text-[24px] mr-4 min-w-[250px] line-clamp-1">todo1fadsfasdfsfdsfdasfasdf</p>
          <button className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            수정
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">삭제</button>
        </li>
      </ul>
    </div>
  );
};

export default List;

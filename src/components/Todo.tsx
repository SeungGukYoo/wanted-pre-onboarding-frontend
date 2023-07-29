import React from "react";

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = ({ data }: { data: TodoType }) => {
  return (
    <li className="flex my-4 py-2 border-y-2 border-gray-700/30 ">
      <input className="mr-4" type="checkbox" name="" id="" defaultChecked={data.isCompleted} />
      <p className=" text-[24px] mr-4 min-w-[250px] line-clamp-1">{data.todo}</p>
      <button className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">수정</button>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">삭제</button>
    </li>
  );
};

export default React.memo(Todo);

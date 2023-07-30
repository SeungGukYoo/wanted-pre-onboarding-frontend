import React, { useRef, useState } from "react";
import { TodoType } from "./List";

interface Prop {
  data: { id: number; todo: string; isCompleted: boolean; userId: number };
  modifyTodo: (value: TodoType) => void;
  deleteTodo: (id: number) => void;
}

const Todo = ({ data, modifyTodo, deleteTodo }: Prop) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModify, setIsModify] = useState(false);
  const deleteData = (e: React.FormEvent) => {
    e.preventDefault();
    deleteTodo(data.id);
  };
  const modifyData = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    if (inputRef.current) {
      const updateTodo = {
        ...data,
        todo: inputRef.current?.value,
      };
      modifyTodo(updateTodo);
    }
  };
  return (
    <li className="flex my-4 py-2 border-y-2 border-gray-700/30 ">
      <input className="mr-4" type="checkbox" name="" id="" defaultChecked={data.isCompleted} />
      {isModify ? (
        <input
          className="text-[24px] mr-4 min-w-[250px] line-clamp-1"
          type="text"
          defaultValue={data.todo}
          ref={inputRef}
        ></input>
      ) : (
        <p className="text-[24px] mr-4 min-w-[250px] line-clamp-1">{data.todo}</p>
      )}

      {isModify ? (
        <button
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={modifyData}
        >
          완료
        </button>
      ) : (
        <button
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => setIsModify(!isModify)}
        >
          수정
        </button>
      )}

      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={deleteData}
      >
        삭제
      </button>
    </li>
  );
};

export default React.memo(Todo);

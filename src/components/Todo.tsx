import React, { useCallback, useRef, useState } from "react";
import { GlobalState } from "../context/TodoProvider";
import { DeleteTodo, UpdateTodo } from "../util/TodoUtil";

interface Prop {
  data: { id: number; todo: string; isCompleted: boolean; userId: number };
}

const Todo = ({ data }: Prop) => {
  const context = GlobalState();
  const textRef = useRef<HTMLInputElement>(null);
  const checkRef = useRef<HTMLInputElement>(null);
  const [isModify, setIsModify] = useState(false);

  const deleteTodo = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      await DeleteTodo(data.id).then((_) => {
        context?.dispatch({
          type: "DELETE",
          payload: data.id,
        });
      });
    },
    [context, data.id]
  );
  const updateTodo = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (checkRef.current && textRef.current && isModify) {
        await UpdateTodo({
          id: data.id,
          todo: textRef.current?.value,
          isCompleted: checkRef.current?.checked,
        }).then((result) => {
          context?.dispatch({
            type: "UPDATE",
            payload: result,
          });
          setIsModify(false);
        });
      }
    },
    [context, data.id, isModify]
  );

  const checkBoxUpdate = useCallback(async () => {
    if (checkRef.current && !isModify) {
      await UpdateTodo({
        ...data,
        isCompleted: checkRef.current?.checked,
      }).then((result) => {
        context?.dispatch({
          type: "UPDATE",
          payload: result,
        });
      });
    }
  }, [context, data, isModify]);
  return (
    <li className="flex my-4 py-2 border-y-2 border-gray-700/30">
      <input
        className="mr-4"
        type="checkbox"
        defaultChecked={data.isCompleted}
        ref={checkRef}
        onChange={checkBoxUpdate}
      />
      {isModify ? (
        <input
          className="text-[24px] mr-4 min-w-[250px] line-clamp-1"
          type="text"
          defaultValue={data.todo}
          ref={textRef}
        ></input>
      ) : (
        <p className="text-[24px] mr-4 min-w-[250px] line-clamp-1">{data.todo}</p>
      )}

      {isModify ? (
        <button
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={updateTodo}
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

      {isModify ? (
        <button
          className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => setIsModify(false)}
        >
          취소
        </button>
      ) : (
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={deleteTodo}
        >
          삭제
        </button>
      )}
    </li>
  );
};

export default React.memo(Todo);

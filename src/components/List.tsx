import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import { GlobalState } from "../context/TodoProvider";
import { GetTodo, PostTodo } from "../util/TodoUtil";
import Todo from "./Todo";

const List = () => {
  const navigation = useNavigate();
  const [todo, setTodo] = useState("");
  const context = GlobalState();
  const signOut = useCallback(() => {
    localStorage.removeItem("jwt_token");
    navigation("/");
  }, [navigation]);

  const addTodo = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      if (!todo.trim()) {
        alert("옳바르지 않은 값을 입력하셨습니다.");
        setTodo("");
        return;
      }
      try {
        await PostTodo(todo).then((result) => {
          context?.dispatch({
            type: "ADD",
            payload: result,
          });
          setTodo("");
        });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
          alert(err.response?.data.message);
        } else {
          console.error(err);
        }
      }
    },
    [context, todo]
  );

  useEffect(() => {
    if (!localStorage.getItem("jwt_token")) {
      alert("로그인을 하지않았습니다.");
      navigation("/signin");
      return;
    }
    const fetchInitialState = async () => {
      try {
        const result = await GetTodo();
        context?.dispatch({ type: "GET", payload: result });
      } catch (err) {
        if (axios.isAxiosError(err) && err.response?.data) {
          alert(err.response.data.message);
        } else {
          console.error(err);
        }
      }
    };
    fetchInitialState();
  }, [navigation]);

  return (
    <div className="max-w-[1024px] mx-auto flex flex-col justify-center items-center">
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mt-8 rounded"
        onClick={signOut}
      >
        Sign Out
      </button>
      <div className="my-10 flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="example"
          data-testid="new-todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          data-testid="new-todo-add-button"
          onClick={addTodo}
        >
          ADD
        </button>
      </div>
      <ul className="">
        {context?.state.todos.map((todo) => (
          <Todo key={todo.id} data={todo} />
        ))}
      </ul>
    </div>
  );
};

export default List;

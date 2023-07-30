import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Todo from "./Todo";

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const List = () => {
  const navigation = useNavigate();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[] | []>(() => {
    const localStorageTodos = localStorage.getItem("todos");
    return localStorageTodos ? JSON.parse(localStorageTodos) : [];
  });
  const signOut = useCallback(() => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("todos");
    navigation("/");
  }, [navigation]);

  const addTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await axios({
      url: "https://www.pre-onboarding-selection-task.shop/todos",
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
        "Content-Type": "application/json",
      },
      data: {
        todo,
      },
    })
      .then((result) => {
        setTodos(() => [...todos, result.data]);
        setTodo("");
      })
      .catch((err) => console.log(err.response));
  };

  const getTodo = useCallback(async () => {
    await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    })
      .then((result) => setTodos([...result.data]))
      .catch((err) => console.log(err.response.data));
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
      },
    }).then((res) => setTodos((pre) => pre.filter((el) => el.id !== id)));
  }, []);

  //수정 미구현
  const modifyTodo = async (value: TodoType) => {
    console.log(value);
    await axios({
      url: `https://www.pre-onboarding-selection-task.shop/todos/${value.id}`,
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`,
        "Content-Type": "application/json",
      },
      data: {
        todo: value.todo,
        isCompleted: value.isCompleted,
      },
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    if (!localStorage.getItem("jwt_token")) navigation("/");
    getTodo();
  }, [getTodo, navigation]);

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
        {todos.map((todo) => (
          <Todo key={todo.id} data={todo} modifyTodo={modifyTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default List;

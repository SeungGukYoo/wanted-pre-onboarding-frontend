import React, { createContext, useContext, useEffect, useReducer } from "react";
import { GetTodo } from "../util/TodoUtil";

interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

interface State {
  todos: Todo[];
}

type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "GET"; payload: Todo[] }
  | { type: "DELETE"; payload: number }
  | {
      type: "UPDATE";
      payload: Todo;
    };

const GlobalStateContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

const initialState: State = {
  todos: [],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "GET":
      return {
        ...state,
        todos: action.payload,
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) return action.payload;
          return el;
        }),
      };
  }
};

export const GlobalState = () => {
  const context = useContext(GlobalStateContext);
  return context;
};

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchInitialState = async () => {
      const result = await GetTodo();
      dispatch({ type: "GET", payload: result });
    };

    fetchInitialState();
  }, []);

  return <GlobalStateContext.Provider value={{ state, dispatch }}>{children}</GlobalStateContext.Provider>;
};

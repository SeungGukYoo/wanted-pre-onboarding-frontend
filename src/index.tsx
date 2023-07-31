import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import List from "./components/List";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { GlobalStateProvider } from "./context/TodoProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "todo",
    element: <List />,
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);

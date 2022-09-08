import React from "react";
import { useRoutes } from "react-router-dom";
import CoursePage from "../Pages/CoursePage";
import HomePage from "../Pages/HomePage";
function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "course/:id",
          element: <CoursePage />,
        },
      ],
    },
    { path: "*", element: <h1>404</h1> },
  ]);
  console.log(element);
  return element;
}

export default Router;

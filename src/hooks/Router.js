import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import NavBar from "../components/NavBar";
import CoursePage from "../Pages/CoursePage";
import HomePage from "../Pages/HomePage";
import DataFetching from "./DataFetching";
export const CoursesContext = React.createContext();
function Router() {
  const [courses, getCourses] = useState([]);
  DataFetching(courses, getCourses);
  let element = useRoutes([
    {
      path: "/",
      element: (
        <CoursesContext.Provider value={courses}>
          <NavBar />
          <HomePage />
        </CoursesContext.Provider>
      ),
      children: [
        {
          path: "search/:searchInput",
          element: (
            <CoursesContext.Provider value={courses}>
              <NavBar />
              <HomePage />
            </CoursesContext.Provider>
          ),
        },
        {
          path: "search/",
          element: (
            <CoursesContext.Provider value={courses}>
              <NavBar />
              <HomePage />
            </CoursesContext.Provider>
          ),
        },
      ],
    },
    {
      path: "course/:courseId",
      element: (
        <CoursesContext.Provider value={courses}>
          <NavBar />
          <CoursePage />
        </CoursesContext.Provider>
      ),
    },
    { path: "*", element: <h1>404</h1> },
  ]);
  return element;
}

export default Router;

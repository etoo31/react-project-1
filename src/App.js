import "./App.css";
import "./css/courses.css";
import "./css/nav.css";
import NavBar from "./components/NavBar";
import Router from "./hooks/Router";
import DataFetching from "./hooks/DataFetching";
import React, { useState } from "react";

export const CoursesContext = React.createContext();
function App() {
  const [courses, getCourses] = useState([]);
  DataFetching(courses, getCourses);
  console.log(courses);
  return (
    <div className="App">
      <CoursesContext.Provider value={courses}>
        <NavBar />
        <Router></Router>
      </CoursesContext.Provider>
    </div>
  );
}
export default App;

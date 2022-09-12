import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../hooks/Router";
import HeadSection from "../components/course-page/HeadSection";
import "../css/courses.css";

function CoursePage() {
  const courseId = useParams();
  const courses = useContext(CoursesContext);
  console.log(courses);
  const [pageCourse, setPageCourses] = useState({});
  useMemo(() => {
    console.log("in use effect");
    for (let i = 0; i < courses.length; i++) {
      console.log(courseId + " " + courses[i].id);

      if (courseId.courseId == courses[i].id) {
        console.log("i'm in");
        setPageCourses(courses[i]);
      }
    }
  }, [courseId]);
  console.log("page course");
  console.log(pageCourse);
  return <HeadSection {...pageCourse} />;
}

export default CoursePage;

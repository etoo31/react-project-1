import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../hooks/Router";
import HeadSection from "../components/course-page/HeadSection";
import "../css/courses.css";
import CourseFixedNav from "../components/course-page/CourseFixedNav";
import WhatYouWillLearn from "../components/course-page/WhatYouWillLearn";
import CourseContent from "../components/course-page/CourseContent";
import Requirments from "../components/course-page/Requirments";

function CoursePage() {
  const courseId = useParams();
  const courses = useContext(CoursesContext);
  const [pageCourse, setPageCourses] = useState({});
  useMemo(() => {
    for (let i = 0; i < courses.length; i++) {
      if (courseId.courseId == courses[i].id) {
        setPageCourses(courses[i]);
      }
    }
  }, [courseId]);
  return (
    <>
      <CourseFixedNav {...pageCourse} />
      <HeadSection {...pageCourse} />
      <WhatYouWillLearn {...pageCourse} />
      <CourseContent {...pageCourse} />
      <Requirments {...pageCourse} />
    </>
  );
}

export default CoursePage;

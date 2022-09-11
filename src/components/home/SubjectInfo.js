import React, { useContext, useEffect } from "react";
import SubjectHeader from "./SubjectHeader";
import Card from "./Card";
import { SwiperSlide } from "swiper/react";
import CreateSwiper from "./CreateSwiper";
import { CoursesContext } from "../../App";
import Spinner from "./Spinner";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import InnerCard from "./InnerCard";

function SubjectInfo() {
  //courses data
  const courses = useContext(CoursesContext);
  const [displayedCourses, chooseCourses] = useState(courses);
  const { searchInput } = useParams();
  useEffect(() => {
    //by default all the courses has to be displayed
    chooseCourses(courses);
    if (searchInput != undefined && searchInput.trim() != "") {
      //if the searchInput is not undefined or not empty
      let input = searchInput.toLowerCase();
      //we'll make a new arry which will collect the courses that needed to be displayed
      let coursesData = new Array();
      //loop for all courses
      for (let i = 0; i < courses.length; i++) {
        if (courses[i]["title"].toLowerCase().includes(input)) {
          //if the course title contains the search input then add this course to the dislaplyed list
          coursesData.push(courses[i]);
        }
      }
      //if the displayed list is not empty then change the displayedCourses list
      if (coursesData.length != 0) chooseCourses(coursesData);
    }
  }, [searchInput, courses]);
  //get displayed courses and make a card and a slide for each course
  let displayedCoursesSlides = displayedCourses.length ? (
    displayedCourses.map((course) => (
      <>
        <SwiperSlide key={course.id}>
          <Link className="card-link" to={`/course/${course.id}`}>
            <Card {...course}></Card>
          </Link>
          <InnerCard {...course} />
        </SwiperSlide>
      </>
    ))
  ) : (
    <Spinner />
  );
  console.log(displayedCoursesSlides);
  /*subject info consits of:
  1-container
  2-Subject Header
  3- Swiper 
  */
  return (
    <div className="container subject-info">
      <SubjectHeader></SubjectHeader>
      <CreateSwiper>{displayedCoursesSlides}</CreateSwiper>
    </div>
  );
}

export default SubjectInfo;

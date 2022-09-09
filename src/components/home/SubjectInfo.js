import React, { useContext } from "react";
import SubjectHeader from "./SubjectHeader";
import Card from "./Card";
import { SwiperSlide } from "swiper/react";
import CreateSwiper from "./CreateSwiper";
import { CoursesContext } from "../../App";
import Spinner from "./Spinner";

function SubjectInfo() {
  //courses data
  const courses = useContext(CoursesContext);
  console.log(courses);
  //get displayed courses and make a card and a slide for each course
  const displayedCourses = courses.length ? (
    courses.map((course) => (
      <SwiperSlide key={course.id}>
        <Card {...course}></Card>
      </SwiperSlide>
    ))
  ) : (
    <Spinner />
  );
  /*subject info consits of:
  1-container
  2-Subject Header
  3- Swiper 
  */
  return (
    <div className="container subject-info">
      <SubjectHeader></SubjectHeader>
      <CreateSwiper>{displayedCourses}</CreateSwiper>
    </div>
  );
}

export default SubjectInfo;

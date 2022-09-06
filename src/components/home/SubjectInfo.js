import React from "react";
import SubjectHeader from "./SubjectHeader";
import Card from "./Card";
import { SwiperSlide } from "swiper/react";
import CreateSwiper from "./CreateSwiper";
function SubjectInfo() {
  //courses data
  const courses = [
    {
      imageSrc: "python1.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 3.4,
      offer: 1,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python2.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 1,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python3.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python4.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python5.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python6.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python7.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python8.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "python9.png",
      alt: "Phyton-image",
      title: "Python-byond the basics object-oriented programming",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "java1.png",
      alt: "java-image",
      title: "Learn javaScript: Java script for begginners",
      author: "Infinite Skills",
      rating: 4.4,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
    {
      imageSrc: "java2.png",
      alt: "java-image",
      title: "Learn javaScript: Java script for begginners",
      author: "Infinite Skills",
      rating: 4.0,
      offer: 0,
      price: 679.99,
      offerPrice: 269.99,
    },
  ];

  //get displayed courses and make a card and a slide for each course
  const displayedCourses = courses.map((course) => (
    <SwiperSlide key={course.imageSrc}>
      <Card {...course}></Card>
    </SwiperSlide>
  ));
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

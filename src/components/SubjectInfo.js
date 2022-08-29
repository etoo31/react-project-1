import React, { Component } from "react";
import SubjectHeader from "./SubjectHeader";
import Card from "./Card";
import SwiperBtns from "./SwiperBtns";

export default class SubjectInfo extends Component {
  //courses data
  courses = [
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
  render() {
    //get displayed courses and make a card and a slide for each course
    const displayedCourses = this.courses.map((course) => (
      <div className="swiper-slide col-lg-3 col-md-4 col-sm-6">
        <Card key={course.imageSrc} {...course}></Card>
      </div>
    ));
    /*subject info consits of:
    1-container
    2-Subject Header
    3- Swiper 
    */
    return (
      <div className="container subject-info">
        <SubjectHeader></SubjectHeader>
        <div className="swiper">
          <div className="swiper-wrapper row">{displayedCourses}</div>
          <SwiperBtns></SwiperBtns>
        </div>
      </div>
    );
  }
}

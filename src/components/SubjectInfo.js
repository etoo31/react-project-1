import React, { Component } from "react";
import SubjectHeader from "./SubjectHeader";
import Card from "./Card";

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
    //get displayed courses and make a card for each course
    const displayedCourses = this.courses.map((course) => (
      <Card key={course.imageSrc} {...course}></Card>
    ));
    return (
      <div className="container subject-info">
        <SubjectHeader></SubjectHeader>
        <div className="container row">{displayedCourses}</div>
      </div>
    );
  }
}

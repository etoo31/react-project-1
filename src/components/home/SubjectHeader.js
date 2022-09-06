import React from "react";

export default function SubjectHeader() {
  /*subject header consist of:
  1- header 
  2- paragraph
  3- explore more btn*/ 
  return (
    <div className="subject-header col-lg-12 col-md-11 col-sm-10">
      <h1>Expand your career opportunities with Python</h1>
      <p>
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to...
      </p>
      <button className="explore-more btn">Explore More</button>
    </div>
  );
}

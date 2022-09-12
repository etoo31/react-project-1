import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CourseContentCard from "./CourseContentCard";
import "./css/CourseContent.css";
function CourseContent(props) {
  const [expandAll, toggleExpandAll] = useState(false);
  const [showMore, toggleShow] = useState(false);
  const toggleShowMore = () => toggleShow(!showMore);
  const toggle = () => toggleExpandAll(!expandAll);
  const content = props.content;
  const [shownContent, setShownContent] = useState([]);
  const [unShownContent, setUnShownContent] = useState([]);

  useEffect(() => {
    const array1 = new Array();
    const array2 = new Array();
    const halfSections = +props.sectionsCount / 2;
    for (let i = 0; i < content.length; i++) {
      if (i <= halfSections) {
        array1.push(
          <CourseContentCard
            key={content[i]}
            content={content[i]}
            expandAll={expandAll}
          />
        );
      } else
        array2.push(
          <CourseContentCard
            key={content[i]}
            content={content[i]}
            expandAll={expandAll}
          />
        );
    }
    setShownContent(array1);
    setUnShownContent(array2);
  }, [content, expandAll]);

  return (
    <div className="container course-contnet">
      <div className="course-content-text">Course Content</div>
      <div className="sections-lectures-length-and-btn">
        <div className="sections-lectures-length">
          {props.sectionsCount} sections . {props.lecturesCount} lectures .{" "}
          {props.totalLength} total length
        </div>
        <button className="sections-lectures-length-btn" onClick={toggle}>
          {expandAll ? "Collapse" : "Expand"} all sections
        </button>
      </div>
      {shownContent}
      {showMore ? unShownContent.map((card) => <>{card}</>) : ""}
      <button className="show-more-btn" onClick={toggleShowMore}>
        Show {showMore ? "Less" : "More"}
      </button>
    </div>
  );
}

export default CourseContent;

import React, { useState } from "react";
import { useEffect } from "react";

function CourseContentCard(props) {
  const [expand, setexpand] = useState(false);
  const toggleExpand = () => setexpand(!expand);
  const content = props.content;
  const lessons = content[1].map((lesson) => (
    <div className="one-lesson">
      <i class="lesson-play fa-solid fa-circle-play"></i>
      <div className="lesson-content">{lesson}</div>
    </div>
  ));
  return (
    <div className="continer-fluid">
      <div className="course-content-card-container" onClick={toggleExpand}>
        {expand ? (
          <i class="up-down fa-solid fa-angle-up"></i>
        ) : (
          <i class="up-down fa-solid fa-angle-down"></i>
        )}
        <div className="course-content-header">{content[0][0]}</div>
      </div>
      {props.expandAll || expand ? (
        <div className="lessons-content-container">{lessons}</div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CourseContentCard;
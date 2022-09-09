import axios from "axios";
import React, { useEffect } from "react";

function DataFetching(courses, getCourses) {
  useEffect(() => {
    setTimeout(
      axios
        .get("http://localhost:3004/courses")
        .then((response) => getCourses(response.data))
        .catch((error) => console.log(error)),
      90000
    );
  }, []);
  return courses;
}

export default DataFetching;

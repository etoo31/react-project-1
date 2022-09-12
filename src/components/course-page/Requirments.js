import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/Requirments.css";

function Requirments(props) {
  const [required, setRequirments] = useState([]);
  useEffect(() => {
    setRequirments(props.requirements);
  }, [required, props.requirements]);
  return (
    <div className="container requirments-container">
      <div className="requirments-container-text">Requirments</div>
      {required.map((require) => {
        return (
          <div key={require} className="require-container">
            <i class="require-dot fa-solid fa-circle"></i>
            <div className="require-test">{require}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Requirments;

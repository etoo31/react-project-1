import React from "react";
import alarmImage from "../../img/alarm1.png";

function HeadSection() {
  return (
    <>
      <div className="head-section">
        {/*Head note*/}
        <div className="head-note">
          <h1>New to Udemy? Lucky you.</h1>
          <p>Courses start at E£169.99. Get your new-student offer now.</p>
        </div>
        {/*Alarm image*/}
        <div className="alarm">
          <img src={alarmImage} alt="alarm" className="img-fluid"></img>
        </div>
      </div>
      {/* aborad courses container*/}
      <div className="container mt-4">
        <h1>A broad selection of courses</h1>
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>
    </>
  );
}

export default HeadSection;

import React from "react";
import CircularWithValueLabel from "./CircularProgressWithLabel";
import LinearDeterminate from "./LinearDeterminate";

const Englishcourse = () => {
  const circularProgressValue = 40;
  const circularProgressColor = "#F96E6F";
  const outerCircularProgressColor = "#F2D2BD";
  return (
    <>
      <div className="bar-details">
        <div className="subject">
          <h4>English</h4>
        </div>
        <div className="course">
          <div className="coures-info">
            <p>English Course</p>
            <p>Progress</p>
          </div>
          <div className="circle-progress">
            <CircularWithValueLabel
              value={circularProgressValue}
              color={circularProgressColor}
              outerColor={outerCircularProgressColor}
            />
          </div>
        </div>
        <div className="module">
          <p>Modules</p>
          <div className="progress">
            <LinearDeterminate progress={40} color="#F96E6F" />
            <span>4/10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Englishcourse;

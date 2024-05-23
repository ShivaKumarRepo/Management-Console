import React from "react";
import LinearDeterminate from "./LinearDeterminate";
import CircularWithValueLabel from "./CircularProgressWithLabel";

const Logicalcourse = () => {
  const circularProgressValue = 100;
  const circularProgressColor = "#FFAB00";
  const outerCircularProgressColor = "#FFAB00";

  return (
    <>
      <div className="bar-details">
        <div className="subject">
          <h4>Logical Reasoning</h4>
        </div>
        <div className="course">
          <div className="coures-info">
            <p>Logical Course</p>
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
            <LinearDeterminate progress={100} color="#FFAB00" />
            <span>10/10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logicalcourse;

import React from "react";
import LinearDeterminate from "./LinearDeterminate";
import CircularWithValueLabel from "./CircularProgressWithLabel";

const CSAPcourse = () => {
  const circularProgressValue = 85;
  const circularProgressColor = "#7947F7";
  const outerCircularProgressColor = "#ECEAFE";
  return (
    <>
      <div className="bar-details">
        <div className="subject">
          <h4>CSAP</h4>
        </div>
        <div className="course">
          <div className="coures-info">
            <p>CSAP Course</p>
            <p>Progress</p>
          </div>
          <div className="circle-progresCSEPs">
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
            <LinearDeterminate progress={85} color="#7947F7" />
            <span>8/10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSAPcourse;

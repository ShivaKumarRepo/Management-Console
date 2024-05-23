import React from "react";
import LinearDeterminate from "./LinearDeterminate";
import CircularWithValueLabel from "./CircularProgressWithLabel";

const CSEPcourse = () => {
  const circularProgressValue = 70;
  const circularProgressColor = "#28C76F";
  const outerCircularProgressColor = "#D4F4E2";
  return (
    <>
      <div className="bar-details">
        <div className="subject">
          <h4>CSEP</h4>
        </div>
        <div className="course">
          <div className="coures-info">
            <p>CSEP Course</p>
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
            <LinearDeterminate progress={70} color="#28C76F" />
            <span>6/10</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSEPcourse;

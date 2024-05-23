import React, { useState } from "react";
import "./Candidates.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Table from "./Components/Table";

const Candidates = () => {
  const [appliedOn, setAppliedOn] = useState(true);
  const [status, setStatus] = useState(false);

  const handleAllCandidates = () => {
    setAppliedOn(true);
    setStatus(false);
  };

  const handleStatus = () => {
    setAppliedOn(false);
    setStatus(true);
  };

  return (
    <>
      <div className="page-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="heading">
            <Header heading={"Candidates"} />
          </div>
        </div>
        <div className="performance">
          <div className="candidates-info">
            <div className="headings">
              <div className="all-Candidates">
                <h4 onClick={handleAllCandidates}>All Candidates</h4>
                {appliedOn && !status && <div className="divider"></div>}
              </div>
              <div className="status">
                <h4 onClick={handleStatus}>Status of Candidates</h4>
                {status && !appliedOn && <div className="divider"></div>}
              </div>
            </div>
            <div className="course-list">
              <p id="all">All</p>
              <p>Design</p>
              <p>Development</p>
              <p>Testing</p>
            </div>
          </div>
          <div className="table-list">
            {appliedOn && !status && <Table appliedOn={true} />}
            {status && !appliedOn && <Table status={true} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;

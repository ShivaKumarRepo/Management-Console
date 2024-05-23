import React from "react";
import Cards from "../Cards/Cards";
import Table from "../AllJobsTable/JobTable";

const Activejobs = ({ activeSection, setActiveSection, setJobCreation }) => {
  const jobTitles = [
    "UI Designer",
    "UX Designer",
    "Graphic Designer",
    "UI Developer",
    "Front End Developer",
    "Back End Developer",
    "React Developer",
    "Full Stack Developer",
    "UI Designer",
    "Angular Developer",
    "UX Designer",
    "Graphic Designer",
  ];
  return (
    <div className="jobs-container">
      <div className="jobs-info">
        <div className="headings">
          <div className="active-jobs" onClick={() => setActiveSection(true)}>
            <h4>Active Jobs</h4>
            {activeSection && <div className="divider"></div>}
          </div>
          <div className="all-jobs" onClick={() => setActiveSection(false)}>
            <h4>All Jobs</h4>
            {!activeSection && <div className="divider"></div>}
          </div>
        </div>
        <div className="jobs-list">
          <p id="all">All</p>
          <p>Design</p>
          <p>Development</p>
          <p>Testing</p>
          {activeSection && (
            <div className="button">
              <button onClick={() => setJobCreation(true)}>Create Job</button>
            </div>
          )}
        </div>
      </div>
      {activeSection ? (
        <div className="cards">
          {jobTitles.map((heading, index) => (
            <Cards
              key={index}
              heading={heading}
              setJobCreation={setJobCreation}
            />
          ))}
        </div>
      ) : (
        <div className="table-list">
          <Table />
        </div>
      )}
    </div>
  );
};

export default Activejobs;

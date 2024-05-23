import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import RoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import "./Jobs.css";
import Activejobs from "./Components/Activejobs/Activejobs";
import Jobcreation from "./Components/Jobcreation/Jobcreation";

const Jobs = () => {
  const [activeSection, setActiveSection] = useState(true);
  const [jobCreation, setJobCreation] = useState(false);

  const handleActivejobs = () => {
    setJobCreation(false);
  };

  return (
    <>
      <div className="page-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="heading">
            <Header
              heading={
                <div className="header-content">
                  {jobCreation && (
                    <div className="icon-circle">
                      <RoundedIcon
                        className="back-arrow"
                        onClick={handleActivejobs}
                      />
                    </div>
                  )}
                  <h5>Jobs</h5>
                </div>
              }
            />
          </div>
        </div>

        <div className="performance">
          {jobCreation ? (
            <div className="job-creation-section">
              <Jobcreation handleActivejobs={handleActivejobs} />
            </div>
          ) : (
            <Activejobs
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              setJobCreation={setJobCreation}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;

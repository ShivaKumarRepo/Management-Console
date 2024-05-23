import React from "react";
import PaymentsIcon from "@mui/icons-material/Payments";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Cards = ({ heading, setJobCreation }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>{heading}</h2>
          <p className="address">Madhapur-Hyderabad, Telangana-2 days ago</p>
        </div>
        <div className="card-body">
          <div className="employment-box1">
            <p>
              <PaymentsIcon />
              $800-$1,000
            </p>
            <p>
              <WatchLaterIcon />
              Day Shift
            </p>
          </div>
          <div className="employment-box2">
            <p>
              <BusinessCenterIcon />
              Full Time
            </p>
            <p>
              <PeopleAltIcon />
              120 Applicants
            </p>
          </div>
        </div>
        <div className="job-description">
          <p>
            As a design team that is responsible for delivering final design for
            our end-users, you will be assigned to a team...
          </p>
        </div>
        <div className="card-button">
          <button className="edit-btn" onClick={() => setJobCreation(true)}>
            Edit
          </button>
          <button className="deactivate-btn">Deactivate</button>
        </div>
      </div>
    </>
  );
};

export default Cards;

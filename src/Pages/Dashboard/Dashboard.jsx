import React from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Englishcourse from "./Components/Cards/Englishcourse";
import Logicalcourse from "./Components/Cards/Logicalcourse";
import CSEPcourse from "./Components/Cards/CSEPcourse";
import CSAPcourse from "./Components/Cards/CSAPcourse";
import Student from "./Components/Studentperformance/Student";
import Academic from "./Components/Academicperformance/Academic";
import CSEP from "./Components/CSEP/CSEP";
import CSAP from "./Components/CSAP/CSAP";

const Dashboard = () => {
  return (
    <>
      <div class="page-container">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="content">
          <div class="heading">
            <Header heading={"Company Admin"}/>
          </div>
          <div class="performance">
            <div className="progress-container">
              <Englishcourse />
              <Logicalcourse />
              <CSEPcourse />
              <CSAPcourse />
            </div>
            <div className="charts-container">
              <Student />
              <Academic />
            </div>
            <div className="CS-EPAP-container">
              <CSEP />
              <CSAP />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

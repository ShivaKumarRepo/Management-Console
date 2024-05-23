import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/logo.jpg";
import girl from "../../Assets/Image.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Candidates", icon: <SchoolIcon />, path: "/candidates" },
    { text: "Jobs", icon: <BusinessCenterIcon />, path: "/jobs" },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} className="logo-img" alt="Logo" />
        </div>
        <hr />
        <div className="details">
          <div className="details-img">
            <img src={girl} alt="Profile" />
            <p id="name">Manasa T.M</p>
          </div>
        </div>

        <div className="menu-info">
          <ul className="menu-items">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path && "menu-item-link active"
                  }
                >
                  <div className="menu-item-icon">{item.icon}</div>
                  <div className="menu-item-text">{item.text}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

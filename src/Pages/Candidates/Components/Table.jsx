import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import img1 from "../../../Assets/img1.png";
import img2 from "../../../Assets/img2.png";
import img3 from "../../../Assets/img3.png";
import img4 from "../../../Assets/img4.png";
import img5 from "../../../Assets/img5.png";
import img6 from "../../../Assets/img6.png";
import img7 from "../../../Assets/img7.png";
import img8 from "../../../Assets/img8.png";

const DenseTable = ({ appliedOn = false, status = false }) => {
  function createData(
    profile,
    name,
    role,
    experience,
    salary,
    appliedOn,
    status
  ) {
    return { profile, name, role, experience, salary, appliedOn, status };
  }

  const rows = [
    createData(
      img1,
      "Jenny",
      "UI Designer",
      "3 Years",
      "$8,000",
      "Monday, 4 Jan 2024",
      "Selected"
    ),
    createData(
      img2,
      "Lester Holland",
      "Frontend Developer",
      "5 Years",
      "$7,500",
      "Tuesday, 5 April 2024",
      "Selected"
    ),
    createData(
      img3,
      "Richard Gregory",
      "Project Manager",
      "4 Years",
      "$9,200",
      "Wednesday, 6 Jan 2024",
      "Selected"
    ),
    createData(
      img4,
      "Dean Ortega",
      "Data Analyst",
      "2 Years",
      "$6,800",
      "Thursday, 7 Jan 2024",
      "Rejected"
    ),
    createData(
      img5,
      "Eugene Griffith",
      "Software Engineer",
      "6 Years",
      "$10,500",
      "Friday, 8 May 2024",
      "Selected"
    ),
    createData(
      img6,
      "Christian Allen",
      "UX Designer",
      "4 Years",
      "$8,700",
      "Saturday, 9 Feb 2024",
      "Rejected"
    ),
    createData(
      img7,
      "James Wilkins",
      "Backend Developer",
      "3 Years",
      "$8,300",
      "Sunday, 10 Jan 2024",
      "Rejected"
    ),
    createData(
      img8,
      "Tommy Massey",
      "Product Manager",
      "5 Years",
      "$9,800",
      "Monday, 11 March 2024",
      "Selected"
    ),
  ];

  return (
    <>
      <TableContainer component={Paper} style={{ borderRadius: "14px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ padding: "20px", fontSize: "15px" }}>
                <h4>Profile</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "20px 0", fontSize: "15px" }}
              >
                <h4>Candidate Name</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "20px 0", fontSize: "15px" }}
              >
                <h4>Job Role</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "20px 0", fontSize: "15px" }}
              >
                <h4>Experience</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "20px 0", fontSize: "15px" }}
              >
                <h4>Salary</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "20px 0", fontSize: "15px" }}
              >
                <h4>{appliedOn ? "Applied On" : "Status"}</h4>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={row.profile}
                    alt="Profile"
                    style={{ width: "45px", borderRadius: "50%" }}
                  />
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#7D8FB3", fontSize: "15px" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#7D8FB3", fontSize: "15px" }}
                >
                  {row.role}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#7D8FB3", fontSize: "15px" }}
                >
                  {row.experience}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#7D8FB3", fontSize: "15px" }}
                >
                  {row.salary}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: "#7D8FB3", fontSize: "15px" }}
                >
                  {appliedOn ? (
                    row.appliedOn
                  ) : (
                    <span
                      style={{
                        color: row.status === "Selected" ? "green" : "red",
                        fontSize: "15px",
                      }}
                    >
                      {row.status}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DenseTable;

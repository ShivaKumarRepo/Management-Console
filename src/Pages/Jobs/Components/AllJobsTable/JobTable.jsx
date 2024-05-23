import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DenseTable = () => {
  function createData(role, employmentType, experience, salary, status) {
    return { role, employmentType, experience, salary, status };
  }

  const rows = [
    createData("UI Designer", "Full-Time", "3 Years", "$8,000", "Selected"),
    createData("UX Designer", "Part-Time", "5 Years", "$10,000", "Rejected"),
    createData(
      "Front End Developer",
      "Full-Time",
      "4 Years",
      "$9,500",
      "Selected"
    ),
    createData(
      "Back End Developer",
      "Freelancer",
      "6 Years",
      "$12,000",
      "Selected"
    ),
    createData("Graphic Designer", "internship", "2 Years", "$7,000", "Rejected"),
    createData(
      "Full Stack Developer",
      "Full-Time",
      "7 Years",
      "$15,000",
      "Selected"
    ),
    createData("UI/UX Designer", "Part-Time", "4 Years", "$9,000", "Rejected"),
    createData("UIDesigner", "Part-Time", "4 Years", "$9,000", "Selected"),
    createData(
      "Back End Developer",
      "Full-Time",
      "6 Years",
      "$12,000",
      "Rejected"
    ),
  ];

  return (
    <>
      <TableContainer component={Paper} style={{ borderRadius: "14px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ padding: "15px 0px", fontSize: "15px" }}
              >
                <h4>Job Role</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "15px 0px", fontSize: "15px" }}
              >
                <h4>Employement Type</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "15px 0px", fontSize: "15px" }}
              >
                <h4>Experience</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "15px 0px", fontSize: "15px" }}
              >
                <h4>Salary</h4>
              </TableCell>
              <TableCell
                align="center"
                style={{ padding: "15px 0px", fontSize: "15px" }}
              >
                <h4>Status</h4>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  align="center"
                  style={{
                    padding: "15px 0",
                    color: "#7D8FB3",
                    fontSize: "15px",
                  }}
                >
                  {row.role}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    padding: "15px 0",
                    color: "#7D8FB3",
                    fontSize: "15px",
                  }}
                >
                  {row.employmentType}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    padding: "15px 0",
                    color: "#7D8FB3",
                    fontSize: "15px",
                  }}
                >
                  {row.experience}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    padding: "15px 0",
                    color: "#7D8FB3",
                    fontSize: "15px",
                  }}
                >
                  {row.salary}
                </TableCell>
                <TableCell align="center" style={{ padding: "10px 0" }}>
                  <span
                    style={{
                      color:
                        row.status === "Selected"
                          ? "green"
                          : row.status === "Rejected"
                          ? "red"
                          : "#7D8FB3",
                      fontSize: "15px",
                    }}
                  >
                    {row.status}
                  </span>
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

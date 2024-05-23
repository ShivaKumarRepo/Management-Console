import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MultipleSelect from "./MultipleSelect";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import SkillSelector from "./SkillSelector";

const Jobcreation = ({ handleActivejobs }) => {
  const handleSubmit = () => {
    handleActivejobs();
  };

  const FullWidthTextField = ({ label, multiline = false, minRows = 1 }) => {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label={label}
          multiline={multiline}
          minRows={minRows}
          InputLabelProps={{
            sx: {
              fontSize: "15px",
            },
          }}
        />
      </Box>
    );
  };

  const CheckboxWithBorder = ({ label }) => {
    return (
      <div className="checkbox-container">
        <Box
          sx={{
            width: 240,
            maxWidth: "100%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px 10px",
            marginBottom: "25px",
          }}
        >
          <FormControlLabel control={<Checkbox />} label={label} />
        </Box>
      </div>
    );
  };

  const RadioButtons = ({ label, options }) => {
    return (
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "0px 30px",
        }}
      >
        <FormLabel component="legend" sx={{ fontSize: "15px" }}>
          {label}
        </FormLabel>
        <RadioGroup row>
          {options.map((option, index) => (
            <Box
              key={option}
              sx={{
                display: "flex",
                alignItems: "center",
                borderRight:
                  index < options.length - 1 ? "1px solid #ccc" : "none",
                paddingRight: index < options.length - 1 ? "30px" : "0",
                marginRight: index < options.length - 1 ? "30px" : "0",
              }}
            >
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option}
              />
            </Box>
          ))}
        </RadioGroup>
      </Box>
    );
  };

  return (
    <>
      <div className="job-details">
        <div className="job-heading">
          <p id="heading">Job Creation</p>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Job Title</h3>
            <p>A job title must describe one position only</p>
          </div>
          <div className="text-field">
            <FullWidthTextField label="Enter job title here" />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Job Description</h3>
            <p>
              Provide a short description about the job. Keep it short and to
              the point
            </p>
          </div>
          <div className="text-field">
            <FullWidthTextField
              label="Enter the job description"
              multiline
              minRows={3}
            />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Job Requirements</h3>
            <p>Specify the necessary qualifications and skills for the job.</p>
          </div>
          <div className="text-field">
            <FullWidthTextField
              label="Enter your requirements"
              multiline
              minRows={4}
            />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Employment Type</h3>
            <p>Select the type of employment for this position.</p>
          </div>
          <div className="text-field">
            <div className="checkbox-group">
              <CheckboxWithBorder label="Full - Time" />
              <CheckboxWithBorder label="Part - Time" />
            </div>
            <div className="checkbox-group">
              <CheckboxWithBorder label="Internship" />
              <CheckboxWithBorder label="Freelancer" />
            </div>
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Working Schedule</h3>
            <p>Specify the working hours for this position.</p>
          </div>
          <div className="text-field">
            <MultipleSelect
              label="Working hours"
              options={["7 am-2 pm", "9 am-6 pm", "10 am-6 pm", "1 pm-8 pm"]}
            />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Salary</h3>
            <p>Specify the salary range for this position.</p>
          </div>
          <div className="text-field">
            <MultipleSelect
              label="Select salary range in CTA"
              options={["1-2 CTA", "2-3 CTA", "3-4 CTA", "4-5 CTA"]}
            />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Hiring Multiple Candidates</h3>
            <p>Specify the number of candidates you want to hire.</p>
          </div>
          <div className="text-field">
            <MultipleSelect
              label="Select number of openings"
              options={["1 opening", "2 openings", "3 openings", "4 openings"]}
            />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Interview Type</h3>
            <p>Select the type of interview for this position.</p>
          </div>
          <div className="text-field">
            <RadioButtons options={["Online", "Offline", "Phone Call"]} />
          </div>
        </div>

        <div className="title">
          <div className="title-text">
            <h3>Skills</h3>
            <p>Select the necessary skills required for this position.</p>
          </div>
          <div className="text-field">
            <SkillSelector />
          </div>
        </div>
        <div className="submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Jobcreation;

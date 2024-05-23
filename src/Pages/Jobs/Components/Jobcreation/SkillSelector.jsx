import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const SkillSelector = () => {
  const [skills, setSkills] = useState([]);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const availableSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React Js",
    "TypeScript",
  ];

  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills((prevSkills) => [...prevSkills, skill]);
    }
    setMenuAnchor(null);
  };

  const handleDelete = (skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToDelete)
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          sx={{
            width: "370px",
            "& .MuiInputBase-root": {
              height: "52px",
            },
          }}
          label="Skills"
          value={skills.join(", ")}
          InputLabelProps={{
            sx: {
              fontSize: "15px",
            },
          }}
          InputProps={{
            readOnly: true,
          }}
        />
        <Stack direction="row" spacing={1}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleDelete(skill)}
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>
      <Button variant="contained" onClick={handleClick}>
        Add Skill
      </Button>
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => handleClose(null)}
      >
        {availableSkills.map((skill) => (
          <MenuItem key={skill} onClick={() => handleClose(skill)}>
            {skill}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default SkillSelector;

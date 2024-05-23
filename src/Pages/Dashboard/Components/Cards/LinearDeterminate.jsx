// LinearDeterminate.js
import React from "react";
import { Box, LinearProgress } from "@mui/material";

export default function LinearDeterminate({ progress, color }) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          "& .MuiLinearProgress-bar": {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
}

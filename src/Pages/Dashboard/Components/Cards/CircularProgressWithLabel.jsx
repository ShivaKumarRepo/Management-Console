import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  const { value, color, outerColor } = props;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={60}
        sx={{
          color: outerColor,
          strokeWidth: 5,
        }}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={60}
        sx={{
          color: color,
          position: "absolute",
          left: 0,
          zIndex: 1,
          strokeWidth: 5,
        }}
      />
      <Box
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  outerColor: PropTypes.string.isRequired,
};

const CircularWithValueLabel = (props) => {
  const { value, color, outerColor } = props;

  return (
    <CircularProgressWithLabel
      value={value}
      color={color}
      outerColor={outerColor}
    />
  );
};

export default CircularWithValueLabel;

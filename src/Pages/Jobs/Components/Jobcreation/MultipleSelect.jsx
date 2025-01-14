import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 46;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, selectedNames, theme) => ({
  fontWeight:
    selectedNames.indexOf(name) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
});

const MultipleSelect = ({ label, options }) => {
  const theme = useTheme();
  const [selectedNames, setSelectedNames] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedNames(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{  width: 500 ,maxWidth: "100%",}}>
      <InputLabel>{label}</InputLabel>
      <Select
        multiple
        value={selectedNames}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
      >
        {options.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, selectedNames, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;

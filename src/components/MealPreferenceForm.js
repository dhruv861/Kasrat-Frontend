import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, FormHelperText } from "@mui/material";

const MealPreferenceForm = ({ getExercisePlan, closeModal }) => {
  const [timeFrame, setTimeFrame] = useState([]);
  
  const handleTimeFrame = (event) => {
    const {
      target: { value },
    } = event;
    setTimeFrame(
      // On autofill we get a stringified value.
      value
    );
  };
  

  const generatePlan = () => {
    
    getExercisePlan({
    });
    closeModal();
  };

  return (
    <div style={{ display: "grid" }}>
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Time Frame</InputLabel>
        <Select
          labelId="timeFrame"
          id="timeFrame"
          value={timeFrame}
          label="Time Frame"
          onChange={handleTimeFrame}
        >
          <MenuItem value={"Day"}>Day</MenuItem>
          <MenuItem value={"Week"}>Week</MenuItem>
          
        </Select>
        <FormHelperText>Select a Equipment </FormHelperText>
      </FormControl>

      <Button
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
          justifySelf: "self-end",
        }}
        onClick={generatePlan}
      >
        Generate Plan
      </Button>
    </div>
  );
};

export default MealPreferenceForm;

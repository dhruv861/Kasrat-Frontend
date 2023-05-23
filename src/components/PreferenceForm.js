import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Label } from "@mui/icons-material";
import { Button, FormHelperText } from "@mui/material";

const PreferenceForm = () => {
    const [days, setDays] = useState([])
    const [equipment, setEquipment] = useState("");
    const [bodypart, setBodypart] = useState("")
    const [targetMuscles, setTargetMuscles] =useState("")
    const [workoutTime, setWorkoutTime] = useState("")    

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const handleDays = (event) => {
    const {
      target: { value },
    } = event;
    setDays(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleEquipment = (event) => {
    const {
      target: { value },
    } = event;
    setEquipment(
      // On autofill we get a stringified value.
       value
    );
  };
  const handleBodypart = (event) => {
    const {
      target: { value },
    } = event;
    setBodypart(
      // On autofill we get a stringified value.
       value
    );
  };
  const handleWorkoutTime = (event) => {
    const {
      target: { value },
    } = event;
    setWorkoutTime(
      // On autofill we get a stringified value.
      value
    );
  };
   const handleTargetMuscle = (event) => {
     const {
       target: { value },
     } = event;
     setTargetMuscles(
       // On autofill we get a stringified value.
       value
     );
   };

  const generatePlan=() => {
    console.log(days,bodypart,equipment,targetMuscles)
  }

  return (
    <div style={{ display: "grid" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} label="Training Days">
        <InputLabel id="equipment">Training Days</InputLabel>
        <Select
          labelId="equipment"
          id="equipment"
          multiple
          value={days}
          onChange={handleDays}
          input={
            <OutlinedInput id="select-multiple-chip" label="Training Days" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          //   MenuProps={{
          //     PaperProps: {
          //       style: {
          //         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          //         width: 250,
          //       },
          //     },
          //   }}
        >
          {DAYS.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //   style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Days you want to workout </FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Equipment</InputLabel>
        <Select
          labelId="equipment"
          id="equipment"
          value={equipment}
          label="Equipment"
          onChange={handleEquipment}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Select a Equipment </FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">BodyPart</InputLabel>
        <Select
          labelId="bodypart"
          id="bodypart"
          value={bodypart}
          label="BodyPart"
          onChange={handleBodypart}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Select a Bodypart</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Target Muscles</InputLabel>
        <Select
          labelId="target-muscles"
          id="target-muscles"
          value={targetMuscles}
          label="Target Muscles"
          onChange={handleTargetMuscle}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Select a Bodypart</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Workout Time
        </InputLabel>
        <Select
          labelId="time"
          id="time"
          value={workoutTime}
          label="time"
          onChange={handleWorkoutTime}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Available Time</FormHelperText>
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

export default PreferenceForm;

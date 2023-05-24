import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, FormHelperText } from "@mui/material";

const PreferenceForm = ({getExercisePlan,closeModal}) => {
    const [days, setDays] = useState([])
    const [equipment, setEquipment] = useState("");
    const [bodypart, setBodypart] = useState("")
    const [targetMuscles, setTargetMuscles] =useState("")
    const [workoutTime, setWorkoutTime] = useState("")
        

  const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  const EQUIPMENT = [
    "body weight",
    "cable",
    "leverage machine",
    "assisted",
    "medicine ball",
    "stability ball",
    "band",
    "barbell",
    "rope",
    "dumbbell",
    "ez barbell",
    "sled machine",
    "upper body ergometer",
    "kettlebell",
    "olympic barbell",
    "weighted",
    "bosu ball",
    "resistance band",
    "roller",
    "skierg machine",
    "hammer",
    "smith machine",
    "wheel roller",
    "stationary bike",
    "tire",
    "trap bar",
    "elliptical machine",
    "stepmill machine",
  ];
  const BODYPART=[
    "waist",
    "upper legs",
    "back",
    "lower legs",
    "chest",
    "upper arms",
    "cardio",
    "shoulders",
    "lower arms",
    "neck"
]
  const TARGET_MUSCLES = [
    "abs",
    "quads",
    "lats",
    "calves",
    "pectorals",
    "glutes",
    "hamstrings",
    "adductors",
    "triceps",
    "cardiovascular system",
    "spine",
    "upper back",
    "biceps",
    "delts",
    "forearms",
    "traps",
    "serratus anterior",
    "abductors",
    "levator scapulae",
  ];
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
    console.log(days,bodypart,equipment,targetMuscles,workoutTime)
    getExercisePlan({
      preferences: {
        equipment: equipment,
        body_parts: bodypart,
        target_muscles: targetMuscles,
      },
    })
    closeModal()
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
          {EQUIPMENT.map((item) => (
            <MenuItem value={item} key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </MenuItem>
          ))}
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
          {BODYPART.map((item) => (
            <MenuItem value={item} key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select a Bodypart</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Target Muscles
        </InputLabel>
        <Select
          labelId="target-muscles"
          id="target-muscles"
          value={targetMuscles}
          label="Target Muscles"
          onChange={handleTargetMuscle}
        >
          {TARGET_MUSCLES.map((item) => (
            <MenuItem value={item} key={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
            </MenuItem>
          ))}
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
          <MenuItem value={30}>30 min</MenuItem>
          <MenuItem value={60}>1 hour</MenuItem>
          <MenuItem value={90}>1 hour 30 min</MenuItem>
          <MenuItem value={120}>2 hour</MenuItem>
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

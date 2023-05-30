import React, { useState } from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, FormHelperText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const PreferenceForm = ({ getExercisePlan, closeModal }) => {
  const [days, setDays] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [bodypart, setBodypart] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [workoutTime, setWorkoutTime] = useState("");
  const navigate = useNavigate();

  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
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
  const BODYPART = [
    "waist",
    "upper legs",
    "back",
    "lower legs",
    "chest",
    "upper arms",
    "cardio",
    "shoulders",
    "lower arms",
    "neck",
  ];
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

  const generatePlan = () => {
    console.log(days, bodypart, equipment, targetMuscles, workoutTime);
    if (days && bodypart && equipment && targetMuscles && workoutTime) {
      getExercisePlan({
        preferences: {
          equipment: equipment,
          body_parts: bodypart,
          target_muscles: targetMuscles,
          days,
          workoutTime,
        },
      });
      closeModal();
      navigate("/generate-exercise-plan/#exercise-plan");
    }
    else{
      toast.error("All the fields are required.!!!")
    }
    
  };

  return (
    <div style={{ display: "grid" }}>
      <FormControl required sx={{ m: 1, minWidth: 120 }} label="Training Days">
        <InputLabel id="days">Training Days</InputLabel>
        <Select
          labelId="days"
          id="days"
          multiple
          value={days}
          onChange={(e) =>
            setDays(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
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

      <FormControl sx={{ m: 1, minWidth: 120 }} required>
        <InputLabel id="demo-simple-select-helper-label">Equipment</InputLabel>
        <Select
          labelId="equipment"
          id="equipment"
          value={equipment}
          label="Equipment"
          onChange={(e) => setEquipment(e.target.value)}
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
        <InputLabel id="bodypart">BodyPart</InputLabel>
        <Select
          labelId="bodypart"
          id="bodypart"
          value={bodypart}
          label="BodyPart"
          onChange={(e) => setBodypart(e.target.value)}
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
        <InputLabel id="target-muscles">Target Muscles</InputLabel>
        <Select
          labelId="target-muscles"
          id="target-muscles"
          value={targetMuscles}
          label="Target Muscles"
          onChange={(e) => setTargetMuscles(e.target.value)}
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
        <InputLabel id="time">Workout Duration</InputLabel>
        <Select
          labelId="time"
          id="time"
          value={workoutTime}
          label="time"
          onChange={(e) => setWorkoutTime(e.target.value)}
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

import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

// const CUISINE = ["Asian", "Indian", "Thai", "American", "Italian", "Chinese"];

const MealPreferenceForm = ({ closeModal, setPreference }) => {
  const user = useSelector((state)=>state.userProfile.user)
  const [gender, setGender] = useState(
    user.gender == "M" ? "male" : "female"
  );
  const [goal, setGoal] = useState();
  const [diet, setDiet] = useState();
  // const [cuisine, setCuisine] = useState("");
  const [weight, setWeight] = useState(user.weight);
  const [height, setHeight] = useState(user.height);
  const [age, setAge] = useState(user.age);


  const handleGender = (event) => setGender(event.target.value);
  const handleGoal = (event) => setGoal(event.target.value);
  const handleDiet = (event) => setDiet(event.target.value);
  // const handleCuisine = (event) => setCuisine(event.target.value);

  const calcBMR = (weight, height, age, gender) => {
    let s;

    gender == "male" ? (s = 5) : (s = -161);

    return 10 * weight + 6.25 * height - 5 * age + s;
  };

  const generatePlan = () => {
    if (gender && goal && diet && weight && height && age) {
      const BMR = calcBMR(weight, height, age, gender);
      let calories = BMR;
      if (goal == "maintain") {
        calories = BMR * 1.25;
      } else if (goal == "weight gain") {
        calories = BMR * 1.75;
      }
      setPreference({ diet, calories });
      closeModal();
    } else {
      toast.error("All the fields are required.");
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={gender}
          label="Gender"
          onChange={handleGender}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
        <FormHelperText>Select a Equipment </FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, width: 150 }} variant="outlined">
        <OutlinedInput
          id="age"
          endAdornment={<InputAdornment position="end">years</InputAdornment>}
          aria-describedby="Age"
          inputProps={{
            "aria-label": "Age",
          }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <FormHelperText id="Age">Age</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, width: 150 }} variant="outlined">
        <OutlinedInput
          id="weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="Weight"
          inputProps={{
            "aria-label": "Weight",
          }}
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
        <FormHelperText id="Weight">Weight</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} variant="outlined">
        <OutlinedInput
          id="height"
          endAdornment={<InputAdornment position="end">cm</InputAdornment>}
          aria-describedby="Height"
          inputProps={{
            "aria-label": "Height",
          }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <FormHelperText id="height">Height</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Goal</InputLabel>
        <Select
          labelId="goal"
          id="goal"
          value={goal}
          label="Goal"
          onChange={handleGoal}
        >
          <MenuItem value={"weight loss"}>Weight Loss</MenuItem>
          <MenuItem value={"maintain"}>Maintain</MenuItem>
          <MenuItem value={"weight gain"}>Weight Gain</MenuItem>
        </Select>
        <FormHelperText>Select Your Goal</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Diet</InputLabel>
        <Select
          labelId="Diet"
          id="diet"
          value={diet}
          label="Diet"
          onChange={handleDiet}
        >
          <MenuItem value={"vegetarian"}>Vegetarian</MenuItem>
          <MenuItem value={"Paleo"}>Paleo</MenuItem>
          <MenuItem value={"Ketogenic"}>Ketogenic</MenuItem>
        </Select>
        <FormHelperText>Your Diet Type </FormHelperText>
      </FormControl>

      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Cuisine</InputLabel>
        <Select
          labelId="Cuisine"
          id="cuisine"
          value={cuisine}
          label="cuisine"
          onChange={handleCuisine}
        >
          {CUISINE.map((cuisine, i) => (
            <MenuItem value={cuisine} key={i}>
              {cuisine}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Your Diet Type </FormHelperText>
      </FormControl> */}
      <br></br>
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

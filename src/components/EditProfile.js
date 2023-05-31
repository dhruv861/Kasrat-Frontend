import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const EditProfile = ({ userDetails }) => {
  const [gender, setGender] = useState(
    userDetails.gender == "M" ? "Male" : "Female"
  );
  const [weight, setWeight] = useState(userDetails.weight);
  const [height, setHeight] = useState(userDetails.height);
  const [age, setAge] = useState(userDetails.age);

  const handleEdit = () => {};

  return (
    <div>
      <TextField
        sx={{ m: 1, width: 250 }}
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        value={userDetails.name}
      ></TextField>
      <TextField
        sx={{ m: 1, width: 250 }}
        id="email"
        label="Email"
        defaultValue={userDetails.email}
        InputProps={{
          readOnly: true,
        }}
      />
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={gender}
          label="Gender"
          onChange={(event) => setGender(event.target.value)}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
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
        onClick={handleEdit}
      >
        Edit Profile
      </Button>
    </div>
  );
};

export default EditProfile;

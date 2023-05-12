/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
// import styles from "./exercisecard.module.css";
// import { userContext } from "../utils/Context";

const ExerciseCard = ({ exercise }) => {
  // const ctx = useContext(userContext);
  // console.log(ctx.user);

  return (
    <div className="exercise-card">
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Link>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "darksalmon",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          Favourites
        </Button>
      </Stack>
    </div>
  );
};

export default ExerciseCard;

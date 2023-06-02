import React from "react";
import { Typography, Box } from "@mui/material";
import Loader from "../Loader";
import HorizontalScrollBarNew from "./HorizontalScrollBarNew";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar&nbsp;
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle&nbsp;
        </span>
        exercises
      </Typography>
      <Box sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <>
            <div className="outerscroll">
              <HorizontalScrollBarNew items={targetMuscleExercises} />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </Box>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar&nbsp;
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment&nbsp;
        </span>
        exercises&nbsp;
      </Typography>
      <Box sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollBarNew items={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default SimilarExercises;

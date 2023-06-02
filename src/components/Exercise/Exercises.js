import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { setExercises } from "../../store/ExerciseSlice";
import { useGetExercisesQuery,useFilterExerciseByBodyPartQuery } from "../../store/api/exerciseApi";

const Exercises = ({ bodyPart }) => {
  // eslint-disable-next-line no-undef
  // const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const exercises = useSelector((state) => state.exercise.exercises);
  const dispatch = useDispatch();
  const getExerciseData = useGetExercisesQuery();
  const getExerciseByBodyPartData = useFilterExerciseByBodyPartQuery(bodyPart);
  
  
 if (document.getElementById("exercises")){
  document.getElementById("exercises").scrollIntoView(true,{behaviour:"smooth"})
 }
   useEffect(() => {
     const fetchExercisesData = async () => {
       let exercisesData = [];

       if (bodyPart === "all") {
         // console.log("inside all");
        //  const res = await fetch(`${BASE_URL}/exercises/`);
        //  exercisesData = await res.json();
          exercisesData=getExerciseData.data
       } else if (bodyPart) {
         console.log("inside else");
        //  const res = await fetch(
        //    `${BASE_URL}/exercises/filter/?bodyPart=${bodyPart}`
        //  );
        //  exercisesData = await res.json();
        exercisesData = getExerciseByBodyPartData.data;
       } else {
         exercisesData = [];
       }
       console.log("excersises", exercisesData);

       dispatch(setExercises(exercisesData));
     };

     fetchExercisesData();
   }, [bodyPart,getExerciseByBodyPartData.data,getExerciseData.data]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  console.log(exercises);

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (exercises.length === 0) {
    return;
  }

  if (!currentExercises.length) {
    return <Loader />;
  }

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

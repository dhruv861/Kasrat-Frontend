import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { setBodyParts, setExercises } from "../../store/ExerciseSlice";
import { useDispatch, useSelector } from "react-redux";
import HorizontalScrollBarNew from "./HorizontalScrollBarNew";
import {
  useGetExercisesQuery,
  useGetBodyPartsQuery,
} from "../../store/api/exerciseApi";

const SearchExercises = ({ bodyPart, setBodyPart }) => {
  const dispatch = useDispatch();
  const getExerciseData = useGetExercisesQuery();
  const getBodyParts = useGetBodyPartsQuery();
  const [search, setSearch] = useState("");
  // const exercise = useSelector((state) => state.exercise.exercises);
  // const [bodyPart, setBodyPart] = useState("");
  const bodyParts = useSelector((state) => state.exercise.bodyParts);

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      if (getBodyParts.isSuccess) {
        dispatch(setBodyParts(["all", ...getBodyParts.data]));
      }
    };
    fetchBodyPartsData();
  }, [getBodyParts.data]);
  const handleSearch = async () => {
    if (search) {
      console.log(search);
      console.log("----->>", getExerciseData.data);
      const searchedExercises = getExerciseData.data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 900, left: 100, behavior: "smooth" });

      setSearch("");
      console.log(searchedExercises);
      dispatch(setExercises(searchedExercises));
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBarNew
          items={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          bodyParts={bodyParts}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

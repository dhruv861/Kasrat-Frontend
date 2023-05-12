import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchExercises from "../components/Exercise/SearchExercises";
import Exercises from "../components/Exercise/Exercises";
import Footer from "../components/Footer";

const ExpolreExercises = () => {
  const [bodyPart, setBodyPart] = useState("");
  useEffect(() => {}, [bodyPart]);
  return (
    <Box>
      <Navbar />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises bodyPart={bodyPart} />
      <Footer />
    </Box>
  );
};

export default ExpolreExercises;

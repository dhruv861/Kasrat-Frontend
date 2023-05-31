import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import NewNavbar from "../components/NewNavbar";
import SearchExercises from "../components/Exercise/SearchExercises";
import Exercises from "../components/Exercise/Exercises";
import Footer from "../components/Footer";

const ExpolreExercises = () => {
  const [bodyPart, setBodyPart] = useState("");
  useEffect(() => {}, [bodyPart]);
  return (
    <Box>
      <NewNavbar />
      <section id="search" style={{marginTop:"5%"}} >
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises bodyPart={bodyPart} />
      <Footer />
      </section>
    </Box>
  );
};

export default ExpolreExercises;

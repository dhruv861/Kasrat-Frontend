/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Exercise/Detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import {
  useFilterExerciseByTargetQuery,
  useFilterExercisebyEquipmentQuery,
  useGetExerciseByIdQuery,
} from "../store/api/exerciseApi";
import ExerciseVideos from "../components/Exercise/ExerciseVideos";
import SimilarExercises from "../components/Exercise/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  const exerciseDetailData = useGetExerciseByIdQuery(id);
  console.log(exerciseDetailData.data);

  const targetMuscleExercisesData = useFilterExerciseByTargetQuery(
    exerciseDetailData.data?.target
  );

  const equimentExercisesData = useFilterExercisebyEquipmentQuery(
    exerciseDetailData.data?.equipment
  );

  // eslint-disable-next-line no-undef
  // const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;
  const youtubeOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "269707a94fmsh590cf482efce22fp16cd02jsn829a8cac3e28",
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("TARGET", targetMuscleExercisesData.data);
    console.log("EQUIPMENT", equimentExercisesData.data);

    setExerciseDetail(exerciseDetailData.data);

    // setTargetMuscleExercises(targetMuscleExercisesData.data);

    // setEquipmentExercises(equimentExercisesData.data);

    const fetchVideosData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const resVideo = await fetch(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.data?.name} exercise`,
        youtubeOptions
      );
      const exerciseVideosData = await resVideo.json();
      setExerciseVideos(exerciseVideosData.contents);
    };
    if (exerciseDetailData.data) {
      fetchVideosData();
    }
  }, [
    id,
    exerciseDetailData.data,
    targetMuscleExercisesData.data,
    equimentExercisesData.data,
  ]);

  if (!exerciseDetail) {
    return <div>No Data</div>;
  }

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Navbar />
      {!exerciseDetailData.isSuccess &&
        !equimentExercisesData.isSuccess &&
        !targetMuscleExercisesData.isSuccess && <Loader />}

      {exerciseDetailData.isSuccess &&
        targetMuscleExercisesData.isSuccess &&
        equimentExercisesData.isSuccess && (
          <>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
              exerciseVideos={exerciseVideos}
              name={exerciseDetail.name}
            />
            <SimilarExercises
              targetMuscleExercises={targetMuscleExercisesData.data}
              equipmentExercises={equimentExercisesData.data}
            />
          </>
        )}
      <Footer />
    </Box>
  );
};

export default ExerciseDetail;

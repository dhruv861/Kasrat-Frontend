/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Detail from "../components/Exercise/Detail";
import NewNavbar from "../components/NewNavbar";
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
      "X-RapidAPI-Key":process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host":process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    <>
      <NewNavbar />
      <Box style={{marginTop:"5.5%"}}>
        {/* {exerciseDetailData.isLoading &&
        equimentExercisesData.isLoading &&
      targetMuscleExercisesData.isLoading && <Loader />} */}

        {exerciseDetailData.isSuccess ? (
          <Detail exerciseDetail={exerciseDetail} />
        ) : (
          <Loader />
        )}
        {exerciseVideos ? (
          <ExerciseVideos
            exerciseVideos={exerciseVideos}
            name={exerciseDetail.name}
          />
        ) : (
          <Loader />
        )}

        {targetMuscleExercisesData.isSuccess &&
          equimentExercisesData.isSuccess && (
            <SimilarExercises
              targetMuscleExercises={targetMuscleExercisesData.data}
              equipmentExercises={equimentExercisesData.data}
            />
          )}
        
      </Box>
    </>
  );
};

export default ExerciseDetail;

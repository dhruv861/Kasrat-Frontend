/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { userApi } from "../../store/api/userApi";
import { useDispatch } from "react-redux";

const ExerciseCard = ({ exercise }) => {
  const user = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();
  const fav = user?.favourites.some((fav) => fav.id == exercise.id);

  return (
    <div className="exercise-card" onClick={() => window.scrollTo({ top: 0 })}>
      <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "20px", xs: "16px" } }}
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
            "&:hover": {
              background: "#FFA9A9",
              color: "#fff",
            },
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
            "&:hover": {
              background: "#FCC757",
              color: "#fff",
            },
          }}
        >
          {exercise.target}
        </Button>
        {fav ? (
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "darksalmon",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                background: "#fff",
                color: "darksalmon",
              },
            }}
            onClick={() =>
              dispatch(
                userApi.endpoints.toggleFav.initiate({
                  action: "remove",
                  exId: exercise.id,
                })
              )
            }
          >
            Remove from Favourites
          </Button>
        ) : (
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "darksalmon",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
              "&:hover": {
                background: "#fff",
                color: "darksalmon",
              },
            }}
            onClick={() =>
              dispatch(
                userApi.endpoints.toggleFav.initiate({
                  action: "add",
                  exId: exercise.id,
                })
              )
            }
          >
            Add to Favourites
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default ExerciseCard;

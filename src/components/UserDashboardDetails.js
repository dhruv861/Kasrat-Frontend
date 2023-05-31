import { Box, Typography } from '@mui/material';
import React from 'react'
import HorizontalScrollBarNew from "./Exercise/HorizontalScrollBarNew";
import ExercisePlan from "./Exercise/ExercisePlan"
import Loader from './Loader';

const UserDashboardDetails = ({favourites,exerciseplan}) => {

    console.log(favourites,exerciseplan)
  return (
    <>
      <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
          fontWeight={700}
          color="#000"
          mb="33px"
        >
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            Favourite
          </span>
          Exercises
        </Typography>
        <Box sx={{ p: 2, position: "relative" }}>
          {favourites.length !== 0 ? (
            <>
              <div className="outerscroll">
                <HorizontalScrollBarNew items={favourites} />
              </div>
            </>
          ) : (
            <Loader />
          )}
        </Box>
      </Box>
      <ExercisePlan
        plan={exerciseplan}
        days={Object.keys(exerciseplan)}
      />
    </>
  );
}

export default UserDashboardDetails
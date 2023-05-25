import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import { useGetRecipeInformationQuery } from "../store/api/mealPlanApi";

const MealCard = ({ meal }) => {
    const info = useGetRecipeInformationQuery(meal.id)    
    console.log(meal);
    useEffect(() => {
        console.log(info.data);
    },[info])
  return (
    <div className="exercise-card">
      <Link to={info.data?.spoonacularSourceUrl}>
        <img src={info.data?.image} alt={meal.title} loading="lazy" />
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "20px", xs: "16px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {meal.title}
        </Typography>
      </Link>
      <Stack direction="row">
        {/* <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {meal.nutrients.calories}
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
          {meal.nutrients.protein}
        </Button> */}
      </Stack>
    </div>
  );
};

export default MealCard;

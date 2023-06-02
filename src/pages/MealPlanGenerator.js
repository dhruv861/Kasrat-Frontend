import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import NewNavbar from "../components/NewNavbar";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import MealPlanImage from "../assets/images/amoon-ra-n8vDuIpGb0c-unsplash-removebg-preview.png";
import { useGetMealPlanQuery } from "../store/api/mealPlanApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

import MealPreferenceForm from "../components/Meal/MealPreferenceForm";
import MealPlan from "../components/Meal/MealPlan";
import { toast } from "react-hot-toast";
import { userApi } from "../store/api/userApi";
import { useDispatch } from "react-redux";

const MealPlanGenerator = () => {
  const [open, setOpen] = React.useState(false);
  const [preference, setPreference] = React.useState(skipToken);
  const [plan, setPlan] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const result = useGetMealPlanQuery(preference);
  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      console.log("MEAL PLAN", result.data?.week);
      setPlan(result.data.week);
    }
    console.log("", preference);
  }, [preference, result]);

  return (
    <>
      <NewNavbar />
      <Box
        sx={{
          mt: { lg: "70px", xs: "30px" },
          ml: { sm: "50px" },
          mr: { lg: "70px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="800" fontSize="34px">
          Generate Meal Plan
        </Typography>
        <Typography
          fontWeight={600}
          sx={{ fontSize: { lg: "26px", xs: "20px" }, width: "50%" }}
          mb="23px"
          mt="30px"
        >
          Elevate Your Meals, <br />
          Elevate Your Life!
        </Typography>
        <div className="checkout">
          <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            Unlock precise meal planning with our innovative platform. Using the
            BMR Calculator, we create personalized week-long meal plans based on
            your exact calorie needs. Enjoy delicious recipes and balanced
            nutrients, effortlessly reaching your health goals. Take control,
            elevate your habits, and transform your lifestyle with our intuitive
            meal planner.
          </Typography>
        </div>
        <Stack>
          <Button
            onClick={handleOpen}
            style={{
              marginTop: "45px",
              textDecoration: "none",
              width: "200px",
              textAlign: "center",
              background: "#FF2625",
              padding: "14px",
              fontSize: "22px",
              textTransform: "none",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Generate Now
          </Button>
        </Stack>
        <img
          src={MealPlanImage}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div style={{ overflow: "hidden", overflowY: "scroll" }}>
            <Box
              sx={{
                overflow: "hidden",
                overflowY: "scroll",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 600,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography
                style={{ textAlign: "center", marginBottom: "10px" }}
                id="Preference"
                variant="h5"
                component="h2"
              >
                Preferences
              </Typography>
              <MealPreferenceForm
                setPreference={setPreference}
                closeModal={handleClose}
              />
            </Box>
          </div>
        </Fade>
      </Modal>
      {plan && (
        <>
          <MealPlan plan={plan} />
          <Button
            style={{
              marginTop: "45px",
              textDecoration: "none",
              width: "200px",
              textAlign: "center",
              background: "#FF2625",
              padding: "14px",
              fontSize: "22px",
              textTransform: "none",
              color: "white",
              borderRadius: "4px",
              justifySelf: "self-end",
              marginLeft: "80%",
              marginBottom: "5%",
            }}
            onClick={() => {
              dispatch(
                userApi.endpoints.savePlan.initiate({
                  plan: plan,
                  plan_type: "meal",
                })
              );
              toast.success("Meal Plan Saved");
            }}
          >
            Save The Plan
          </Button>
        </>
      )}
    </>
  );
};

export default MealPlanGenerator;

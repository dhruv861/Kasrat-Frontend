import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExercisePlanBanner from "../assets/images/exercise-plan-banner.jpg";
import NewNavbar from "../components/NewNavbar";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import PreferenceForm from "../components/PreferenceForm";
import { useGetExercisePlanMutation } from "../store/api/exerciseApi";
import ExercisePlan from "../components/Exercise/ExercisePlan";
import { userApi } from "../store/api/userApi";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";


const ExercisePlanGenerator = () => {
  const [open, setOpen] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false);
  // const [plan, setPlan] = React.useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const [getExercisePlan, { isLoading, isSuccess, data, error, isError }] =
    useGetExercisePlanMutation();
 

  const onUnload = (e) => {
    e.preventDefault();
    if (data && isSuccess && !isSave) {
      return (e.returnValue = "Are You Sure ?");
    } else {
      return (e.returnValue = "");
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);

    if (isLoading) {
      console.log("loading.....");
    }
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);
  return (
    <>
      <NewNavbar />
      <section id="#generate" style={{ marginTop: "10%" }}>
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
            Generate Exercise Plan
          </Typography>
          <Typography
            fontWeight={600}
            sx={{ fontSize: { lg: "26px", xs: "20px" }, width: "50%" }}
            mb="23px"
            mt="30px"
          >
            Elevate Your Workout <br />
            Tailored Exercise Plans at Your Fingertips
          </Typography>
          <div className="checkout">
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
              Create your personalized exercise plan with the Exercise Plan
              Generator. Select your equipment, target body parts, and desired
              muscles, and let the algorithm generate a customized weekly
              workout plan just for you. Achieve your fitness goals effectively
              and stay motivated with a tailored exercise plan that suits your
              preferences and needs.
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
            src={ExercisePlanBanner}
            alt="hero-banner"
            className="hero-banner-img"
          />
        </Box>
        <Modal
          aria-labelledby="Exercise-Plan-Preference"
          aria-describedby="Exercise Preferences"
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
                <PreferenceForm
                  getExercisePlan={getExercisePlan}
                  closeModal={handleClose}
                />
              </Box>
            </div>
          </Fade>
        </Modal>
      </section>
      <section id="exercise-plan">
        {isSuccess && data && (
          <>
            <ExercisePlan plan={data} days={Object.keys(data)} />
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
                    plan: data,
                    plan_type: "exercise",
                  })
                );
                  toast.success("Exercise Plan Saved")
                setIsSave(true);
              }}
              
            >
              Save The Plan
            </Button>
          </>
        )}
      </section>
    </>
  );
};

export default ExercisePlanGenerator;

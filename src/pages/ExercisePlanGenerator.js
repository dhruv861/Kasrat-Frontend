// import React from "react";
// import Navbar from "../components/Navbar";

// const ExercisePlanGenerator = () => {
//   return (
//     <>
//       <Navbar />
//       <section style={{width:"90%",height:"90%"}}>
//         <h3 className="section-heading">Generate Exercise Plan</h3>
//         <div className="wrapper">
//         <div className="preferenceForm">
//             <form>

//             </form>
//         </div>
//         <div className="refimg">
//             image
//         </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ExercisePlanGenerator;

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import { userContext } from "../utils/Context";
import ExercisePlanBanner from "../assets/images/exercise-plan-banner.jpg";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import PreferenceForm from "../components/PreferenceForm";
// import Typography from "@mui/material/Typography";


const ExercisePlanGenerator = () => {
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar />
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
            muscles, and let the algorithm generate a customized weekly workout
            plan just for you. Achieve your fitness goals effectively and stay
            motivated with a tailored exercise plan that suits your preferences
            and needs.
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
          <Box
            sx={{
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
            <Typography style={{textAlign:"center",marginBottom:"10px"}} id="Preference" variant="h5" component="h2">
              Preferences
            </Typography>
            <PreferenceForm/>
          </Box>
        </Fade>
      </Modal>
      {/* <section id="preferenceForm">
        <h3 className="section-heading">Generate Exercise Plan</h3>

        <div className="wrapper">
          <div className="preferenceForm">
            <form>BodyPart target muscles</form>
          </div>
          <div className="refimg">image</div>
        </div>
      </section> */}
    </>
  );
};

export default ExercisePlanGenerator;

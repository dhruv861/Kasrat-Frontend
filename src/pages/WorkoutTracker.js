import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import bicepcurlsImg from "../assets/images/bicepcurls.png";
import squatImg from "../assets/images/squats.png"
import pushupImg from "../assets/images/pushup.png"
import cruncesImg from "../assets/images/crunches.png"
import workoutPoseImg from "../assets/images/workoutBanner.png"

const WorkoutTracker = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          mt: { lg: "20px", xs: "10px" },
          ml: { sm: "50px" },
          mr: { lg: "70px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="29px">
          WorkoutRight
        </Typography>
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          mb="23px"
          mt="30px"
        >
          Perfecting Your Form, Maximizing Your Gains <br />
          Achieve Your Fitness Goals <br />
          with Precision and Efficiency
        </Typography>
        <div className="checkout">
          <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            Welcome to Workout Tracker, the ultimate tool for optimizing your
            workouts. Harnessing the power of cutting-edge pose detection
            technology, our platform helps you master your exercise form and
            maximize your gains. Whether you are a gym enthusiast, a home
            workout enthusiast, or a fitness professional, our platform empowers
            you to achieve your goals, make progress, and unleash your full
            potential. Elevate your fitness journey and unlock your full
            potential with Workout Tracker.
          </Typography>
        </div>

        <Typography
          fontWeight={600}
          color="#FF2625"
          sx={{
            opacity: "0.1",
            fontSize: "150px",
          }}
        >
          Track It
        </Typography>
        <img
          src={workoutPoseImg}
          alt="hero-banner"
          className="hero-banner-img"
        />
      </Box>
      <Box sx={{ flexGrow: 1, padding: "0 5.5%" }}>
        <Grid container spacing={2} style={{ padding: "1% 10%", margin: "5%" }}>
          <Grid
            item
            xs={6}
            style={{ paddingBottom: "5%" }}
            onClick={() => navigate("/track-workout/bicepCurls")}
          >
            <Card
              sx={{
                maxWidth: 345,
                ":hover": {
                  boxShadow: "10",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={bicepcurlsImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bicep Curls
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            style={{ paddingBottom: "5%" }}
            onClick={() => navigate("/track-workout/squats")}
          >
            <Card
              sx={{
                maxWidth: 345,
                ":hover": {
                  boxShadow: "10",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={squatImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Squats
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid
            item
            xs={6}
            style={{ paddingBottom: "5%" }}
            onClick={() => navigate("/track-workout/pushups")}
          >
            <Card
              sx={{
                maxWidth: 345,
                ":hover": {
                  boxShadow: "10",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={pushupImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pushups
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ paddingBottom: "5%" }}
            onClick={() => navigate("/track-workout/crunches")}
          >
            <Card
              sx={{
                maxWidth: 345,
                ":hover": {
                  boxShadow: "10",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={cruncesImg}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Crunches
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WorkoutTracker;

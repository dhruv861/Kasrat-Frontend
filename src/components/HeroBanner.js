import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import { userContext } from "../utils/Context";
import HeroBannerImage from "../assets/images/banner.png";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "70px", xs: "30px" },
        ml: { sm: "50px" },
        mr: { lg: "70px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <div className="checkout">
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
      </div>
      <Stack>
        <Link
          to={"search-exercises"}
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
          Explore Exercises
        </Link>
        <Link
          to={"/workshops"}
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
          Explore Workshops
        </Link>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",

          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;

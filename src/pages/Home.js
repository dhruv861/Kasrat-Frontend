import React from 'react'
import { Box } from "@mui/material";
import HeroBanner from '../components/HeroBanner';
import NewNavbar from "../components/NewNavbar";


export const Home = () => {
  return (
    <Box>
      <NewNavbar />
      <HeroBanner />
      {/* <Footer /> */}
    </Box>
  );
}

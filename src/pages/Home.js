import React from 'react'
import { Box } from "@mui/material";
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';


export const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      {/* <Footer /> */}
    </Box>
  );
}

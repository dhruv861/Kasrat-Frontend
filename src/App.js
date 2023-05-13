import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ExpolreExercises from "./pages/ExpolreExercises";
import ProtectedtRoutes from "./components/ProtectedtRoutes";
import ExerciseDetail from "./pages/ExerciseDetail";
import Workshops from "./pages/Workshops";
import VideoWorkshop from "./pages/VideoWorkshop";

function App() {
  // window.localStorage.setItem("access", "");
  // window.localStorage.setItem("refresh", "");
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/exercise/:id"
          element={
            <ProtectedtRoutes>
              <ExerciseDetail />
            </ProtectedtRoutes>
          }
        />
        <Route
            path="/workshops"
            element={
              <ProtectedtRoutes>
                <Workshops />
              </ProtectedtRoutes>
            }
          />
          <Route
            path="/videoapp/:roomId"
            element={
              <ProtectedtRoutes>
                <VideoWorkshop />
              </ProtectedtRoutes>
            }
          />

          
        <Route
          path="/search-exercises"
          element={
            <ProtectedtRoutes>
              <ExpolreExercises />
            </ProtectedtRoutes>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;

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
import ExercisePlanGenerator from "./pages/ExercisePlanGenerator";
import MealPlanGenerator from "./pages/MealPlanGenerator";
import WorkoutCounter from "./components/WorkoutTracker/workoutCounter";
// import NewLogin from "./pages/NewLogin";
import UserDashboard from "./pages/UserDashboard";
import WorkoutTracker from "./pages/WorkoutTracker";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";

function App() {
  // window.localStorage.setItem("access", "");
  // window.localStorage.setItem("refresh", "");
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <div>
        <Toaster
          toastOptions={{
            className: "",
            duration: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route
          path="/generate-exercise-plan"
          element={<ExercisePlanGenerator />}
        />
        <Route path="/generate-meal-plan" element={<MealPlanGenerator />} />
        <Route path="/workout" element={<WorkoutTracker />} />
        <Route path="/track-workout/:exercise" element={<WorkoutCounter />} />
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
          path="/virtual-training/:name/:roomId"
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

import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NewNavbar from "../components/NewNavbar";
import {
  useGoogleAuthMutation,
  useRegisterUserMutation,
} from "../store/api/authApi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6766",
      darker: "#ff6766",
    },
    secondary: {
      main: "#ff6766",
      darker: "#ff6766",
    },
  },
});

export default function SignUp() {
  const [registerUser, { isLoading, isSuccess, data, error, isError }] =
    useRegisterUserMutation();
  const [
    googleLogin,
    { isSuccess: googleAuthIsSuccess, data: googleAuthdata },
  ] = useGoogleAuthMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (googleAuthIsSuccess) {
      console.log(googleAuthdata);
      window.localStorage.setItem("access", googleAuthdata.tokens.access);
      window.localStorage.setItem("refresh", googleAuthdata.tokens.refresh);
      navigate("/");
    }
    if (isSuccess) {
      //   toast.success('User registered successfully');
      //   navigate('/verifyemail');
      console.log("LOGIN SUCCESFULL", data, "state");
      window.localStorage.setItem("access", data.token.access);
      window.localStorage.setItem("refresh", data.token.refresh);
      navigate("/");
    }

    if (isError) {
      console.log(error);
    }
  }, [isLoading, googleAuthdata]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("confirmPassword"),
    });
    registerUser({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("confirmPassword"),
    });

    data.delete("name");
    data.delete("email");
    data.delete("password");
    data.delete("confirmPassword");
  };

  return (
    <ThemeProvider theme={theme}>
      <NewNavbar />
      <Container
        component="main"
        maxWidth="xs"
        style={{ paddingTop: "1%", marginTop: "1%" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "FF2625" }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  autoComplete="confirm-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#FF2625",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#FF2625",
                },
              }}
            >
              Sign Up
            </Button>
            <div style={{ textAlign: "center", fontSize: "13px" }}>or</div>
            <Box style={{ padding: "0 18%", margin: "5% 0" }}>
              <GoogleLogin
                onSuccess={(res) => googleLogin(res.credential)}
                onError={(err) => console.log("GOOOO", err)}
              />
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

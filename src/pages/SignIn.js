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
import { useLoginUserMutation } from "../store/api/authApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { toast } from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleAuthMutation } from "../store/api/authApi";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6766",
      darker: "#053e85",
    },
  },
});

export default function SignIn() {
  const [loginUser, { isLoading, isSuccess, data, error, isError }] =
    useLoginUserMutation();
  const [
    googleLogin,
    { isSuccess: googleAuthIsSuccess, data: googleAuthdata },
  ] = useGoogleAuthMutation();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (googleAuthIsSuccess) {
      window.localStorage.setItem("access", googleAuthdata.tokens.access);
      window.localStorage.setItem("refresh", googleAuthdata.tokens.refresh);
      navigate("/");
    }
    if (isSuccess) {
      window.localStorage.setItem("access", data.token.access);
      window.localStorage.setItem("refresh", data.token.refresh);
      toast.success("You're Logged In Succesfully");
      navigate("/");
    }
    if (isError) {
      toast.error(...error.data.errors.non_field_errors);
    }
  }, [isLoading, user, googleAuthdata]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    loginUser({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <NewNavbar />
      <Container
        component="main"
        maxWidth="xs"
        style={{ paddingTop: "4%", marginTop: "2%" }}
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
          <Avatar sx={{ m: 1, bgcolor: "FF2625`" }}>
            <FitnessCenterIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant=""
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
              Sign In
            </Button>
            <div style={{ textAlign: "center", fontSize: "13px" }}>or</div>

            <Box style={{ padding: "0 18%", margin: "5% 0" }}>
              <GoogleLogin
                onSuccess={(res) => googleLogin(res.credential)}
                onError={(err) => console.log("GOOOO", err)}
              />
            </Box>
            <Grid container>
              <Grid item>
                <Link to={"/signup"}>
                  <p style={{ color: "#FF2625", fontSize: "14px" }}>
                    Dont have an account? Sign Up
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

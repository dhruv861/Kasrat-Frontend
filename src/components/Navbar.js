import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Chip, Avatar, Popover } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useSelector } from "react-redux";
import { logout } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { userApi } from "../store/api/userApi";

const Navbar = () => {
  const user = useSelector((state) => state.userProfile.user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (
      window.localStorage.getItem("access") &&
      window.localStorage.getItem("refresh") &&
      !user
    ) {
      dispatch(userApi.endpoints.getUserDetails.initiate(null));
    }
  }, [user]);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0px 20px" }}
          />
        </Link>
        <Stack
          direction="row"
          gap="40px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          {user ? (
            <>
              <Chip
                avatar={
                  <Avatar>
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                  </Avatar>
                }
                label={user && user.name}
                onClick={(event) => setAnchorEl(event.currentTarget)}
              />
              <Button
                onClick={() => {
                  dispatch(logout());
                }}
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  borderBottom: "3px solid #FF2625",
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  borderBottom: "3px solid #FF2625",
                }}
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  borderBottom: "3px solid #FF2625",
                }}
              >
                Sign In
              </Link>

              {/* <a
                           href="#exercises"
                           style={{ textDecoration: "none", color: "#3A1212" }}
                         >
                           Exercises
                         </a> */}
            </>
          )}
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Button
              onClick={() => {
                dispatch(logout());
                setAnchorEl(null);
              }}
              style={{
                color: "#3A1212",
              }}
            >
              Log Out
            </Button>
          </Popover>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;

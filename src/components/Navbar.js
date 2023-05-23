import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Chip, Avatar } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useSelector } from "react-redux";
import { logout } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { userApi } from "../store/api/userApi";

const Navbar = () => {

  const user = useSelector((state) => state.userProfile.user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
 

  
  useEffect(() => {
    if (
      window.localStorage.getItem("access") &&
      window.localStorage.getItem("refresh") &&
      !user
    ) {
      // console.log("logged in", user);
      dispatch(userApi.endpoints.getUserDetails.initiate(null));
    }
  }, [user]);

  console.log("user", user);
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          // mt: { sm: "32px", xs: "20px" },
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
              />
              {/* <Button
                onClick={logoutHandler}
                style={{
                  textDecoration: "none",
                  color: "#3A1212",
                  borderBottom: "3px solid #FF2625",
                }}
              >
                <span className="material-symbols-outlined">account_circle</span>
                {/* {userProfile && userProfile.name} 
              </Button> */}

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

              {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                           <ProfileModal />
                         </Modal> */}
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
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;

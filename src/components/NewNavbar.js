import React, { useEffect } from "react";
import logo from "../assets/images/KasratLogo2.png";
import { useSelector } from "react-redux";
import { logout, setUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { userApi } from "../store/api/userApi";
import { Avatar, Chip, Popover, Stack } from "@mui/material";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import PlusOneIcon from "@mui/icons-material/PlusOne";

const NewNavbar = () => {
  const user = useSelector((state) => state.userProfile.user);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [featureEl, setFeatureEl] = React.useState(null);
  const openFeature = Boolean(featureEl);

  useEffect(() => {
    if (
      window.localStorage.getItem("access") &&
      window.localStorage.getItem("refresh") &&
      !user
    ) {
      // console.log("logged in", user);
      dispatch(userApi.endpoints.getUserDetails.initiate(null)).then((data) => {
        console.log("----", data);
        dispatch(setUser(data.data));
      });
      dispatch(userApi.endpoints.getPlan.initiate(null))
    }
  }, [user]);

  return (
    <section className="navbar-area navbar-nine">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img src={logo} style={{ width: "250px" }} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNine"
                aria-controls="navbarNine"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarNine"
              >
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="page-scroll active" to="/#hero-area">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="page-scroll"
                      to="/#features"
                      aria-owns={openFeature ? "mouse-over-popover" : undefined}
                      aria-haspopup="true"
                      onMouseEnter={(e) => setFeatureEl(e.currentTarget)}
                    >
                      Features
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="page-scroll" to="/#contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <Popover
                id={id}
                open={openFeature}
                anchorEl={featureEl}
                onClose={() => setFeatureEl(null)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                style={{ width: "65%" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <Link to={"/search-exercises#search"}>
                        <div className="single-services">
                          <div className="service-icon">
                            <i className="lni lni-dumbbell"></i>
                          </div>
                          <div className="service-content">
                            <h6>Extensive Exercise Library</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <Link to={"/generate-exercise-plan"}>
                        <div className="single-services">
                          <div className="service-icon">
                            <i className="lni lni-check-box"></i>
                          </div>
                          <div className="service-content">
                            <h6>Personalized Workout Plans</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <Link to={"/generate-meal-plan"}>
                        <div className="single-services">
                          <div className="service-icon">
                            <i className="lni lni-dinner"></i>
                          </div>
                          <div className="service-content">
                            <h6>Meal Planning and Nutrition Support</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <Link to={"/workout"}>
                        <div className="single-services">
                          <div className="service-icon">
                            <PlusOneIcon />
                          </div>
                          <div className="service-content">
                            <h6>Innovative Rep Counter</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <Link to={"/workshops"}>
                        <div className="single-services">
                          <div className="service-icon">
                            <i className="lni lni-video"></i>
                          </div>
                          <div className="service-content">
                            <h6>Online Video Training Sessions</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <Link>
                        <div className="single-services">
                          <div className="service-icon">
                            <i className="lni lni-youtube"></i>
                          </div>
                          <div className="service-content">
                            <h6>YouTube Video Suggestions</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover>
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
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "#3A1212",
                      borderBottom: "3px solid #FF2625",
                      margin: "0 30px",
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
                      margin: "0 20px",
                    }}
                  >
                    Sign In
                  </Link>
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
                PaperProps={{
                  style: { width: "08%",textAlign:"center" },
                }}
              >
                <Stack direction={"column"}>
                  <Link
                    to={"/userDashboard"}
                    style={{
                      color: "#3A1212",
                      padding:"5%"
                    }}
                  >
                    Profile
                  </Link>
                  
                  {/* <hr /> */}
                  <Link
                    onClick={() => {
                      dispatch(logout());
                      setAnchorEl(null);
                    }}
                    style={{
                      color: "#3A1212",
                      padding:"5%"
                    }}
                  >
                    Log Out
                  </Link>
                </Stack>
              </Popover>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewNavbar;

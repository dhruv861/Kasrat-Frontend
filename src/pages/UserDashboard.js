import React, { useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import styles from "../assets/styles/dashboard.module.css";
import { useSelector, useDispatch } from "react-redux";
import UserDashboardDetails from "../components/UserDashboardDetails";
import { userApi } from "../store/api/userApi";
import { Box, Fade, Typography } from "@mui/material";
import userImg from "../assets/images/user.jpg";
// import { Modal ,Backdrop} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import EditProfile from "../components/EditProfile";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.userProfile);
  dispatch(userApi.endpoints.getPlan.initiate());
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <NewNavbar />
      <div className={styles["dash-container"]}>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
          fontWeight={700}
          color="#000"
          mb="10px"
        >
          <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
            Personal
          </span>
          Information
        </Typography>

        <div className={styles["dash-header"]}>
          <div className={styles["user-image"]}>
            <img
              src={userImg}
              style={{ height: "250px", borderRadius: "15px 50px" }}
            ></img>
          </div>
          <div className={styles["user-details"]}>
            <p> Name: {user?.user?.name}</p>
            <p> Email: {user?.user?.email}</p>
            <p> City: {user?.user?.City}</p>
            <p> Age: {user?.user?.age}</p> 
            <p> Height: {user?.user?.height}</p> 
            <p> Weight: {user?.user?.weight}</p> 

          </div>
          <button
            style={{
              height: "35px",
              width: "100px",
              marginLeft: "27%",
              marginTop: "2%",
            }}
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>
        </div>
        <Modal
          aria-labelledby="Profile"
          aria-describedby="Edit Profile"
          open={open}
          onClose={() => setOpen(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <div style={{ overflow: "hidden", overflowY: "scroll" }}>
              <Box
                sx={{
                  overflow: "hidden",
                  overflowY: "scroll",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 600,
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography
                  style={{ textAlign: "center", marginBottom: "10px" }}
                  id="Preference"
                  variant="h5"
                  component="h2"
                >
                  Edit Profile
                </Typography>
                <EditProfile userDetails={user?.user}/>
              </Box>
            </div>
          </Fade>
        </Modal>

        {user.user && user.exerciseplan && (
          <UserDashboardDetails
            favourites={user?.user?.favourites}
            exerciseplan={user?.exerciseplan}
          />
        )}
      </div>
    </>
  );
};

export default UserDashboard;

{
  /* <div className={styles["dash-header"]}>
          <div className={styles["dash-profile-pic"]}>
            <img
              className=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            ></img>
          </div>
          <div className={styles["dash-username"]}>{user?.user?.name}</div>
        </div>
        <div className={styles["dash-details"]}>
          <div style={{ display: "flex" }}>
            <div className={styles["dash-card"]}>height</div>
            <div className={styles["dash-card"]}>Weight</div>
            {user.user&&user.exerciseplan&&<UserDashboardDetails favourites={user?.user?.favourites} exerciseplan={user?.exerciseplan} />}
          </div>
        </div> */
}

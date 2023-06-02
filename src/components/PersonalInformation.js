import React from 'react'
import styles from "../assets/styles/dashboard.module.css";
import userImg from "../assets/images/user.jpg";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import EditProfile from "../components/EditProfile";
import { Box, Fade, Typography } from "@mui/material";


const PersonalInformation = ({user}) => {
  
  const [open, setOpen] = React.useState(false)
 
  return (
    <>
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
            background: "#FF2625",
            color:"white",
            borderRadius:"15px 15px"
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
              <EditProfile userDetails={user?.user} setModal={setOpen} />
            </Box>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default PersonalInformation
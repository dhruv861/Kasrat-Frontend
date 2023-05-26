import React from "react";
import Navbar from "../components/Navbar";
import styles from "./styles/dashboard.module.css";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className={styles["dash-container"]}>
        <div className={styles["dash-header"]}>
          <div className={styles["dash-profile-pic"]}>
            <img className="" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></img>
          </div>
          <div className={styles["dash-username"]}>User Name</div>
        </div>
        <div className={styles["dash-details"]}>
          <div style={{ display: "flex" }}>
            <div className={styles["dash-card"]}>height</div>
            <div className={styles["dash-card"]}>Weight</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

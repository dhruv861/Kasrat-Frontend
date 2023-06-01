import React, { useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import styles from "../assets/styles/dashboard.module.css";
import { useSelector, useDispatch } from "react-redux";
import UserDashboardDetails from "../components/UserDashboardDetails";
import { userApi } from "../store/api/userApi";
import PersonalInformation from "../components/PersonalInformation";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile);

  useEffect(() => {
    try {
      dispatch(userApi.endpoints.getPlan.initiate());
    } catch (e) {
      console.log(e);
    }
    console.log(user);
  }, [user,user.user]);

  return (
    <>
      <NewNavbar />
      <div className={styles["dash-container"]}>
        <PersonalInformation user={user} />
        {user.user?.favourites && user.plan && (
          <UserDashboardDetails
            favourites={user?.user?.favourites}
            exerciseplan={user?.plan.exercise}
          />
        )}
      </div>
    </>
  );
};

export default UserDashboard;

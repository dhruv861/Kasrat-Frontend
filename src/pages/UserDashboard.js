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
      const result = dispatch(userApi.endpoints.getPlan.initiate());
      result.unsubscribe()
    } catch (e) {
      console.log(e);
    }
    console.log(user);
  }, [user,user.user,user.plan]);

  return (
    <>
      <NewNavbar />
      <div className={styles["dash-container"]}>
        <PersonalInformation user={user} />
        {user.user?.favourites.length>0 && user.plan && (
          <UserDashboardDetails
            favourites={user?.user?.favourites}
            exerciseplan={user?.plan.exercise}
            mealplan = {user?.plan.meal}
          />
        )}
      </div>
    </>
  );
};

export default UserDashboard;

import { Button } from "@mui/material";
import React from "react";
// import { Link } from "react-router-dom";

import { useHMSActions } from "@100mslive/react-sdk";


const EnterRoom = ({ code }) => {
  const hmsActions = useHMSActions();
  console.log("EnterRoom", code);
 
  const enter = async () => {
    const userName = "Dhruv";
    const roomCode = code;
    console.log("inside", roomCode);
    const authToken = await hmsActions.getAuthTokenByRoomCode({ roomCode });

    try {
      await hmsActions.join({ userName, authToken });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button
        onClick={enter}
        style={{
          marginTop: "45px",
          textDecoration: "none",
          width: "200px",
          textAlign: "center",
          background: "#FF2625",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Enter Room
      </Button>
    </div>
  );
};

export default EnterRoom;

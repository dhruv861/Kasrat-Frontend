import React from "react";
// import styles from "./styles.modules.css";
// import JoinForm from "./JoinForm";
import Conference from "./Conference";
import { useEffect, useState } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import Header from "./Header";
import EnterRoom from "./EnterRoom";
import Footer from "./Footer";
// import DeviceSettings from "./DeviceSettings";
import { useParams } from "react-router-dom";
import { useGetRoomCodeByRoleQuery } from "../../store/api/workshopApi";
export default function VideoApp() {
  const { roomId, name } = useParams();
  const [roomCode, setRoomCode] = useState("");
  const fetchRoomCode = useGetRoomCodeByRoleQuery({ role: "guest", roomId });

  useEffect(() => {
    if (fetchRoomCode.isSuccess) {
      setRoomCode(fetchRoomCode.data.code);
    } else {
      console.log("...loadingRoomCOde");
    }
  }, [fetchRoomCode]);

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <>
      <Header />
      {isConnected ? (
        <>
          <Conference name={name} /> <Footer />
        </>
      ) : (
        <EnterRoom code={roomCode} />
      )}
    </>
  );
}

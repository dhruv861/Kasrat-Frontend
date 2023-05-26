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
import DeviceSettings from "./DeviceSettings";
import { useParams } from "react-router-dom";
import { useGetRoomCodeByRoleQuery } from "../../store/api/workshopApi";
export default function VideoApp() {
  const { roomId } = useParams();
  const [roomCode, setRoomCode] = useState("");
  const fetchRoomCode = useGetRoomCodeByRoleQuery({ role: "guest", roomId });

  useEffect(() => {
    // const fetchRoomCode = async () => {
    //   const res = await fetch(
    //     `http://127.0.0.1:8000/api/workshops/room-code/host/${roomId}`
    //   );
    //   const data = await res.json();
    //   console.log(data?.code);
    //   setRoomCOde(data?.code);
    // };
    // // fetchRoomCode();
    if (fetchRoomCode.isSuccess) {
      console.log(fetchRoomCode.data.code);
      setRoomCode(fetchRoomCode.data.code);
    }else{
      console.log("...loadingRoomCOde")
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
          <Conference /> <Footer />
          <DeviceSettings />
        </>
      ) : (
        <EnterRoom code={roomCode} />
      )}
    </>
  );
}

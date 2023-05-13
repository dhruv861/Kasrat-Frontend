import React, { useEffect, useState } from "react";
import Workshop from "../components/workshops/Workshop";
import Navbar from "../components/Navbar";
import styles from "../components/workshops/card.module.css";
import { useGetRoomsQuery } from "../store/api/workshopApi";

const Workshops = () => {
  const [rooms, setRooms] = useState([]);
  const fetchRooms = useGetRoomsQuery();
  useEffect(() => {
    // const fetchRooms = async () => {
    //   const res = await fetch("http://localhost:8000/api/workshops/rooms/");
    //   const data = await res.json();
    //   // console.log("aaaaaaa", data);
    //   if (res.ok) {
    //     setRooms(data.rooms);
    //   } else {
    //     console.log(res.status);
    //   }
    // };
    // fetchRooms();
    if (fetchRooms.isSuccess) {
      console.log(fetchRooms.data.rooms)
      setRooms(fetchRooms.data.rooms);
    } else {
      console.log("...loadingRooms");
    }
  }, [fetchRooms.data]);


  return (
    <>
      <Navbar />

      <div style={{ display: "grid", placeItems: "center" }}>
        <div className={styles.container}>
          {rooms?.map((room) => (
            <Workshop room={room} key={room.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
import React, { useEffect, useState } from "react";
import Workshop from "../components/workshops/Workshop";
import NewNavbar from "../components/NewNavbar";
import styles from "../components/workshops/card.module.css";
import { useGetRoomsQuery } from "../store/api/workshopApi";

const Workshops = () => {
  const [rooms, setRooms] = useState([]);
  const fetchRooms = useGetRoomsQuery();
  useEffect(() => {
    if (fetchRooms.isSuccess) {
      console.log(fetchRooms.data.rooms)
      setRooms(fetchRooms.data.rooms);
    } else {
      console.log("...loadingRooms");
    }
  }, [fetchRooms.data]);


  return (
    <>
      <NewNavbar />

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

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
      setRooms(fetchRooms.data.rooms);
    } else {
    }
  }, [fetchRooms.data]);


  return (
    <>
      <NewNavbar />

      <div style={{ display: "grid", placeItems: "center" ,marginTop:"5%" }}>
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

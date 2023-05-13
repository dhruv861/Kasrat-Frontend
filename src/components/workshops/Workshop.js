import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

const Workshop = ({ room }) => {
  const navigate = useNavigate();
  const enterRoom = async (roomId) => {
    console.log("RoomID",roomId);
    // const res = await fetch(
    //   `http://127.0.0.1:8000/api/workshops/room-code/host/${roomId}`
    // );
    // const data = await res.json();
    // console.log(data?.code);

    return navigate(`/videoapp/${roomId}`);
  };

  return (
    <div
      className={styles.card}
      key={room.id}
      onClick={() => enterRoom(room.room_id)}
    >
      <div className={styles.card__header} key={room.id}>
        <img
          src={room.image}
          alt="card__image"
          className="card__image"
          width="600"
        />
      </div>
      <div className={styles.card__body}>
        <span className="tag tag-blue">Workshop</span>
        <h4>{room.name}</h4>
        <p>{room.description}</p>
      </div>
    </div>
  );
};

export default Workshop;

import React from "react";
import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Workshop = ({ room }) => {
  const navigate = useNavigate();
  const enterRoom = (roomId, roomName, workshopTime) => {
    console.log("RoomID", roomId, roomName, workshopTime);
    const currentTime = new Date();
    if (currentTime.getDay() ==0 || currentTime.getDay() == 6) {
      if (currentTime >= workshopTime) {
        if (currentTime.getHours() >= workshopTime.getHours() + 1) {
          return toast.error("Sorry Workshop Ended");
        }
        return navigate(`/virtual-training/${roomName}/${roomId}`);
      } else if (currentTime < workshopTime) {
        return toast.loading("Workshop will start soon");
      }
    } else {
      toast.error("classes are conducted on Weekends");
    }
  };
  const today = new Date();

  const year = today.getFullYear();
  const monthIndex = today.getMonth();
  const day = today.getDate();
  const hours = parseInt(room.time);

  const workshopTime = new Date(year, monthIndex, day, hours);

  console.log(workshopTime.toDateString());

  return (
    <div
      className={styles.card}
      key={room.id}
      onClick={() => enterRoom(room.room_id, room.name, workshopTime)}
    >
      <div className={styles.card__header} key={room.id}>
        <img
          src={room.image}
          alt="card__image"
          className={styles["card__image"]}
          width="600"
        />
      </div>
      <div className={styles.card__body}>
        <span className="tag tag-blue">Workshop</span>
        <h4>{room.name}</h4>
        <div>
          <h6>Timings</h6>
          <p>Every {room.day}</p>
          <p>{workshopTime.toLocaleTimeString("en-US")}</p>
        </div>
        {/* <p>{room.description}</p> */}
      </div>
    </div>
  );
};

export default Workshop;

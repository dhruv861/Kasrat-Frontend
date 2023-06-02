import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { LeftArrow, RightArrow } from "./Arrow";

import ExerciseCard from "./ExerciseCard";

import "./globalStyles.css";
import usePreventBodyScroll from "./usePreventBodyScroll";
import BodyPart from "./BodyPart";

import "./hideScrollbar.css";

const Arrows = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: "50px",
    }}
  >
    <p style={{ color: "rgb(255, 38, 37)", paddingTop: " 10px" }}>
      You Can Scroll The Exercises
    </p>
    <div style={{ marginLeft: "10px", display: "flex" }}>
      <LeftArrow /> <RightArrow />
    </div>
  </div>
);

function HorizontalScrollBarNew({ items, bodyParts, setBodyPart, bodyPart }) {
  //   const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu Footer={Arrows} onWheel={onWheel}>
          {items.map((item, index) =>
            bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                key={index}
              />
            ) : (
              <ExerciseCard exercise={item} key={item.id} />
            )
          )}
        </ScrollMenu>
      </div>
    </>
  );
}
export default HorizontalScrollBarNew;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

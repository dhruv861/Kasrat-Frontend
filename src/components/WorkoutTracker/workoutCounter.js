import React from "react";
import { Pose } from "@mediapipe/pose";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";
import { useRef, useEffect } from "react";
// import { Button } from "@material-ui/core";
import bicepcurls from "../../assets/images/bicepcurls.png";
import crunches from "../../assets/images/crunches.png";
import pushups from "../../assets/images/pushup.png";
import squats from "../../assets/images/squats.png";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Navbar";

const styles = {
  webcam: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "2%",
    left: 0,
    right: 800,
    top: 200,
    textAlign: "center",
    zIndex: 9,
    width: 960,
    height: 600,
    border: "outset",
  },
  countBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1100,
    right: 0,
    top: 600,
    width: 400,
    height: 100,
  },
    selectBox: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1000,
    right: 0,
    top: 250,
    textAlign: "center",
    width: 400,
    color: "#05386B",
    background: "#ece9e6",
  },
  back: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 1700,
    right: 0,
    top: 850,
  },
};

const exrInfo = {
  bicepCurls: {
    index: [12, 14, 16],
    ul: 150,
    ll: 50,
  },
  squats: {
    index: [24, 26, 28],
    ul: 170,
    ll: 50,
  },
  pushups: {
    index: [12, 14, 16],
    ul: 160,
    ll: 80,
  },
  crunches: {
    index: [12, 24, 26],
    ul: 130,
    ll: 50,
  },
};

let count = 0;
let dir = 0;
let angle = 0;

function WorkoutCounter() {
  //const [exr, setExr] = useState("bicepCurls");
  const { exercise } = useParams();
  let imgSource;
  if (exercise === "bicepCurls") {
    imgSource = bicepcurls;
  } else if (exercise === "squats") {
    imgSource = squats;
  } else if (exercise === "pushups") {
    imgSource = pushups;
  } else if (exercise === "crunches") {
    imgSource = crunches;
  }

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //const count = useRef(null);
  //const dir = useRef(null);
  //let angle = useRef();
  let camera = null;
  const countTextbox = useRef(null);

  const angleBetweenThreePoints = (pos) => {
    //console.log("Reached angle")
    //vertexed around p1

    const a =
      Math.pow(pos[1].x - pos[0].x, 2) + Math.pow(pos[1].y - pos[0].y, 2);
    const b =
      Math.pow(pos[1].x - pos[2].x, 2) + Math.pow(pos[1].y - pos[2].y, 2);
    const c =
      Math.pow(pos[2].x - pos[0].x, 2) + Math.pow(pos[2].y - pos[0].y, 2);

    //angle in radians
    //var resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));

    //angle in degrees
    var resultDegree =
      (Math.acos((a + b - c) / Math.sqrt(4 * a * b)) * 180) / Math.PI;
    return resultDegree;
  };

  function onResult(results) {
    if (results.poseLandmarks) {
      const position = results.poseLandmarks;

      // set height and width of canvas
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const { width, height } = canvasRef.current;

      //ratios between 0-1, covert them to pixel positions
      const upadatedPos = [];
      const indexArray = exrInfo[exercise].index;

      for (let i = 0; i < 3; i += 1) {
        upadatedPos.push({
          x: position[indexArray[i]].x * width,
          y: position[indexArray[i]].y * height,
        });
      }
      //console.log(upadatedPos)
      angle = Math.round(angleBetweenThreePoints(upadatedPos));
      //console.log("Angle is getting updated ",angle)

      // Count reps
      //0 is down, 1 is up
      if (angle > exrInfo[exercise].ul) {
        console.log("test angle ", angle);
        if (dir === 0) {
          //count.current = count.current + 0.5
          console.log(count, " ", dir, " decrement ", angle);
          dir = 1;
        }
      }
      if (angle < exrInfo[exercise].ll && dir === 1) {
        console.log("complete");
        count = count + 1;
        console.log(count, " ", dir, " increment ", angle);
        dir = 0;
      }

      //console.log(count.current)
      const canvasElement = canvasRef.current;
      const canvasCtx = canvasElement.getContext("2d");
      canvasCtx.save();

      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      //canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      for (let i = 0; i < 2; i++) {
        canvasCtx.beginPath();
        canvasCtx.moveTo(upadatedPos[i].x, upadatedPos[i].y);
        canvasCtx.lineTo(upadatedPos[i + 1].x, upadatedPos[i + 1].y);
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = "white";
        canvasCtx.stroke();
      }
      for (let i = 0; i < 3; i++) {
        canvasCtx.beginPath();
        canvasCtx.arc(upadatedPos[i].x, upadatedPos[i].y, 10, 0, Math.PI * 2);
        canvasCtx.fillStyle = "#AAFF00";
        canvasCtx.fill();
      }
      canvasCtx.font = "40px aerial";
      canvasCtx.fillText(angle, upadatedPos[1].x + 10, upadatedPos[1].y + 40);
      canvasCtx.restore();
    }
  }

  useEffect(() => {
    console.log("rendered");
    count = 0;
    dir = 0;
    //console.log(count.current)
    //console.log("rendered counter")
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.4.1624666670/${file}`;
      },
    });
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResult);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          countTextbox.current.value = count;
          //console.log(count, dir)
          //console.log("hello",countTextbox.current.value)
          await pose.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  });
  //console.log(props)
  function resetCount() {
    console.log("clicked");
    count = 0;
    dir = 0;
  }

  return (
    <div>
      <Navbar />
      <div style={styles.selectBox}>
        <h1>Bicep Curls</h1>
        <img
          style={{ margin: "0 13%" }}
          src={imgSource}
          width="300"
          alt="bicepimage"
        ></img>
        <br></br>
        <div style={{ top: 50 }}>
          <h1>Count</h1>
          <input
            ref={countTextbox}
            value={count}
            style={{
              height: 50,
              fontSize: 40,
              width: 80,
              textAlign: "center",
              margin: "0 40%",
            }}
          />
          <br></br>
          <br></br>
          <Button
            style={{ top: 15, backgroundColor: "rgb(255, 38, 37)" }}
            size="large"
            variant="contained"
            color="primary"
            onClick={resetCount}
          >
            Reset Counter
          </Button>
        </div>
      </div>
      <Webcam ref={webcamRef} style={styles.webcam} />
      <canvas ref={canvasRef} style={styles.webcam} />
      <div style={styles.back}>
        <Link to="/counter">
          <Button size="large" variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default WorkoutCounter;

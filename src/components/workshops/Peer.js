import { useVideo } from "@100mslive/react-sdk";
import React from "react";

function Peer({ peer }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  }); 
  console.log("", peer)
  return (
    <div className="peer-container">
      <video
        ref={videoRef}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInline
      />
      <div className="peer-name">
        {peer.name} {peer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}

export default Peer;

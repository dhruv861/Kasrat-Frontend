import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import React from "react";
import Peer from "./Peer";
import "./styles.modules.css";


// function VideoTile({ peer }) {
//   const { videoRef } = useVideo({
//     trackId: peer.videoTrack,
//   });

//   return <video ref={videoRef} autoPlay muted playsInline></video>;
// }



function Conference() {

  const peers = useHMSStore(selectPeers);
  return (
    <div className="conference-section">
      <h2>Conference</h2>

      <div className="peers-container">
        {peers.map((peer) => (
          <>
            <Peer key={peer.id} peer={peer} />
          </>
        ))}
      </div>
    </div>
  );
}

export default Conference;

import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div>{props.phonetic.text}</div>

      <ReactAudioPlayer
        className="phonetic-audio mt-1"
        src={props.phonetic.audio}
        controls
      />
    </div>
  );
}

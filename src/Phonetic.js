import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
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
  } else {
    return null;
  }
}

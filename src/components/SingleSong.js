import { connect } from "react-redux";
import React from "react";
import { selectSong } from "../actions";
function SingleSong(props) {
  return (
    <li className="SongList" onClick={() => props.selectSong(props.song)}>
      {props.song.title} - {props.song.durations}
    </li>
  );
}

export default connect(null, { selectSong })(SingleSong);

import { connect } from "react-redux";
import React from "react";
import SingleSong from "./SingleSong";

function SongList(props) {
  return (
    <div className="SongList">
      {props.songs.map((song, index) => (
        <SingleSong key={index} song={song} />
      ))}
    </div>
  );
}

const mapeStateToProps = (state) => {
  return {
    songs: state.songs
  };
};

// mapDispatchToProps
export default connect(mapeStateToProps, null)(SongList);

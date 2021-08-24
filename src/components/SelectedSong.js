import { connect } from "react-redux";
import React from "react";
// import selectSong from "../actions";

function selectedSong(props) {
  return (
    <div className="selectedSong">
      {props.selectedSong && (
        <div>
          {props.selectedSong.title} - {props.selectedSong.durations}
        </div>
      )}
    </div>
  );
}
const mapStateToprops = (state) => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToprops, null)(selectedSong);

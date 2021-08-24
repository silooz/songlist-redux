import { combineReducers } from "redux";

const songReducer = (intialValue = null, action) => {
  if (action.type === "ADD_SONG") {
    return [...intialValue, action.payload];
  } else if (intialValue === null) {
    return [
      { title: "No scrubs", durations: "4:25" },
      { title: "Macarena", durations: "2:25" },
      { title: "All stars", durations: "1:10" },
      { title: "I want it that way", durations: "0:55" }
    ];
  } else return intialValue;
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});

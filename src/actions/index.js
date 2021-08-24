export const selectSong = (song) => {
    return {
      type: "SELECTED_SONG",
      payload: song
    };
  };
  
  export const addSong = (song) => {
    return {
      type: "ADD_SONG",
      payload: { title: song, durations: "2:25" }
    };
  };
  
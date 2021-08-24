import "./App.css";
import React, { useState } from "react";
import SongList from "./components/SongList";
import SelectedSong from "./components/SelectedSong";
import { addSong } from "./actions";
import { connect } from "react-redux";

function App(props) {
  const [song, setSong] = useState("");
  const addCustomSong = (e) => {
    e.preventDefault();
    props.addSong(song);
  };
  return (
    <div className="App">
      <form>
        <input
          value={song}
          type="text"
          onChange={(e) => setSong(e.target.value)}
        />
        <button onClick={addCustomSong}>Add Song</button>
      </form>
      <SongList />
      <SelectedSong />
    </div>
  );
}

export default connect(null, { addSong })(App);

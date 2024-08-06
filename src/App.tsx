import React from "react";
import { Meme } from "./components/Fatch";

function App() {
  return (
    <div className="App">
      <Meme url="https://api.imgflip.com/get_memes"/>
    </div>
  );
}

export default App;

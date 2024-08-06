import React from "react";
import { Meme } from "./components/Fatch";
import { Joke } from "./components/Async";

function App() {
  return (
    <div className="App">
      <Meme url="https://api.imgflip.com/get_memes"/>
      <Joke />
    </div>
  );
}

export default App;

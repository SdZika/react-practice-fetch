import React from "react";
import { Meme } from "./components/Fatch";
import { Joke } from "./components/Async";
import { Facts } from "./components/Facts";

function App() {
  return (
    <div className="App">
      <Meme url="https://api.imgflip.com/get_memes" />
      <Joke />
      <Facts />
    </div>
  );
}

export default App;

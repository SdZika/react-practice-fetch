import React from "react";
import { Meme } from "./components/Fatch";
import { Joke } from "./components/Async";
import { MyFetch } from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <Meme url="https://api.imgflip.com/get_memes"/>
      <Joke />
      <MyFetch />
    </div>
  );
}

export default App;
